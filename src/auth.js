const AUTH_SESSION_KEY = 'huge_company_user'
const API_BASE = `${import.meta.env.VITE_API_URL || 'http://localhost:3000'}/api`

async function request(path, options = {}) {
  let response
  try {
    response = await fetch(`${API_BASE}${path}`, {
      ...options,
      credentials: 'include',
      headers: { 'Content-Type': 'application/json', ...options.headers },
    })
  } catch {
    throw new Error('The account service is unavailable. Please try again shortly.')
  }

  const data = response.status === 204 ? null : await response.json().catch(() => ({}))
  if (!response.ok) throw new Error(data?.error || 'Something went wrong. Please try again.')
  return data
}

export function getAuthUser() {
  try {
    const user = localStorage.getItem(AUTH_SESSION_KEY);
    return user ? JSON.parse(user) : null;
  } catch {
    return null;
  }
}

export function setAuthUser(user) {
  localStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(user));
  window.dispatchEvent(new Event('huge-auth-change'));
}

export async function loginAccount(credentials) {
  const { account } = await request('/auth/login', { method: 'POST', body: JSON.stringify(credentials) })
  setAuthUser(account)
  return account
}

export async function registerAccount(details) {
  const { account } = await request('/auth/register', { method: 'POST', body: JSON.stringify(details) })
  setAuthUser(account)
  return account
}

export async function refreshAuthUser() {
  try {
    const { account } = await request('/auth/me')
    setAuthUser(account)
    return account
  } catch {
    clearAuthUser()
    return null
  }
}

export function clearAuthUser() {
  localStorage.removeItem(AUTH_SESSION_KEY);
  window.dispatchEvent(new Event('huge-auth-change'));
}

export async function logoutAccount() {
  try {
    await request('/auth/logout', { method: 'POST', body: '{}' })
  } finally {
    clearAuthUser()
  }
}
