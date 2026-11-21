import { useState } from 'react'
import SiteLayout from '../Layout/SiteLayout'
import './Inquiry.css'

const inquiryEndpoint = 'https://formspree.io/f/xykqykgo'
const initialForm = { firstName: '', lastName: '', phoneNumber: '', email: '', inquiringFor: '', referredBy: '', referralDetails: '' }
const referralSources = ['Company Employee', 'External Partner', 'Other']

function Field({ label, name, value, onChange, type = 'text', placeholder, autoComplete }) {
  return (
    <label className="inquiry-field">
      <span>{label}</span>
      <input name={name} type={type} value={value} onChange={onChange} placeholder={placeholder} autoComplete={autoComplete} required />
    </label>
  )
}

export default function InquiryC() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const handleChange = ({ target: { name, value } }) => {
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('submitting')
    setError('')

    try {
      const response = await fetch(inquiryEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (!response.ok) throw new Error('Inquiry submission failed')
      setForm(initialForm)
      setStatus('submitted')
    } catch {
      setError('We could not submit your inquiry right now. Please try again.')
      setStatus('idle')
    }
  }

  return (
    <SiteLayout>
      <main className="inquiry-page">
        <header className="inquiry-intro">
          <span>Contact Huge</span>
          <h1>{status === 'submitted' ? 'Thanks for reaching out.' : 'Let’s start a conversation.'}</h1>
          <p>{status === 'submitted' ? 'Your inquiry has been received. Our team will get back to you soon.' : 'Share a few details and we’ll route your request to the right team.'}</p>
        </header>

        {status !== 'submitted' && (
          <form className="inquiry-panel inquiry-form" onSubmit={handleSubmit}>
            <div className="inquiry-field-row">
              <Field label="First name" name="firstName" value={form.firstName} onChange={handleChange} placeholder="First name" autoComplete="given-name" />
              <Field label="Last name" name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last name" autoComplete="family-name" />
            </div>
            <div className="inquiry-field-row">
              <Field label="Phone number" name="phoneNumber" type="tel" value={form.phoneNumber} onChange={handleChange} placeholder="Phone number" autoComplete="tel" />
              <Field label="Email address" name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email address" autoComplete="email" />
            </div>
            <Field label="What are you inquiring about?" name="inquiringFor" value={form.inquiringFor} onChange={handleChange} placeholder="Tell us what you need" />
            <div className="inquiry-field-row">
              <label className="inquiry-field">
                <span>Referred by</span>
                <select name="referredBy" value={form.referredBy} onChange={handleChange} required>
                  <option value="" disabled>Select source</option>
                  {referralSources.map((source) => <option key={source} value={source}>{source}</option>)}
                </select>
              </label>
              <Field label="Referral details" name="referralDetails" value={form.referralDetails} onChange={handleChange} placeholder="Name or reference" />
            </div>
            {error && <p className="inquiry-error" role="alert">{error}</p>}
            <button className="inquiry-submit" type="submit" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending…' : 'Send inquiry'}
            </button>
          </form>
        )}
      </main>
    </SiteLayout>
  )
}
