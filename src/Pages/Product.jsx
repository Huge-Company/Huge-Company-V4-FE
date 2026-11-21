import ProductShowcase from '../Components/ProductShowcase/ProductShowcase'
import SiteLayout from '../Components/Layout/SiteLayout'
import PageCallout from '../Components/PageCallout'
import './ProductPage.css'

export default function ProductPage() {
  return (
    <SiteLayout>
      <main className="products-page">
        <header className="products-page__intro">
          <span>Our Products / Huge</span>
          <h1>Tools for clearer document work.</h1>
          <p>Explore the products we’re building to make document processes simpler and more useful.</p>
        </header>
        <ProductShowcase style="2" />
        <PageCallout label="Huge Products" title="Find the right tool for your work." action="Talk to our team" />
      </main>
    </SiteLayout>
  )
}
