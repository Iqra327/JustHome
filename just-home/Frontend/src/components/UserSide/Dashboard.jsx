import React from 'react'
import { NavLink } from 'react-router-dom';
import profile from '../../assets/imgs/profile.webp';

const Dashboard = () => {
  return (
    <div className='w-72 h-screen bg-slate-100 shadow-lg flex flex-col gap-7 px-5'>

      {/* profile section */}
      <div className='border-b flex gap-4 items-center py-5'>
        <div className='rounded-full'>
          <img 
            src={profile} 
            alt='profile' 
            className='rounded-full w-20 h-20 object-cover border'
          />
        </div>
        <div className='flex flex-col'>
          <h1 className='text-xl font-semibold'>
            Iqra Rasheed
          </h1>
          <NavLink className='text-blue-400'>
            Edit Profile
          </NavLink>
        </div>
      </div>

      {/* links */}
      <div className='flex flex-col gap-3 text-lg'>
        <div>
          <NavLink>
            Dashboard
          </NavLink>
        </div>
        <div>
          <NavLink>
            My Bookings
          </NavLink>
        </div>
        <div>
          <NavLink>
            Favorites
          </NavLink>
        </div>
        <div>
          <NavLink>
            Messages
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Dashboard