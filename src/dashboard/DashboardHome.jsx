import React from 'react'
import { Outlet } from 'react-router-dom'
import Dashboard from './Dashboard'

const DashboardHome = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Navbar />
      <div className="flex-1 overflow-hidden">
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardHome