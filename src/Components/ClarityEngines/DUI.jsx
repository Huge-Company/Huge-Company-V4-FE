import './WorkSection.css'

const workAreas = [
  { title: 'Platform', name: 'Document Ecosystem', description: <>Ready-to-work <strong>Talent</strong> and <strong>Decision-Makers</strong> for <strong>Administration Work.</strong></> },
  { title: 'Service', name: 'Intelligence Reports', description: <>Information <strong>Systems</strong> and <strong>Control</strong> for <strong>Powerful Leadership.</strong></> },
  { title: 'Product', name: 'Readymade Businesses', description: <>Businesses with <strong>Ready Setup</strong> and <strong>Certified</strong> for <strong>Direct Takeover.</strong></> },
  { title: 'Market', name: 'Trade Exhibitions', description: <>New <strong>Customers</strong> and <strong>Partnerships</strong> through <strong>Trade Exhibitions.</strong></> },
]

export default function ClarityEngines() {
  return (
    <section className="work-section" aria-labelledby="work-title">
      <header className="work-section__heading">
        <span className="work-section__rule" aria-hidden="true" />
        <h2 id="work-title">Our Work</h2>
        <p>Four ways we help organizations move document work forward.</p>
      </header>
      <div className="work-grid">
        {workAreas.map((area, index) => (
          <article className="work-card" key={area.title}>
            <div className="work-card__top"><span>0{index + 1}</span><span aria-hidden="true">↗</span></div>
            <h3>{area.title}</h3>
            <p className="work-card__name">{area.name}</p>
            <p className="work-card__description">{area.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
