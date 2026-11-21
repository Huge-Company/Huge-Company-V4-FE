import DynamicHeader from '../Header/DUI'
import Navbar from '../Navigation/Navbar'
import Footer from '../Footer/Footer'
import './SiteLayout.css'

export default function SiteLayout({ children, className = '' }) {
  return (
    <div className={`site-layout ${className}`.trim()}>
      <DynamicHeader />
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
