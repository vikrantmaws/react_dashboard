import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useDarkMode } from '../hooks/useDarkMode'
import Header from './Header'
import Sidebar from './Sidebar'

const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const { isDark, setIsDark } = useDarkMode()

  const contentMargin = collapsed ? 'lg:ml-24' : 'lg:ml-72'

  return (
    <div className="min-h-screen p-4 sm:p-6">
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />
      <main className={`transition-all duration-300 ${contentMargin}`}>
        <Header
          isDark={isDark}
          onThemeToggle={() => setIsDark((prev) => !prev)}
          onMobileMenu={() => setMobileOpen(true)}
          loading={loading}
        />
        <div className="pt-6">
          <Outlet context={{ loading, setLoading }} />
        </div>
      </main>
    </div>
  )
}

export default AppLayout
