# React Admin Dashboard

A modern, responsive admin dashboard built with React + Vite, Tailwind CSS, Material UI, Recharts, React Router, and Lucide icons.

## Tech Stack
- React 19 + Vite
- Tailwind CSS
- Material UI (for input/table/skeleton components)
- Recharts
- React Router
- Lucide React

## Folder Structure

```bash
src/
├── components/
│   ├── ActivityTable.jsx
│   ├── ChartCard.jsx
│   ├── Logo.jsx
│   ├── StatCard.jsx
│   └── UsersTable.jsx
├── data/
│   └── dashboardData.js
├── hooks/
│   └── useDarkMode.js
├── layout/
│   ├── AppLayout.jsx
│   ├── Header.jsx
│   ├── navigation.js
│   └── Sidebar.jsx
├── pages/
│   ├── DashboardPage.jsx
│   ├── PlaceholderPage.jsx
│   └── UsersPage.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## Features
- Responsive fixed/collapsible sidebar with drawer behavior on mobile.
- Header/top navigation with dark/light mode toggle.
- Dashboard page:
  - 4 summary statistic cards
  - Revenue line chart
  - Monthly sales bar chart
  - Recent activity table
- Users page:
  - Search bar
  - Role filter dropdown
  - Data table with edit/delete actions
  - Pagination
- Skeleton loading states.
- Reusable component-driven architecture.
- Dummy JSON data in `src/data/dashboardData.js`.

## Run locally

```bash
npm install
npm run dev
```
