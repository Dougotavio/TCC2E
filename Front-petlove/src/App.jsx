import { useEffect, useState } from 'react'
import Login from './pages/login/login'
import Dashboard from './pages/login/administrativa/administrativa'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    if (typeof window === 'undefined') {
      return false
    }

    return window.localStorage.getItem('security-auth') === 'true'
  })

  useEffect(() => {
    window.localStorage.setItem('security-auth', String(isAuthenticated))
  }, [isAuthenticated])

  return isAuthenticated ? (
    <Dashboard onLogout={() => setIsAuthenticated(false)} />
  ) : (
    <Login onLoginSuccess={() => setIsAuthenticated(true)} />
  )
}

export default App
