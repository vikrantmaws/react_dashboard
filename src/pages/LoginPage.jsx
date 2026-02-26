import { Alert, Button, TextField } from '@mui/material'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const LoginPage = () => {
  const navigate = useNavigate()
  const { login, isAuthenticated } = useAuth()
  const [email, setEmail] = useState('admin@apexpanel.com')
  const [password, setPassword] = useState('password123')
  const [error, setError] = useState('')

  if (isAuthenticated) return <Navigate to="/dashboard" replace />

  const handleSubmit = (event) => {
    event.preventDefault()
    const result = login({ email, password })
    if (result.success) {
      navigate('/dashboard')
      return
    }
    setError(result.message)
  }

  return (
    <main className="grid min-h-screen place-content-center bg-slate-100 p-4 dark:bg-slate-950">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900"
      >
        <h1 className="text-2xl font-semibold">Login</h1>
        <p className="text-sm text-slate-500">Use demo credentials to access admin panel.</p>
        {error && <Alert severity="error">{error}</Alert>}
        <TextField label="Email" fullWidth value={email} onChange={(event) => setEmail(event.target.value)} />
        <TextField
          label="Password"
          fullWidth
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button variant="contained" type="submit" fullWidth>
          Sign In
        </Button>
      </form>
    </main>
  )
}

export default LoginPage
