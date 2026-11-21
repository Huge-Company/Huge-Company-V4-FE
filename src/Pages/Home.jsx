import DynamicHeader from '../Components/Header/DUI'
import Navbar from '../Components/Navigation/Navbar'
import Hero from '../Components/Hero/Hero'
import ProductShowcase from '../Components/ProductShowcase/ProductShowcase'
import QA from '../Components/Q&A/Q&A'
import ClarityEngines from '../Components/ClarityEngines/DUI'
import PageCallout from '../Components/PageCallout'
import Footer from '../Components/Footer/Footer'
import './Home.css'

export default function Home() {
  return (
    <div className="home-page">
      <DynamicHeader />
      <Navbar />
      <Hero />
      <main className="home-page__content">
        <ProductShowcase style="1" />
        <QA />
        <ClarityEngines />
        <PageCallout label="LET’S MOVE THE WORK FORWARD" title="Have a question or a project in mind?" />
      </main>
      <Footer />
    </div>
  )
}
