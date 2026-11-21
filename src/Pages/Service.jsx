import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faFileLines, faFolderOpen, faChartLine, faCircleInfo, faMicrophone, faBrain } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import SiteLayout from '../Components/Layout/SiteLayout'
import PageCallout from '../Components/PageCallout'
import './Service.css'

const services = [
  { icon: faFileLines, number: '01', title: 'Micro Compiling', slug: 'compiling' },
  { icon: faFolderOpen, number: '02', title: 'Micro Filing', slug: 'filing' },
  { icon: faChartLine, number: '03', title: 'Micro Grading', slug: 'grading' },
  { icon: faCircleInfo, number: '04', title: 'Micro Informing', slug: 'informing' },
  { icon: faMicrophone, number: '05', title: 'Micro Recording', slug: 'recording' },
  { icon: faBrain, number: '06', title: 'Micro Thinking', slug: 'thinking' },
]

export default function Service() {
  return (
    <SiteLayout className="services-page">
      <main>
        <section className="services-intro" aria-labelledby="services-title">
          <div className="services-intro__copy">
            <span className="services-kicker">Huge Company / Services</span>
            <h1 id="services-title">Services built around <span>documents.</span></h1>
            <p>Practical support for the work behind every important document. Explore our six services.</p>
          </div>
          <div className="services-intro__note"><span>06</span><p>Service areas<br />ready to explore</p></div>
        </section>

        <section className="services-grid" aria-label="Our six services">
          {services.map(({ icon, number, title, slug }) => (
            <article className="service-card" key={number}>
              <div className="service-card__top"><span className="service-card__icon"><FontAwesomeIcon icon={icon} /></span><span className="service-card__number">{number}</span></div>
              <div>
                <p className="service-card__eyebrow">MICRO SERVICE {number}</p>
                <h2>{title}</h2>
                <p className="service-card__description">Service details will be added here. This space is ready for a short overview of the work, value, and outcomes.</p>
              </div>
              <Link className="service-card__link" to={`/service/micro/${slug}`}>Explore service <FontAwesomeIcon icon={faArrowRight} /></Link>
            </article>
          ))}
        </section>

        <PageCallout label="HAVE A PROJECT IN MIND?" title="Let’s find the right service." action="Talk to us" to="/inquiry" />
      </main>

    </SiteLayout>
  )
}
