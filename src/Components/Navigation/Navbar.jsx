import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBars, faChevronDown, faEnvelope, faMagnifyingGlass, faPhone, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { getAuthUser } from '../../auth'
import CLogo from './logo.avif'
import './nav.css'

const navigation = [
  ['Home', '/home/'],
  ['About', '/about/'],
  ['Platform', '/platform/'],
  ['Service', '/service/'],
  ['Product', '/product/'],
  ['Market', '/market/'],
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const [user, setUser] = useState(() => getAuthUser())

  useEffect(() => {
    const syncUser = () => setUser(getAuthUser())
    window.addEventListener('huge-auth-change', syncUser)
    return () => window.removeEventListener('huge-auth-change', syncUser)
  }, [])

  const account = [user ? 'Profile' : 'Login', user ? '/dashboard/' : '/login/']

  return (
    <header className="nav">
      <div className="nav-inner">
        <Link className="nav-brand" to="/home/" aria-label="Huge, a Bamboo Company — home">
          <img src={CLogo} alt="" className="nav-logo" />
          <span className="nav-wordmark"><strong>Huge</strong><span>A <b>Bamboo</b> Company</span></span>
        </Link>

        <nav className="nav-primary" aria-label="Main navigation">
          {navigation.map(([label, href]) => <Link key={label} to={href}>{label}</Link>)}
          <Link className="nav-search-link" to="/search/"><FontAwesomeIcon icon={faMagnifyingGlass} aria-hidden="true" /> Search</Link>
        </nav>

        <div className="nav-actions">
          {user && <Link className="nav-download" to="/download/">Download</Link>}
          <div className="nav-contact-wrap">
            <button className="nav-contact" type="button" aria-expanded={contactOpen} aria-controls="nav-contact-menu" onClick={() => setContactOpen((open) => !open)}>
              Contact <FontAwesomeIcon icon={faChevronDown} aria-hidden="true" />
            </button>
            {contactOpen && <div className="nav-contact-menu" id="nav-contact-menu">
              <a href="mailto:namastehuge@gmail.com"><FontAwesomeIcon icon={faEnvelope} aria-hidden="true" /> namastehuge@gmail.com</a>
              <a href="tel:+919005015111"><FontAwesomeIcon icon={faPhone} aria-hidden="true" /> +91 900 501 5111</a>
              <Link to="/contact/" onClick={() => setContactOpen(false)}>Talk to us <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /></Link>
            </div>}
          </div>
          <Link className="nav-account" to={account[1]}>{account[0]}</Link>
        </div>

        <button className="nav-toggle" type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} aria-controls="site-navigation" onClick={() => setMenuOpen((open) => !open)}>
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} aria-hidden="true" />
        </button>

        {menuOpen && <nav className="nav-mobile-menu" aria-label="Mobile navigation" id="site-navigation">
          {navigation.map(([label, href]) => <Link key={label} to={href} onClick={() => setMenuOpen(false)}>{label}</Link>)}
          <Link to="/search/" onClick={() => setMenuOpen(false)}>Search</Link>
          <button className="nav-mobile-contact-toggle" type="button" aria-expanded={contactOpen} onClick={() => setContactOpen((open) => !open)}>Contact <FontAwesomeIcon icon={faChevronDown} aria-hidden="true" /></button>
          {contactOpen && <div className="nav-mobile-contact">
            <a href="mailto:namastehuge@gmail.com"><FontAwesomeIcon icon={faEnvelope} aria-hidden="true" /> namastehuge@gmail.com</a>
            <a href="tel:+919005015111"><FontAwesomeIcon icon={faPhone} aria-hidden="true" /> +91 900 501 5111</a>
            <Link to="/contact/" onClick={() => { setMenuOpen(false); setContactOpen(false) }}>Talk to us <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /></Link>
          </div>}
          {user && <Link to="/download/" onClick={() => setMenuOpen(false)}>Download</Link>}
          <Link to={account[1]} onClick={() => setMenuOpen(false)}>{account[0]}</Link>
        </nav>}
      </div>
    </header>
  )
}
