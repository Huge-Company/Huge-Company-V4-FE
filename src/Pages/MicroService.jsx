import { Link, Navigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faFileLines, faFolderOpen, faChartLine, faCircleInfo, faMicrophone, faBrain } from '@fortawesome/free-solid-svg-icons'
import SiteLayout from '../Components/Layout/SiteLayout'
import './MicroService.css'

const services = {
  compiling: { title: 'Micro Compiling', number: '01', icon: faFileLines },
  filing: { title: 'Micro Filing', number: '02', icon: faFolderOpen },
  grading: { title: 'Micro Grading', number: '03', icon: faChartLine },
  informing: { title: 'Micro Informing', number: '04', icon: faCircleInfo },
  recording: { title: 'Micro Recording', number: '05', icon: faMicrophone },
  thinking: { title: 'Micro Thinking', number: '06', icon: faBrain },
}

export default function MicroServicePage() {
  const { serviceName } = useParams()
  const service = services[serviceName]

  if (!service) return <Navigate to="/service" replace />

  return (
    <SiteLayout>
      <main className="micro-service-page">
        <Link className="micro-service-page__back" to="/service"><FontAwesomeIcon icon={faArrowLeft} aria-hidden="true" /> All services</Link>
        <section className="micro-service-page__hero" aria-labelledby="micro-service-title">
          <div className="micro-service-page__content">
            <span className="micro-service-page__eyebrow">Huge · Service {service.number}</span>
            <h1 id="micro-service-title">{service.title}</h1>
            <p>We’re preparing the full overview of this service. More information will be added as the Huge platform and service details are finalized.</p>
            <div className="micro-service-page__actions">
              <Link to="/contact">Talk to our team <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /></Link>
              <Link to="/service">Explore all services</Link>
            </div>
          </div>
          <div className="micro-service-page__visual" aria-hidden="true">
            <span className="micro-service-page__number">{service.number}</span>
            <span className="micro-service-page__icon"><FontAwesomeIcon icon={service.icon} /></span>
            <span className="micro-service-page__rule" />
            <span className="micro-service-page__visual-label">Micro Service</span>
          </div>
        </section>
      </main>
    </SiteLayout>
  )
}
