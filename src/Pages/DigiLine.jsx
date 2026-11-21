import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faChartLine, faFileLines, faMagnifyingGlass, faPlay, faUsers } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import SiteLayout from '../Components/Layout/SiteLayout'
import './ProductDetail.css'

const steps = [
  { number: '01', title: 'Upload your proposal', description: 'Share the proposal you want reviewed, such as a building completion certificate proposal.' },
  { number: '02', title: 'Review before filing', description: 'DigiLine reviews the proposal before it is filed and prepares it for the next step.' },
  { number: '03', title: 'Get a Report', description: 'Get a clear report on your proposal, then find a team to support the next steps.' },
]

export default function DigiLinePage() {
  return (
    <SiteLayout>
      <main className="product-detail product-detail--line">
        <section className="product-detail__hero" aria-labelledby="digiline-title">
          <div className="product-detail__copy">
            <span className="product-detail__eyebrow">Huge Product / Online Platform <i>In development</i></span>
            <h1 id="digiline-title"><strong>Digi</strong><span>Line</span></h1>
            <h2>Review. Prepare. Get it done.</h2>
            <p>DigiLine is an online platform for reviewing proposals before filing, preparing a report, and helping you find a team for the next steps.</p>
            <div className="product-detail__actions">
              <Link className="product-detail__button product-detail__button--primary" to="/product/digiline/demo">View it in action <FontAwesomeIcon icon={faPlay} aria-hidden="true" /></Link>
              <a className="product-detail__button product-detail__button--secondary" href="#how-it-works">Explore the workflow <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /></a>
            </div>
          </div>

          <div className="product-detail__visual product-detail__visual--line" aria-label="Preview of the DigiLine proposal dashboard">
            <div className="line-preview">
              <div className="line-preview__top"><span /><span /><span /><strong>DigiLine</strong></div>
              <div className="line-preview__layout">
                <aside><b>Overview</b><span>Proposals</span><span>Reports</span><span>Teams</span></aside>
                <div className="line-preview__main">
                  <small>YOUR WORKSPACE</small><h3>Proposal review</h3><p>Review. Prepare. Get it done.</p>
                  <div className="line-preview__metrics"><span><FontAwesomeIcon icon={faFileLines} /><b>Proposals</b></span><span><FontAwesomeIcon icon={faChartLine} /><b>Reports</b></span><span><FontAwesomeIcon icon={faUsers} /><b>Teams</b></span></div>
                  <div className="line-preview__document"><FontAwesomeIcon icon={faFileLines} /><span><b>Building completion proposal</b><small>Ready for review</small></span><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
                </div>
              </div>
            </div>
            <div className="line-preview__report"><span>REPORT READY</span><b>Proposal report</b><i /><i /><i /></div>
          </div>
        </section>

        <section className="product-detail__steps" id="how-it-works" aria-labelledby="digiline-steps-title">
          <div className="product-detail__section-heading"><span>How DigiLine works</span><h2 id="digiline-steps-title">A clearer next step for every proposal.</h2></div>
          <div className="product-detail__step-grid">
            {steps.map((step) => <article className={`product-detail__step ${step.number === '03' ? 'product-detail__step--report' : ''}`} key={step.number}>
              <span className="product-detail__step-index">{step.number}</span>
              <span className="product-detail__step-icon"><FontAwesomeIcon icon={step.number === '01' ? faFileLines : step.number === '02' ? faMagnifyingGlass : faChartLine} aria-hidden="true" /></span>
              <h3>{step.title}</h3><p>{step.description}</p>
            </article>)}
          </div>
        </section>
      </main>
    </SiteLayout>
  )
}
