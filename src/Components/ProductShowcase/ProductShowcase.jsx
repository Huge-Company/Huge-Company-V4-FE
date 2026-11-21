import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowRight,
  faChartSimple,
  faCircleCheck,
  faCloudArrowUp,
  faDownload,
  faExpand,
  faFileLines,
  faGear,
  faHouse,
  faMagnifyingGlass,
  faPaperPlane,
  faPlay,
  faUpload,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'
import './ProductShowcase.css'

const digiLine = {
  name: 'DigiLine',
  description:
    'DigiLine is an online platform in development for reviewing proposals before filing, preparing reports, and helping you find a team.',
  steps: [
    {
      icon: faCloudArrowUp,
      title: 'Upload your proposal',
      description:
        'Share the proposal you want reviewed, such as a building completion certificate proposal.',
    },
    {
      icon: faMagnifyingGlass,
      title: 'Review before filing',
      description:
        'DigiLine reviews your proposal and prepares a report before it is filed.',
    },
    {
      icon: faUsers,
      title: 'Get a Report',
      description:
        'Get a clear report on your proposal, then find a team to support the next steps.',
    },
  ],
}

const digiDesk = {
  description:
    'Digidesk is a self-service machine for documents. Insert physical documents, scan them into PDFs, and receive the files through WhatsApp and email.',
  steps: [
    {
      icon: faUpload,
      title: 'Insert physical documents',
      description:
        'Place your papers into the machine just like you would insert a card into an ATM.',
    },
    {
      icon: faExpand,
      title: 'Scan into PDF',
      description:
        'Digidesk captures the documents and converts them into clean, shareable PDF files.',
    },
    {
      icon: faPaperPlane,
      title: 'Send via WhatsApp and email',
      description:
        'Receive your PDF files through WhatsApp and email.',
    },
  ],
}

function ProductSteps({ steps }) {
  return (
    <div className="product-showcase__steps">
      {steps.map((step, index) => (
        <article className="product-step" key={step.title}>
          <span className="product-step__icon flex items-center justify-center" aria-hidden="true">
            <FontAwesomeIcon icon={step.icon} />
          </span>
          <span className="product-step__number">0{index + 1}</span>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </article>
      ))}
    </div>
  )
}

function DigiDeskShowcase({ compact = false }) {
  return (
    <section className="product-showcase product-showcase--digidesk" aria-labelledby="digidesk-title">
      <div className="product-showcase__header flex items-center justify-between">
        <div className="product-showcase__intro">
          <h2 className="product-showcase__title" id="digidesk-title">
            <span className="digidesk-wordmark"><strong>Digi</strong><span>desk</span></span>
          </h2>
          <p>{digiDesk.description}</p>
          <div className="product-showcase__actions flex flex-wrap">
            <Link className="product-action product-action--primary" to="/product/digidesk">
              Explore DigiDesk <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="digidesk-image flex items-center justify-end">
          <img src="/images/digidesk-machine.png" alt="Digidesk document scanning machine with its document tray, screen, scanner, and PDF collection slot" />
        </div>
      </div>
      {!compact && <ProductSteps steps={digiDesk.steps} />}
    </section>
  )
}

function ProductSection({ product, compact = false }) {
  return (
    <section id="digiline" className="product-showcase product-showcase--digiline" aria-labelledby="digiline-title">
      <div className="product-showcase__header flex items-center justify-between">
        <div className="product-showcase__intro">
          <h2 className="product-showcase__title" id="digiline-title">
            <span className="digiline-wordmark"><strong>Digi</strong><span>Line</span></span>
          </h2>
          <p>{product.description}</p>
          <div className="product-showcase__actions flex flex-wrap">
            <Link className="product-action product-action--primary" to="/product/digiline">
              Learn More <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
            </Link>
            <Link className="product-action product-action--secondary" to="/product/digiline/demo">
              View it in Action <FontAwesomeIcon icon={faPlay} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="digiline-scene" aria-hidden="true">
          <div className="digiline-dashboard">
            <div className="digiline-dashboard__windowbar">
              <span /><span /><span />
            </div>
            <div className="digiline-dashboard__brand">
              <FontAwesomeIcon icon={faFileLines} /> <strong>DigiLine</strong>
            </div>
            <div className="digiline-dashboard__body">
              <nav className="digiline-dashboard__nav">
                <span className="is-active"><FontAwesomeIcon icon={faHouse} /> Dashboard</span>
                <span><FontAwesomeIcon icon={faFileLines} /> Proposals</span>
                <span><FontAwesomeIcon icon={faChartSimple} /> Reports</span>
                <span><FontAwesomeIcon icon={faUsers} /> Teams</span>
                <span><FontAwesomeIcon icon={faGear} /> Settings</span>
              </nav>
              <div className="digiline-dashboard__content">
                <h3>Welcome to DigiLine</h3>
                <p>Review. Prepare. Get it done.</p>
                <div className="digiline-dashboard__metrics">
                  <div><FontAwesomeIcon icon={faFileLines} /><strong>Proposals</strong></div>
                  <div><FontAwesomeIcon icon={faCircleCheck} /><strong>Reviewed</strong></div>
                  <div><FontAwesomeIcon icon={faUsers} /><strong>Teams</strong></div>
                </div>
                <div className="digiline-dashboard__activity">
                  <strong>Recent Activity</strong>
                  <span><FontAwesomeIcon icon={faFileLines} /> Proposal review <small>In development</small></span>
                </div>
              </div>
            </div>
          </div>
          <div className="digiline-report-card">
            <strong><FontAwesomeIcon icon={faChartSimple} /> Generate Report</strong>
            <span /><span /><span />
            <div>Download Report <FontAwesomeIcon icon={faDownload} /></div>
          </div>
        </div>
      </div>

      {!compact && <ProductSteps steps={product.steps} />}

    </section>
  )
}

function ProductCardShowcase() {
  return (
    <div className="product-showcases product-showcases--style-2" aria-label="Our products">
      <DigiDeskShowcase compact />
      <ProductSection product={digiLine} compact />
    </div>
  )
}

export default function ProductShowcase({ style = '1' }) {
  if (style === '2') return <ProductCardShowcase />

  return (
    <div className="product-showcases product-showcases--style-1 flex flex-column" aria-label="Our products">
      <DigiDeskShowcase />
      <div className="product-showcase-divider" role="separator" aria-label="and">
        <span className="product-showcase-divider-txt flex items-center justify-center">AND</span>
      </div>
      <ProductSection product={digiLine} />
    </div>
  )
}
