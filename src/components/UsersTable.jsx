import {
  Button,
  MenuItem,
  Pagination,
  Select,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from '@mui/material'
import { useMemo, useState } from 'react'
import { Pencil, Trash2 } from 'lucide-react'

const pageSize = 5

const emptyForm = { name: '', email: '', role: 'Support', status: 'Active' }

const UsersTable = ({ users, loading, onAddUser, onDeleteUser, onEditUser }) => {
  const [query, setQuery] = useState('')
  const [role, setRole] = useState('All')
  const [page, setPage] = useState(1)
  const [form, setForm] = useState(emptyForm)

  const filtered = useMemo(() => {
    return users.filter((user) => {
      const matchesQuery =
        user.name.toLowerCase().includes(query.toLowerCase()) ||
        user.email.toLowerCase().includes(query.toLowerCase())
      const matchesRole = role === 'All' || user.role === role
      return matchesQuery && matchesRole
    })
  }, [users, query, role])

  const pagedUsers = filtered.slice((page - 1) * pageSize, page * pageSize)

  const submitForm = (event) => {
    event.preventDefault()
    if (!form.name || !form.email) return
    onAddUser(form)
    setForm(emptyForm)
  }

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft dark:border-slate-800 dark:bg-slate-900">
      <form onSubmit={submitForm} className="mb-4 grid gap-3 md:grid-cols-5">
        <TextField size="small" label="Name" value={form.name} onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))} />
        <TextField size="small" label="Email" value={form.email} onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))} />
        <Select size="small" value={form.role} onChange={(event) => setForm((prev) => ({ ...prev, role: event.target.value }))}>
          <MenuItem value="Admin">Admin</MenuItem>
          <MenuItem value="Manager">Manager</MenuItem>
          <MenuItem value="Support">Support</MenuItem>
        </Select>
        <Select size="small" value={form.status} onChange={(event) => setForm((prev) => ({ ...prev, status: event.target.value }))}>
          <MenuItem value="Active">Active</MenuItem>
          <MenuItem value="Inactive">Inactive</MenuItem>
          <MenuItem value="Pending">Pending</MenuItem>
        </Select>
        <Button variant="contained" type="submit">Add User</Button>
      </form>

      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-lg font-semibold">Users</h3>
        <div className="flex flex-col gap-3 sm:flex-row">
          <TextField
            size="small"
            value={query}
            onChange={(event) => {
              setPage(1)
              setQuery(event.target.value)
            }}
            placeholder="Search users"
          />
          <Select
            size="small"
            value={role}
            onChange={(event) => {
              setPage(1)
              setRole(event.target.value)
            }}
          >
            <MenuItem value="All">All roles</MenuItem>
            <MenuItem value="Admin">Admin</MenuItem>
            <MenuItem value="Manager">Manager</MenuItem>
            <MenuItem value="Support">Support</MenuItem>
          </Select>
        </div>
      </div>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading
              ? [...Array(5)].map((_, index) => (
                  <TableRow key={index}>
                    <TableCell><Skeleton width={100} /></TableCell>
                    <TableCell><Skeleton width={180} /></TableCell>
                    <TableCell><Skeleton width={90} /></TableCell>
                    <TableCell><Skeleton width={80} /></TableCell>
                    <TableCell align="right"><Skeleton width={70} /></TableCell>
                  </TableRow>
                ))
              : pagedUsers.map((user) => (
                  <TableRow key={user.id} hover>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>{user.status}</TableCell>
                    <TableCell align="right">
                      <button
                        className="mr-2 rounded-md p-1 text-slate-500 hover:bg-slate-100 hover:text-brand-600"
                        onClick={() =>
                          onEditUser(user.id, { status: user.status === 'Active' ? 'Inactive' : 'Active' })
                        }
                      >
                        <Pencil className="h-4 w-4" />
                      </button>
                      <button
                        className="rounded-md p-1 text-slate-500 hover:bg-slate-100 hover:text-red-600"
                        onClick={() => onDeleteUser(user.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div className="mt-4 flex justify-end">
        <Pagination
          page={page}
          onChange={(_, value) => setPage(value)}
          count={Math.max(1, Math.ceil(filtered.length / pageSize))}
          color="primary"
        />
      </div>
    </section>
  )
}

export default UsersTable
