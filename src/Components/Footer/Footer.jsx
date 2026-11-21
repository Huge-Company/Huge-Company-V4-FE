import { Link } from 'react-router-dom'
import './Footer.css'

const footerLogo = '/images/huge-mark-white.png'

const footerGroups = [
  {
    title: 'Company',
    links: [
      { label: 'Home', to: '/home/' },
      { label: 'About', to: '/about/' },
      { label: 'Team', href: 'https://hugecompany.in/Team' },
      { label: 'Partner', href: 'https://hugecompany.in/Partner' },
    ],
  },
  {
    title: 'Explore',
    links: [
      { label: 'Platform', to: '/platform/' },
      { label: 'Service', to: '/service/' },
      { label: 'Product', to: '/product/' },
      { label: 'Market', to: '/market/' },
    ],
  },
  {
    title: 'Tools',
    links: [
      { label: 'AIM', href: 'https://hugecompany.in/AIM' },
      { label: 'DScore', href: 'https://hugecompany.in/DScore' },
      { label: 'Login', to: '/login/' },
      { label: 'Contact', to: '/contact/' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Case Studies', href: 'https://hugecompany.in/Case%20Studies' },
      { label: 'Terms of Use', href: 'https://hugecompany.in/Terms-of-Use' },
      { label: 'Company Rights', href: 'https://hugecompany.in/Company%20Rights' },
      { label: 'Privacy Statement', href: 'https://hugecompany.in/Privacy%20Statement' },
    ],
  },
]

function FooterLink({ link }) {
  if (link.to) {
    return <Link className="footer-link" to={link.to}>{link.label}</Link>
  }

  return <a className="footer-link" href={link.href}>{link.label}</a>
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <div className="site-footer__brand">
          <Link className="site-footer__identity" to="/home/" aria-label="Huge Company home">
            <img src={footerLogo} alt="" />
            <span className="site-footer__wordmark">
              <strong>Huge</strong>
              <span>A <span className='tracked b BC-DYellow'>Bamboo</span> Company</span>
            </span>
          </Link>
          <p className="site-footer__tagline">
            <span>Making <span className="BC-DYellow">products</span> and</span>
            <span><span className="BC-DYellow">intelligence</span> for <span className="BC-DYellow">documents</span></span>
          </p>
        </div>

        <nav className="site-footer__links" aria-label="Footer navigation">
          {footerGroups.map((group) => (
            <div className="site-footer__group" key={group.title}>
              <h2>{group.title}</h2>
              <ul>
                {group.links.map((link) => (
                  <li key={link.label}><FooterLink link={link} /></li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="site-footer__bottom">
        <span>© {new Date().getFullYear()} <span className="b">HugeCompany.in</span></span>
        <span>A <span className="tracked b BC-DYellow">Bamboo</span> Company</span>
        <span className="site-footer__credit">Made by <strong>Reshabh Ohall</strong> · <a href="https://github.com/Reshabh-Ohall/Huge-Company-V4/graphs/contributors" target="_blank" rel="noreferrer">GitHub contributions</a></span>
      </div>
    </footer>
  )
}
