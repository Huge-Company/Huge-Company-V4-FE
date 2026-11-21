import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBuilding, faFileLines, faLayerGroup, faMagnifyingGlass, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../Components/Navigation/Navbar'
import './SearchResults.css'

const searchIndex = [
  { title: 'Digidesk', type: 'Products', path: '/product/digidesk', icon: faFileLines, description: 'Scan physical papers into PDFs and receive them by WhatsApp or email.', keywords: 'machine scanner scan physical pdf whatsapp email digitize' },
  { title: 'Find a DigiDesk', type: 'Locations', path: '/product/digidesk/locate', icon: faBuilding, description: 'Look for the nearest verified DigiDesk location.', keywords: 'nearby nearest machine location find map city pin code' },
  { title: 'DigiLine', type: 'Products', path: '/product/digiline', icon: faLayerGroup, description: 'Review proposals, get a report, and find a team for next steps.', keywords: 'online proposal review report team filing development' },
  { title: 'Our services', type: 'Services', path: '/service', icon: faPeopleGroup, description: 'Explore Huge’s six service areas.', keywords: 'micro compiling filing grading informing recording thinking support' },
  { title: 'Document library', type: 'Resources', path: '/download', icon: faFileLines, description: 'Browse the document library by name and category.', keywords: 'download checklist checknote checkorder checkreport forms resource' },
  { title: 'About Huge', type: 'Company', path: '/about', icon: faBuilding, description: 'Products and intelligence for documents, building infrastructure for the Document Ecosystem.', keywords: 'company purpose document ecosystem infrastructure bamboo' },
  { title: 'Huge platform', type: 'Platform', path: '/platform', icon: faLayerGroup, description: 'Explore Huge’s connected areas: Platform, Service, Product, and Market.', keywords: 'document ecosystem intelligence reports ready-made businesses trade exhibitions' },
  { title: 'Contact our team', type: 'Company', path: '/contact', icon: faPeopleGroup, description: 'Get in touch with the Huge team.', keywords: 'contact email phone talk inquiry team' },
]

const popularSearches = ['Digidesk', 'DigiLine', 'Services', 'Document library', 'Contact']

export default function SearchResults() {
  const [params, setParams] = useSearchParams()
  const query = (params.get('q') || '').trim()
  const [value, setValue] = useState(query)
  const searchRef = useRef(null)

  useEffect(() => setValue(query), [query])
  useEffect(() => {
    const onShortcut = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        searchRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onShortcut)
    return () => window.removeEventListener('keydown', onShortcut)
  }, [])

  const results = useMemo(() => {
    const words = value.trim().toLowerCase().split(/\s+/).filter(Boolean)
    return searchIndex
      .map((item) => {
        const text = `${item.title} ${item.type} ${item.description} ${item.keywords}`.toLowerCase()
        const score = words.reduce((sum, word) => sum + (text.includes(word) ? 1 : 0) + (item.title.toLowerCase().includes(word) ? 2 : 0), 0)
        return { ...item, score }
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
      .slice(0, 5)
  }, [value])

  const submitSearch = (event) => {
    event.preventDefault()
    setParams(value.trim() ? { q: value.trim() } : {})
  }

  const choosePopular = (term) => {
    setValue(term)
    setParams({ q: term })
    searchRef.current?.focus()
  }

  return (
    <div className="search-page">
      <Navbar />
      <main className="search-command-center">
        <section className="search-command" aria-label="Search Huge">
          <form className="search-command__form" role="search" onSubmit={submitSearch}>
            <FontAwesomeIcon icon={faMagnifyingGlass} aria-hidden="true" />
            <input ref={searchRef} value={value} onChange={(event) => setValue(event.target.value)} placeholder="Search products, services, or documents" aria-label="Search Huge" autoComplete="off" />
          </form>

          {value.trim() ? (
            <section className="search-command__results" aria-live="polite">
              <div className="search-command__section-title"><h2>Results</h2><span>{results.length}</span></div>
              {results.length ? results.map((item) => (
                <Link className="search-command__result" key={item.title} to={item.path}>
                  <span className="search-command__result-icon"><FontAwesomeIcon icon={item.icon} aria-hidden="true" /></span>
                  <span className="search-command__result-copy"><small>{item.type}</small><strong>{item.title}</strong><span>{item.description}</span></span>
                  <FontAwesomeIcon className="search-command__result-arrow" icon={faArrowRight} aria-hidden="true" />
                </Link>
              )) : <p className="search-command__empty">No matches. Try a product, service, or document name.</p>}
            </section>
          ) : (
            <section className="search-command__popular" aria-labelledby="popular-title">
              <h2 id="popular-title">Popular Searches</h2>
              <div>{popularSearches.map((term, index) => <button type="button" key={term} onClick={() => choosePopular(term)}><span>0{index + 1}</span>{term}<FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /></button>)}</div>
            </section>
          )}
        </section>
      </main>
    </div>
  )
}
