import { Button, TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import ActivityTable from '../components/ActivityTable'
import ChartCard from '../components/ChartCard'
import StatCard from '../components/StatCard'
import { useAppData } from '../context/AppDataContext'

const DashboardPage = () => {
  const { loading, setLoading } = useOutletContext()
  const { stats, revenueData, monthlySalesData, recentActivities, addRevenueEntry } = useAppData()
  const [kpiForm, setKpiForm] = useState({ month: '', revenue: '', sales: '' })

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => setLoading(false), 400)
    return () => clearTimeout(timer)
  }, [setLoading])

  const onAddKpi = (event) => {
    event.preventDefault()
    if (!kpiForm.month || !kpiForm.revenue || !kpiForm.sales) return
    addRevenueEntry(kpiForm.month, kpiForm.revenue, kpiForm.sales)
    setKpiForm({ month: '', revenue: '', sales: '' })
  }

  return (
    <div className="space-y-6">
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} loading={loading} />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <ChartCard title="Revenue Overview" loading={loading}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#94a3b8" opacity={0.2} />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Monthly Sales" loading={loading}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlySalesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#94a3b8" opacity={0.2} />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#2563eb" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </section>

      <form onSubmit={onAddKpi} className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-soft dark:border-slate-800 dark:bg-slate-900 sm:grid-cols-4">
        <TextField label="Month" size="small" value={kpiForm.month} onChange={(event) => setKpiForm((prev) => ({ ...prev, month: event.target.value }))} />
        <TextField label="Revenue" size="small" type="number" value={kpiForm.revenue} onChange={(event) => setKpiForm((prev) => ({ ...prev, revenue: event.target.value }))} />
        <TextField label="Sales" size="small" type="number" value={kpiForm.sales} onChange={(event) => setKpiForm((prev) => ({ ...prev, sales: event.target.value }))} />
        <Button type="submit" variant="contained">Add KPI Data</Button>
      </form>

      <ActivityTable rows={recentActivities} loading={loading} />
    </div>
  )
}

export default DashboardPage
