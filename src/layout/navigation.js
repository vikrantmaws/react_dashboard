import {
  BarChart3,
  LayoutDashboard,
  MessageSquare,
  Settings,
  ShoppingBag,
  Users,
} from 'lucide-react'

export const navItems = [
  { label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { label: 'Users', path: '/users', icon: Users },
  { label: 'Orders', path: '/orders', icon: ShoppingBag },
  { label: 'Analytics', path: '/analytics', icon: BarChart3 },
  { label: 'Messages', path: '/messages', icon: MessageSquare },
  { label: 'Settings', path: '/settings', icon: Settings },
]
