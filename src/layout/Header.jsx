import { IconButton, Skeleton, Tooltip } from '@mui/material'
import { Menu, Moon, Sun } from 'lucide-react'

const Header = ({ isDark, onThemeToggle, onMobileMenu, loading }) => (
  <header className="sticky top-0 z-20 flex items-center justify-between rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 shadow-soft backdrop-blur dark:border-slate-800 dark:bg-slate-900/90 sm:px-6">
    <div className="flex items-center gap-3">
      <button
        className="rounded-lg p-2 transition hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden"
        onClick={onMobileMenu}
      >
        <Menu className="h-5 w-5" />
      </button>
      {loading ? (
        <Skeleton variant="text" width={180} />
      ) : (
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500">Welcome back</p>
          <h2 className="text-lg font-semibold">Admin Dashboard</h2>
        </div>
      )}
    </div>

    <Tooltip title={`Switch to ${isDark ? 'light' : 'dark'} mode`}>
      <IconButton onClick={onThemeToggle}>
        {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </IconButton>
    </Tooltip>
  </header>
)

export default Header
