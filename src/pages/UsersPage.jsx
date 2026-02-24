import { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import UsersTable from '../components/UsersTable'
import { usersData } from '../data/dashboardData'

const UsersPage = () => {
  const { loading, setLoading } = useOutletContext()

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => setLoading(false), 700)
    return () => clearTimeout(timer)
  }, [setLoading])

  return <UsersTable users={usersData} loading={loading} />
}

export default UsersPage
