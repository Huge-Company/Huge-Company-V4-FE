import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faEnvelope, faEye, faEyeSlash, faLock, faLocationDot, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { registerAccount } from '../../auth'
import useRotatingEmailPlaceholder from '../../hooks/useRotatingEmailPlaceholder'
import Logo from '../Navigation/logo.avif'
import './Login.css'

const initialForm = { firstName: '', lastName: '', email: '', phoneNumber: '', accountType: 'Personal', address: '', password: '', confirmPassword: '' }

function RegisterField({ id, label, icon, className = '', children, ...inputProps }) {
  return (
    <label className={`identity-register-field ${className}`.trim()} htmlFor={id}>
      <span>{label} <i aria-hidden="true">*</i></span>
      <span className="identity-input-wrap">
        {icon && <FontAwesomeIcon icon={icon} aria-hidden="true" />}
        {children || <input id={id} name={id} {...inputProps} required />}
      </span>
    </label>
  )
}

export default function Register() {
  const navigate = useNavigate()
  const [form, setForm] = useState(initialForm)
  const [visible, setVisible] = useState({ password: false, confirmPassword: false })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')
  const emailPlaceholder = useRotatingEmailPlaceholder()

  const handleChange = ({ target: { name, value } }) => {
    setForm((current) => ({ ...current, [name]: value }))
    setError('')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (form.password !== form.confirmPassword) {
      setError('Your passwords do not match.')
      return
    }
    setStatus('submitting')
    setError('')
    try {
      const { confirmPassword, ...details } = form
      await registerAccount(details)
      navigate('/dashboard')
    } catch (submitError) {
      setError(submitError.message)
      setStatus('idle')
    }
  }

  return (
    <main className="identity-page identity-page--register">
      <span className="identity-orbit identity-orbit--top" aria-hidden="true" />
      <span className="identity-orbit identity-orbit--bottom" aria-hidden="true" />
      <div className="identity-layout identity-layout--register">
        <section className="identity-brand identity-brand--register" aria-label="Huge Identity">
          <div className="identity-brand__emblem"><img src={Logo} alt="" /></div>
          <div className="identity-brand__wordmark"><strong>Huge</strong><span>Identity</span></div>
          <span className="identity-brand__across"><i />Across Huge<i /></span>
        </section>

        <section className="identity-main identity-main--register" aria-labelledby="register-title">
          <div className="identity-card identity-card--register">
            <header className="identity-register-header">
              <div className="identity-register-brand"><img src={Logo} alt="" /><span><strong>Huge</strong><span>Identity</span></span></div>
              <p>Already have an account? <Link to="/login">Sign in <FontAwesomeIcon icon={faArrowRight} /></Link></p>
            </header>
            <div className="identity-register-heading">
              <h1 id="register-title">Create your account</h1>
              <p>Join Huge Company with your Huge Identity.</p>
            </div>

            <form className="identity-register-form" onSubmit={handleSubmit}>
              <RegisterField id="firstName" label="First Name" icon={null} className="identity-register-field--half" type="text" placeholder="Enter your first name" autoComplete="given-name" value={form.firstName} onChange={handleChange} />
              <RegisterField id="lastName" label="Last Name" icon={null} className="identity-register-field--half" type="text" placeholder="Enter your last name" autoComplete="family-name" value={form.lastName} onChange={handleChange} />
              <RegisterField id="email" label="Email Address" icon={faEnvelope} className="identity-register-field--full" type="email" placeholder={emailPlaceholder} autoComplete="email" value={form.email} onChange={handleChange} />
              <RegisterField id="phoneNumber" label="Phone Number" icon={faPhone} type="tel" placeholder="+91 98765 43210" autoComplete="tel" value={form.phoneNumber} onChange={handleChange} />
              <RegisterField id="accountType" label="Account Type" icon={faUser}>
                <select id="accountType" name="accountType" value={form.accountType} onChange={handleChange} required>
                  <option>Personal</option><option>Business</option>
                </select>
              </RegisterField>
              <RegisterField id="address" label="Address" icon={faLocationDot} className="identity-register-field--full identity-register-field--address">
                <textarea id="address" name="address" placeholder="Enter your address" autoComplete="street-address" value={form.address} onChange={handleChange} required maxLength={500} />
              </RegisterField>
              <RegisterField id="password" label="Password" icon={faLock} type={visible.password ? 'text' : 'password'} placeholder="Create a password" autoComplete="new-password" value={form.password} onChange={handleChange} minLength={10} maxLength={128}>
                <input id="password" name="password" type={visible.password ? 'text' : 'password'} placeholder="Create a password" autoComplete="new-password" value={form.password} onChange={handleChange} minLength={10} maxLength={128} required />
                <button type="button" className="identity-password-toggle" onClick={() => setVisible((current) => ({ ...current, password: !current.password }))} aria-label={visible.password ? 'Hide password' : 'Show password'}><FontAwesomeIcon icon={visible.password ? faEyeSlash : faEye} /></button>
              </RegisterField>
              <RegisterField id="confirmPassword" label="Confirm Password" icon={faLock} type={visible.confirmPassword ? 'text' : 'password'} placeholder="Confirm your password" autoComplete="new-password" value={form.confirmPassword} onChange={handleChange}>
                <input id="confirmPassword" name="confirmPassword" type={visible.confirmPassword ? 'text' : 'password'} placeholder="Confirm your password" autoComplete="new-password" value={form.confirmPassword} onChange={handleChange} minLength={10} maxLength={128} required />
                <button type="button" className="identity-password-toggle" onClick={() => setVisible((current) => ({ ...current, confirmPassword: !current.confirmPassword }))} aria-label={visible.confirmPassword ? 'Hide password' : 'Show password'}><FontAwesomeIcon icon={visible.confirmPassword ? faEyeSlash : faEye} /></button>
              </RegisterField>
              {error && <p className="identity-notice identity-register-error" role="alert">{error}</p>}
              <button className="identity-submit identity-register-submit" type="submit" disabled={status === 'submitting'}>{status === 'submitting' ? 'Creating account…' : 'Create Account'} <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /></button>
            </form>
            <p className="identity-register-terms">By continuing, you agree to our <a href="https://hugecompany.in/Terms-of-Use">Terms of Service</a> and <a href="https://hugecompany.in/Privacy-Statement">Privacy Policy</a>.</p>
          </div>
        </section>
      </div>
    </main>
  )
}
