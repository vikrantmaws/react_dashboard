const Logo = ({ compact }) => (
  <div className="flex items-center gap-3">
    <div className="grid h-10 w-10 place-content-center rounded-xl bg-brand-500 text-lg font-bold text-white shadow-soft">
      A
    </div>
    {!compact && (
      <div>
        <p className="text-sm text-slate-500 dark:text-slate-400">Admin</p>
        <h1 className="text-lg font-semibold">Apex Panel</h1>
      </div>
    )}
  </div>
)

export default Logo
