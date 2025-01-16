import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/AdminSide/Sidebar'
import Navbar from '../components/UserSide/Navbar'

const AdminDashboardLayout = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1'>
        <Navbar />
        <Outlet />
      </div>
    </div>
  )
}

export default AdminDashboardLayout;