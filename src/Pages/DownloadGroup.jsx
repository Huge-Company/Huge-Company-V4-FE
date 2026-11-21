import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import SiteLayout from '../Components/Layout/SiteLayout'
import downloadGroups from '../Components/Download/data'
import '../Components/Download/Download.css'

export default function DownloadGroup() {
  const { group: groupParam, letter: letterParam } = useParams()
  const group = downloadGroups.find(({ label }) => label.toLowerCase() === groupParam?.toLowerCase())
  const letter = letterParam?.toUpperCase()

  if (!group || (letter && !group.letters.includes(letter))) {
    return (
      <SiteLayout>
        <main className="download-page">
          <section className="download-empty">
            <span>DOCUMENT LIBRARY</span>
            <h1>That collection isn’t here yet.</h1>
            <p>Choose a letter range to return to the library.</p>
            <Link to="/download"><FontAwesomeIcon icon={faArrowLeft} /> Back to all documents</Link>
          </section>
        </main>
      </SiteLayout>
    )
  }

  return (
    <SiteLayout>
      <main className="download-page">
        <header className="download-intro">
          <Link className="download-back" to="/download"><FontAwesomeIcon icon={faArrowLeft} /> All document ranges</Link>
          <span>DOCUMENT LIBRARY / {group.label}</span>
          <h1>{letter ? `Documents starting with ${letter}` : `${group.label} document range`}</h1>
          <p>{letter ? 'There are no downloadable documents listed for this letter yet.' : 'Choose a letter below to view available documents in this range.'}</p>
        </header>
        <nav className="download-letter-list" aria-label="Choose a document letter">
          {group.letters.map((item) => (
            <Link className={item === letter ? 'is-active' : ''} key={item} to={`/download/${group.label.toLowerCase()}/${item.toLowerCase()}`}>{item}</Link>
          ))}
        </nav>
        {letter && <section className="download-empty"><span>{letter} / {group.label}</span><h2>No files listed yet</h2><p>This collection is ready for documents to be added.</p></section>}
      </main>
    </SiteLayout>
  )
}
