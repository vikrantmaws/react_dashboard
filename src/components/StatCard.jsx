import { Skeleton } from '@mui/material'

const StatCard = ({ title, value, delta, loading }) => (
  <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft dark:border-slate-800 dark:bg-slate-900">
    {loading ? (
      <>
        <Skeleton variant="text" width={90} />
        <Skeleton variant="text" width={130} height={42} />
        <Skeleton variant="text" width={80} />
      </>
    ) : (
      <>
        <p className="text-sm text-slate-500">{title}</p>
        <h3 className="mt-1 text-3xl font-semibold tracking-tight">{value}</h3>
        <p className="mt-2 text-sm text-emerald-600">{delta} this month</p>
      </>
    )}
  </article>
)

export default StatCard
