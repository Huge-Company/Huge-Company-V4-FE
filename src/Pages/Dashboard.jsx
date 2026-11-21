import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faEnvelope, faShieldHalved, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { getAuthUser, logoutAccount } from '../auth'
import SiteLayout from '../Components/Layout/SiteLayout'
import './Dashboard.css'

export default function Dashboard() {
  const navigate = useNavigate()
  const [user] = useState(() => getAuthUser())
  const [isSigningOut, setIsSigningOut] = useState(false)

  if (!user) return <Navigate to="/login" replace />

  const name = user.name || `${user.firstName || ''} ${user.lastName || ''}`.trim() || 'Huge member'

  const handleSignOut = async () => {
    setIsSigningOut(true)
    try {
      await logoutAccount()
    } finally {
      navigate('/home')
    }
  }

  return (
    <SiteLayout className="identity-dashboard-layout">
      <main className="identity-dashboard">
        <header className="identity-dashboard__intro">
          <span>Huge Identity / Profile</span>
          <h1>Welcome, <em>{name.split(' ')[0]}.</em></h1>
          <p>Your Huge Identity profile, all in one place.</p>
        </header>

        <section className="identity-dashboard__card" aria-labelledby="profile-heading">
          <div className="identity-dashboard__card-head">
            <div className="identity-dashboard__avatar" aria-hidden="true">{name.charAt(0).toUpperCase()}</div>
            <div><span>YOUR PROFILE</span><h2 id="profile-heading">{name}</h2></div>
            <button type="button" onClick={handleSignOut} disabled={isSigningOut}>
              <FontAwesomeIcon icon={faArrowRightFromBracket} /> {isSigningOut ? 'Signing out…' : 'Sign out'}
            </button>
          </div>
          <div className="identity-dashboard__details">
            <div><span><FontAwesomeIcon icon={faEnvelope} /> Email address</span><strong>{user.email}</strong></div>
            <div><span><FontAwesomeIcon icon={faUser} /> Account type</span><strong>{user.accountType || 'Personal'}</strong></div>
            <div><span><FontAwesomeIcon icon={faShieldHalved} /> Identity status</span><strong className="identity-dashboard__active">Active</strong></div>
          </div>
        </section>

        <section className="identity-dashboard__next">
          <span>Your Huge Workspace</span>
          <h2>Where would you like to go?</h2>
          <div><Link to="/product">Explore products <span aria-hidden="true">→</span></Link><Link to="/service">Explore services <span aria-hidden="true">→</span></Link></div>
        </section>
      </main>
    </SiteLayout>
  )
}
