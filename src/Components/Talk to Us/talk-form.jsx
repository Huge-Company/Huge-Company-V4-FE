import { useState } from 'react'
import './talk-form.css'

const endpoint = 'https://formspree.io/f/xykqykgo'

export default function TalkForm({ onClose }) {
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('sending')
    setError('')
    const formData = Object.fromEntries(new FormData(event.currentTarget))

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!response.ok) throw new Error('Submission failed')
      setStatus('sent')
    } catch {
      setError('We could not send your message. Please try again.')
      setStatus('idle')
    }
  }

  return (
    <section className="talk-panel show" role="dialog" aria-modal="true" aria-labelledby="talk-title">
      <header className="talk-panel-header">
        <div>
          <span className="talk-kicker">Huge · Contact</span>
          <h2 className="talk-panel-title" id="talk-title">{status === 'sent' ? 'Thanks for reaching out.' : 'Talk to our team'}</h2>
        </div>
        <button className="talk-panel-close" type="button" onClick={onClose} aria-label="Close dialog">×</button>
      </header>
      {status === 'sent' ? (
        <p className="talk-confirmation">Your message is on its way. Our team will be in touch soon.</p>
      ) : (
        <form className="talk-form" onSubmit={handleSubmit}>
          <label className="talk-field">Name<input className="talk-input" name="name" autoComplete="name" required placeholder="Your name" /></label>
          <label className="talk-field">Email<input className="talk-input" name="email" type="email" autoComplete="email" required placeholder="you@example.com" /></label>
          <label className="talk-field">Mobile number<input className="talk-input" name="phone" type="tel" autoComplete="tel" placeholder="+91" /></label>
          <label className="talk-field">How can we help?<textarea className="talk-textarea" name="message" rows="3" required placeholder="Tell us a little about what you need" /></label>
          {error && <p className="talk-error" role="alert">{error}</p>}
          <button className="talk-submit-b" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send message'}</button>
        </form>
      )}
    </section>
  )
}
