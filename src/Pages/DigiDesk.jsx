import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faExpand, faFileLines, faLocationDot, faPaperPlane, faUpload } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import SiteLayout from '../Components/Layout/SiteLayout'
import './ProductDetail.css'

const steps = [
  { icon: faUpload, title: 'Insert physical documents', description: 'Place your papers into the machine, just as you would insert a card into an ATM.' },
  { icon: faExpand, title: 'Scan into PDF', description: 'DigiDesk captures the pages and turns them into a clean, shareable PDF.' },
  { icon: faPaperPlane, title: 'Receive your PDF', description: 'Get your file through WhatsApp and email, ready for your next step.' },
]

export default function DigiDeskPage() {
  return (
    <SiteLayout>
      <main className="product-detail product-detail--desk">
        <section className="product-detail__hero" aria-labelledby="digidesk-title">
          <div className="product-detail__copy">
            <span className="product-detail__eyebrow">Huge Product / Document Scanning</span>
            <h1 id="digidesk-title"><strong>Digi</strong><span>desk</span></h1>
            <h2>Smart Scan. Perfect PDF. Ready to Submit.</h2>
            <p>A self-service document machine for government offices. Insert physical documents, scan them into PDFs, and receive your files through WhatsApp and email.</p>
            <div className="product-detail__actions">
              <Link className="product-detail__button product-detail__button--primary" to="/product/digidesk/locate">Find a DigiDesk <FontAwesomeIcon icon={faLocationDot} aria-hidden="true" /></Link>
              <a className="product-detail__button product-detail__button--secondary" href="#how-it-works">How it works <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /></a>
            </div>
          </div>
          <figure className="product-detail__visual product-detail__visual--desk">
            <img src="/images/digidesk-machine.png" alt="DigiDesk self-service document scanning machine" />
            <figcaption><span /> Scan · Create PDF · Send to you</figcaption>
          </figure>
        </section>

        <section className="product-detail__steps" id="how-it-works" aria-labelledby="digidesk-steps-title">
          <div className="product-detail__section-heading"><span>Three simple steps</span><h2 id="digidesk-steps-title">From paper to PDF.</h2></div>
          <div className="product-detail__step-grid">
            {steps.map((step, index) => <article className="product-detail__step" key={step.title}>
              <span className="product-detail__step-index">0{index + 1}</span>
              <span className="product-detail__step-icon"><FontAwesomeIcon icon={step.icon} aria-hidden="true" /></span>
              <h3>{step.title}</h3><p>{step.description}</p>
            </article>)}
          </div>
        </section>
      </main>
    </SiteLayout>
  )
}
