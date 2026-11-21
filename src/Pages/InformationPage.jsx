import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faFileLines, faLayerGroup, faPeopleGroup, faChartLine, faCompass, faBuilding } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import SiteLayout from '../Components/Layout/SiteLayout'
import './InformationPage.css'

const pages = {
  about: {
    label: 'About Huge',
    title: 'Making products and intelligence for documents.',
    description: 'We are a Bamboo Company building the Document Ecosystem that BHARAT needs. Huge brings together a platform, intelligence reports, ready-made businesses, and trade exhibitions.',
    cards: [
      { icon: faLayerGroup, title: 'Platform', content: 'Document Ecosystem: infrastructure for finding the right documents and the steps to follow.' },
      { icon: faChartLine, title: 'Service', content: 'Intelligence Reports: information systems and control for powerful leadership.' },
      { icon: faFileLines, title: 'Product', content: 'Ready-made businesses with an established setup, prepared for direct takeover.' },
      { icon: faPeopleGroup, title: 'Market', content: 'Trade exhibitions that create opportunities for new customers and partnerships.' },
    ],
  },
  platform: {
    label: 'Huge Platform',
    title: 'A connected way to move document work forward.',
    description: 'Huge is developing four connected areas around documents, administration, and business opportunities.',
    cards: [
      { icon: faLayerGroup, title: 'Platform', content: 'Document Ecosystem: the connected infrastructure that brings document work and useful information together.' },
      { icon: faChartLine, title: 'Service', content: 'Intelligence Reports: information systems and control that support clearer administration and decision-making.' },
      { icon: faFileLines, title: 'Product', content: 'Ready-made businesses: business opportunities with an established setup, prepared for direct takeover.' },
      { icon: faPeopleGroup, title: 'Market', content: 'Trade exhibitions: a way to reach new customers and build partnerships.' },
    ],
  },
  market: {
    label: 'Huge Market',
    title: 'More useful connections. Better next steps.',
    description: 'We’re creating room for organizations, partners, and customers to meet around practical document solutions.',
    cards: [
      { icon: faCompass, title: 'Trade exhibitions', content: 'A place to introduce Huge products and services to new audiences.' },
      { icon: faPeopleGroup, title: 'Partnerships', content: 'Build relationships with people and organizations working on better document processes.' },
      { icon: faBuilding, title: 'Organizations', content: 'Connect with teams looking for clearer ways to manage documents and administrative work.' },
    ],
  },
}

export default function InformationPage({ page }) {
  const content = pages[page]

  return (
    <SiteLayout>
      <main className="information-page">
        <header className="information-hero">
          <span className="information-hero__label">{content.label}</span>
          <h1>{content.title}</h1>
          <p>{content.description}</p>
          <span className="information-hero__rule" aria-hidden="true" />
        </header>

        {page === 'about' && (
          <section className="about-manifesto" aria-label="Huge Company purpose">
            <span>OUR PURPOSE</span>
            <p>Building infrastructure for the <strong>Document Ecosystem.</strong></p>
          </section>
        )}

        <section className={`information-grid${page === 'platform' ? ' information-grid--platform' : ''}`} aria-label={`${content.label} overview`}>
          {content.cards.map((card, index) => (
            <article className="information-card" key={card.title}>
              <div className="information-card__top">
                <span className="information-card__icon"><FontAwesomeIcon icon={card.icon} /></span>
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h2>{card.title}</h2>
              <p>{card.content}</p>
            </article>
          ))}
        </section>

        <aside className="information-cta">
          {page === 'market' ? (
            <>
              <div><span>Huge Market</span><h2>Enroll in the next Market.</h2></div>
              <Link to="/market">Explore the Market <FontAwesomeIcon icon={faArrowRight} /></Link>
            </>
          ) : (
            <>
              <div><span>LET’S MOVE THE WORK FORWARD</span><h2>Have a question or a project in mind?</h2></div>
              <Link to="/inquiry">Talk to our team <FontAwesomeIcon icon={faArrowRight} /></Link>
            </>
          )}
        </aside>
      </main>
    </SiteLayout>
  )
}
