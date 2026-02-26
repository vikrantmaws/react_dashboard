import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import Logo from '../components/Logo'
import { navItems } from './navigation'

const sidebarBase =
  'bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 h-full transition-all duration-300 flex flex-col shadow-soft'

const Sidebar = ({ collapsed, setCollapsed, mobileOpen, setMobileOpen }) => (
  <>
    {mobileOpen && (
      <button
        className="fixed inset-0 z-30 bg-slate-900/40 lg:hidden"
        aria-label="Close menu"
        onClick={() => setMobileOpen(false)}
      />
    )}
    <aside
      className={`${sidebarBase} fixed z-40 inset-y-0 left-0 ${
        collapsed ? 'w-24' : 'w-72'
      } ${mobileOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
    >
      <div className="flex items-center justify-between p-4">
        <Logo compact={collapsed} />
        <button
          className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 dark:hover:bg-slate-800"
          onClick={() => setMobileOpen(false)}
        >
          <X className="h-5 w-5 lg:hidden" />
        </button>
      </div>

      <nav className="space-y-1 px-3 py-4">
        {navItems.map(({ label, path, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            onClick={() => setMobileOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                isActive
                  ? 'bg-brand-50 text-brand-600 dark:bg-slate-800 dark:text-brand-500'
                  : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
              }`
            }
          >
            <Icon className="h-4 w-4" />
            {!collapsed && <span>{label}</span>}
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto p-4">
        <button
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 p-2 text-slate-600 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
          onClick={() => setCollapsed((prev) => !prev)}
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          {!collapsed && <span>Collapse</span>}
        </button>
      </div>
    </aside>
  </>
)

export default Sidebar
