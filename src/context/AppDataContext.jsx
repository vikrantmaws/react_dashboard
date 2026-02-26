import { createContext, useContext, useMemo, useState } from 'react'
import {
  monthlySalesData as initialMonthlySalesData,
  recentActivities as initialActivities,
  revenueData as initialRevenueData,
  usersData as initialUsers,
} from '../data/dashboardData'

const AppDataContext = createContext(null)

const randomId = () => Math.floor(Math.random() * 100000)

export const AppDataProvider = ({ children }) => {
  const [users, setUsers] = useState(initialUsers)
  const [revenueData, setRevenueData] = useState(initialRevenueData)
  const [monthlySalesData, setMonthlySalesData] = useState(initialMonthlySalesData)
  const [recentActivities, setRecentActivities] = useState(initialActivities)

  const addUser = (user) => {
    const newUser = { ...user, id: randomId() }
    setUsers((prev) => [newUser, ...prev])
    setRecentActivities((prev) => [
      { id: randomId(), user: user.name, action: 'User account created', status: 'Completed', time: 'now' },
      ...prev,
    ])
  }

  const updateUser = (id, payload) => {
    const edited = users.find((user) => user.id === id)
    setUsers((prev) => prev.map((user) => (user.id === id ? { ...user, ...payload } : user)))
    if (edited) {
      setRecentActivities((prev) => [
        { id: randomId(), user: edited.name, action: 'Profile updated', status: 'In review', time: 'now' },
        ...prev,
      ])
    }
  }

  const deleteUser = (id) => {
    const toDelete = users.find((user) => user.id === id)
    setUsers((prev) => prev.filter((user) => user.id !== id))
    if (toDelete) {
      setRecentActivities((prev) => [
        { id: randomId(), user: toDelete.name, action: 'User removed', status: 'Completed', time: 'now' },
        ...prev,
      ])
    }
  }

  const addRevenueEntry = (month, revenue, sales) => {
    setRevenueData((prev) => [...prev, { month, revenue: Number(revenue) }])
    setMonthlySalesData((prev) => [...prev, { month, sales: Number(sales) }])
    setRecentActivities((prev) => [
      { id: randomId(), user: 'Finance Bot', action: `Added ${month} KPI data`, status: 'Completed', time: 'now' },
      ...prev,
    ])
  }

  const stats = useMemo(() => {
    const totalRevenue = revenueData.reduce((sum, item) => sum + item.revenue, 0)
    const totalOrders = monthlySalesData.reduce((sum, item) => sum + item.sales, 0)
    const growth = revenueData.length > 1
      ? (((revenueData.at(-1).revenue - revenueData[0].revenue) / revenueData[0].revenue) * 100).toFixed(1)
      : 0

    return [
      { title: 'Total Users', value: users.length.toLocaleString(), delta: '+Live' },
      { title: 'Revenue', value: `$${totalRevenue.toLocaleString()}`, delta: '+Live' },
      { title: 'Orders', value: totalOrders.toLocaleString(), delta: '+Live' },
      { title: 'Growth %', value: `${growth}%`, delta: '+Live' },
    ]
  }, [users, revenueData, monthlySalesData])

  const value = useMemo(
    () => ({
      users,
      addUser,
      updateUser,
      deleteUser,
      revenueData,
      monthlySalesData,
      recentActivities,
      addRevenueEntry,
      stats,
    }),
    [users, revenueData, monthlySalesData, recentActivities, stats],
  )

  return <AppDataContext.Provider value={value}>{children}</AppDataContext.Provider>
}

export const useAppData = () => useContext(AppDataContext)
