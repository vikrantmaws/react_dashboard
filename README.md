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


## Run with Docker Desktop

### Option 1: Docker Compose (recommended for development)

```bash
docker compose up --build
```

Then open: `http://localhost:5173`

To stop:

```bash
docker compose down
```

### Option 2: Docker CLI

Build image:

```bash
docker build -t react-admin-dashboard .
```

Run container:

```bash
docker run --rm -p 5173:5173 react-admin-dashboard
```

Then open: `http://localhost:5173`

### Notes for Docker Desktop users
- Make sure Docker Desktop is running before executing commands.
- On first run, image build can take a few minutes while dependencies are installed.
- This setup runs Vite in dev mode with `--host 0.0.0.0` so your browser can access it from your machine.
