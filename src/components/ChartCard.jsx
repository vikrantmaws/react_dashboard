import { Skeleton } from '@mui/material'

const ChartCard = ({ title, loading, children }) => (
  <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft dark:border-slate-800 dark:bg-slate-900">
    <h3 className="text-base font-semibold">{title}</h3>
    <div className="mt-4 h-72">
      {loading ? <Skeleton variant="rounded" height="100%" /> : children}
    </div>
  </section>
)

export default ChartCard
