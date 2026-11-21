import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './PageCallout.css'

export default function PageCallout({ label, title, action = 'Talk to our team', to = '/contact' }) {
  return (
    <aside className="page-callout">
      <div><span>{label}</span><h2>{title}</h2></div>
      <Link to={to}>{action} <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /></Link>
    </aside>
  )
}
