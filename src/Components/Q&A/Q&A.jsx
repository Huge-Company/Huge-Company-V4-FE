import './Q&A.css'
import { aboutAnswers } from '../../content/aboutAnswers'

export default function QA() {
  return (
    <section className="qa-section" aria-label="About Huge Company">
      <div className="qa-grid">
        {aboutAnswers.map((answer) => (
          <article className="qa-card" key={answer.title}>
            <h2 className="qa-card__title">{answer.title}</h2>
            <p className="qa-card__answer">{answer.content}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
