import { Skeleton } from '@mui/material'

const statusStyles = {
  Completed: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
  'In review': 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-200',
  Pending: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-200',
}

const ActivityTable = ({ rows, loading }) => (
  <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft dark:border-slate-800 dark:bg-slate-900">
    <h3 className="mb-4 text-base font-semibold">Recent Activity</h3>
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="text-left text-slate-500">
            <th className="px-2 py-2">User</th>
            <th className="px-2 py-2">Action</th>
            <th className="px-2 py-2">Status</th>
            <th className="px-2 py-2">Time</th>
          </tr>
        </thead>
        <tbody>
          {loading
            ? [...Array(4)].map((_, index) => (
                <tr key={index}>
                  <td className="px-2 py-3"><Skeleton width={90} /></td>
                  <td className="px-2 py-3"><Skeleton width={160} /></td>
                  <td className="px-2 py-3"><Skeleton width={70} /></td>
                  <td className="px-2 py-3"><Skeleton width={50} /></td>
                </tr>
              ))
            : rows.map((row) => (
                <tr key={row.id} className="border-t border-slate-100 dark:border-slate-800">
                  <td className="px-2 py-3 font-medium">{row.user}</td>
                  <td className="px-2 py-3">{row.action}</td>
                  <td className="px-2 py-3">
                    <span className={`rounded-full px-3 py-1 text-xs ${statusStyles[row.status]}`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-2 py-3 text-slate-500">{row.time}</td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  </section>
)

export default ActivityTable
