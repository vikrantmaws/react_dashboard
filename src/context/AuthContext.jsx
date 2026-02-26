import { createContext, useContext, useMemo, useState } from 'react'

const AuthContext = createContext(null)

const defaultUser = {
  name: 'Admin User',
  email: 'admin@apexpanel.com',
  role: 'Admin',
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('auth-user')
    return stored ? JSON.parse(stored) : null
  })

  const login = ({ email, password }) => {
    const isValid = email === 'admin@apexpanel.com' && password === 'password123'
    if (!isValid) return { success: false, message: 'Invalid credentials' }

    localStorage.setItem('auth-user', JSON.stringify(defaultUser))
    setUser(defaultUser)
    return { success: true }
  }

  const logout = () => {
    localStorage.removeItem('auth-user')
    setUser(null)
  }

  const value = useMemo(() => ({ user, login, logout, isAuthenticated: Boolean(user) }), [user])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
