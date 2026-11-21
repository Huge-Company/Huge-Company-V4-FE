import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareInstagram, faLinkedin, faSquareFacebook, faSquareTwitter } from '@fortawesome/free-brands-svg-icons'
import './Header.css'

const socialIcons = [faSquareInstagram, faLinkedin, faSquareFacebook, faSquareTwitter]

export default function SocialBar() {
  return (
    <header className="social-bar">
      <ul className="social-links" aria-label="Huge social channels">
        {socialIcons.map((icon, index) => (
          <li key={index} aria-hidden="true"><FontAwesomeIcon icon={icon} /></li>
        ))}
      </ul>
    </header>
  )
}
