import { Link } from 'react-router-dom'
import SiteLayout from '../Components/Layout/SiteLayout'
import '../Components/ProductShowcase/ProductShowcase.css'
import './DigiLinePages.css'

export default function DigiLineDemoPage() {
  return (
    <SiteLayout>
      <main className="digiline-page">
        <section className="digiline-page__status">
          <span className="digiline-page__eyebrow">DigiLine</span>
          <h1>This product is in development</h1>
          <p>
            We’re preparing the DigiLine experience. The interactive preview will be
            available here when it’s ready.
          </p>
          <Link className="product-action product-action--secondary" to="/product/digiline">
            Learn more about DigiLine
          </Link>
        </section>
      </main>
    </SiteLayout>
  )
}
