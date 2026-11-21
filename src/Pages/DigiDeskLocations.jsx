import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import SiteLayout from '../Components/Layout/SiteLayout'
import './DigiDeskLocations.css'

const futureLocations = [
  {
    code: 'ZP',
    name: 'Zilla Parishad Nashik',
    address: 'Nashik, Maharashtra',
  },
  {
    code: 'DyD',
    name: 'Deputy Director of Education',
    address: 'Nashik Division, Nashik, Maharashtra',
  },
  {
    code: 'CP Office',
    name: 'Commissioner of Police, Nashik City',
    address: 'Gangapur Road, Nashik, Maharashtra',
  },
]

function mapsSearch(address) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
}

export default function DigiDeskLocationsPage() {
  return (
    <SiteLayout>
      <main className="digidesk-locations">
        <Link className="digidesk-locations__back" to="/product/digidesk"><FontAwesomeIcon icon={faArrowLeft} aria-hidden="true" /> Back to DigiDesk</Link>

        <section className="digidesk-locations__panel" aria-labelledby="locations-title">
          <div className="digidesk-locations__intro">
            <div className="digidesk-locations__visual" aria-hidden="true">
              <span className="digidesk-locations__orbit" />
              <span className="digidesk-locations__pin"><FontAwesomeIcon icon={faLocationDot} /></span>
              <span className="digidesk-locations__status">Future locations · Nashik</span>
            </div>
            <div className="digidesk-locations__copy">
              <span className="digidesk-locations__eyebrow"><FontAwesomeIcon icon={faLocationDot} aria-hidden="true" /> Find a DigiDesk</span>
              <h1 id="locations-title">Planned for Nashik.</h1>
              <p>We’re exploring these public offices as possible future DigiDesk locations, making document scanning easier to access across Nashik.</p>
              <div className="digidesk-locations__notice"><span aria-hidden="true" /> No DigiDesk machines are installed yet. These are proposed locations, not active service points.</div>
            </div>
          </div>

          <div className="digidesk-locations__sites">
            <div className="digidesk-locations__sites-heading">
              <div>
                <span className="digidesk-locations__eyebrow">Nashik · proposed sites</span>
                <h2>Where DigiDesk could be</h2>
              </div>
              <span className="digidesk-locations__count">03 <span>future locations</span></span>
            </div>
            <div className="digidesk-locations__grid">
              {futureLocations.map((location) => (
                <article className="digidesk-locations__card" key={location.code}>
                  <div className="digidesk-locations__card-top">
                    <span className="digidesk-locations__code">{location.code}</span>
                    <span className="digidesk-locations__future"><span aria-hidden="true" /> Future</span>
                  </div>
                  <h3>{location.name}</h3>
                  <p>{location.address}</p>
                  <a href={mapsSearch(`${location.name}, ${location.address}`)} target="_blank" rel="noreferrer">
                    View office <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
                  </a>
                </article>
              ))}
            </div>
          </div>

          <div className="digidesk-locations__actions">
            <Link to="/product/digidesk">Explore DigiDesk <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /></Link>
            <Link to="/contact">Talk to our team <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /></Link>
          </div>
        </section>
      </main>
    </SiteLayout>
  )
}
