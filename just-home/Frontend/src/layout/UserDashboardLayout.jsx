import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/UserSide/Sidebar'
import Navbar from '../components/UserSide/Navbar'

const UserDashboardLayout = () => {
  return (
    <div className='flex '>
      <Sidebar />
      <div className='flex-1 bg-gray-50'>
        <Navbar />
        <Outlet />
      </div>
    </div>
  )
}

export default UserDashboardLayout;