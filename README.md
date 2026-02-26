# React Admin Dashboard

A modern, responsive admin dashboard built with React + Vite, Tailwind CSS, Material UI, Recharts, React Router, and Lucide icons.

## Tech Stack
- React 19 + Vite
- Tailwind CSS
- Material UI
- Recharts
- React Router
- Lucide React

## Demo credentials
- Email: `admin@apexpanel.com`
- Password: `password123`

## Features
- Auth flow with login/logout and protected routes.
- Responsive fixed/collapsible sidebar with drawer behavior on mobile.
- Header with dark/light mode toggle.
- Dashboard with live-updating cards, charts, and activity feed.
- Add KPI data (month, revenue, sales) from UI and instantly update charts.
- Users management:
  - add user
  - edit user status
  - delete user
  - search/filter/pagination
- Skeleton loading states.

## Folder Structure

```bash
src/
├── components/
├── context/
├── data/
├── hooks/
├── layout/
├── pages/
├── App.jsx
├── index.css
└── main.jsx
```

## Run locally

```bash
npm install
npm run dev
```

## Run with Docker Desktop

### Option 1: Docker Compose

```bash
docker compose up --build
```

Open: `http://localhost:5173`

Stop:

```bash
docker compose down
```

### Option 2: Docker CLI

```bash
docker build -t react-admin-dashboard .
docker run --rm -p 5173:5173 react-admin-dashboard
```

Open: `http://localhost:5173`
