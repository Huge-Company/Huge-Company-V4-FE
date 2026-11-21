import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faEnvelope, faEye, faEyeSlash, faLock } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { loginAccount } from '../../auth'
import useRotatingEmailPlaceholder from '../../hooks/useRotatingEmailPlaceholder'
import Logo from '../Navigation/logo.avif'
import './Login.css'

export default function Login() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '', remember: false })
  const [showPassword, setShowPassword] = useState(false)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')
  const emailPlaceholder = useRotatingEmailPlaceholder()

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target
    setForm((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }))
    setError('')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('submitting')
    setError('')
    try {
      await loginAccount(form)
      navigate('/dashboard')
    } catch (submitError) {
      setError(submitError.message)
      setStatus('idle')
    }
  }

  return (
    <main className="identity-page">
      <span className="identity-orbit identity-orbit--top" aria-hidden="true" />
      <span className="identity-orbit identity-orbit--bottom" aria-hidden="true" />
      <div className="identity-layout">
        <section className="identity-brand" aria-label="Huge Identity">
          <div className="identity-brand__mark">
            <img src={Logo} alt="" />
            <span className="identity-brand__divider" />
            <span className="identity-brand__name"><strong>Huge</strong><span>Identity</span></span>
          </div>
          <h1>One Account<br />Across <span>Huge.</span></h1>
          <p>One secure identity for the Huge ecosystem.</p>
        </section>

        <section className="identity-main" aria-labelledby="identity-title">
          <p className="identity-signup-prompt">Don’t have an account? <Link to="/register">Sign up <FontAwesomeIcon icon={faArrowRight} /></Link></p>
          <div className="identity-card">
            <h2 id="identity-title">Welcome back.</h2>
            <p className="identity-card__intro">Sign in to your Huge Identity account.</p>
            <form className="identity-form" onSubmit={handleSubmit}>
              <label htmlFor="identity-email">Email address <span aria-hidden="true">*</span></label>
              <div className="identity-input-wrap">
                <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
                <input id="identity-email" name="email" type="email" placeholder={emailPlaceholder} autoComplete="username" value={form.email} onChange={handleChange} required />
              </div>
              <label htmlFor="identity-password">Password <span aria-hidden="true">*</span></label>
              <div className="identity-input-wrap">
                <FontAwesomeIcon icon={faLock} aria-hidden="true" />
                <input id="identity-password" name="password" type={showPassword ? 'text' : 'password'} placeholder="Enter your password" autoComplete="current-password" value={form.password} onChange={handleChange} required />
                <button className="identity-password-toggle" type="button" onClick={() => setShowPassword((visible) => !visible)} aria-label={showPassword ? 'Hide password' : 'Show password'}><FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} /></button>
              </div>
              <div className="identity-form__options">
                <label className="identity-remember"><input type="checkbox" name="remember" checked={form.remember} onChange={handleChange} /> <span>Remember me</span></label>
                <a href="mailto:namastehuge@gmail.com?subject=Huge%20Identity%20Password%20Reset">Forgot password?</a>
              </div>
              {error && <p className="identity-notice" role="alert">{error}</p>}
              <button className="identity-submit" type="submit" disabled={status === 'submitting'}>{status === 'submitting' ? 'Signing in…' : 'Sign in'} <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /></button>
              <div className="identity-card__create"><span>New here?</span><Link to="/register">Create an account</Link></div>
            </form>
          </div>
          <p className="identity-terms">By continuing, you agree to our <a href="https://hugecompany.in/Terms-of-Use">Terms of Service</a> and <a href="https://hugecompany.in/Privacy-Statement">Privacy Policy</a>.</p>
        </section>
      </div>
    </main>
  )
}
