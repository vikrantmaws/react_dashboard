import { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import UsersTable from '../components/UsersTable'
import { useAppData } from '../context/AppDataContext'

const UsersPage = () => {
  const { loading, setLoading } = useOutletContext()
  const { users, addUser, deleteUser, updateUser } = useAppData()

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => setLoading(false), 300)
    return () => clearTimeout(timer)
  }, [setLoading])

  return (
    <UsersTable
      users={users}
      loading={loading}
      onAddUser={addUser}
      onDeleteUser={deleteUser}
      onEditUser={updateUser}
    />
  )
}

export default UsersPage
