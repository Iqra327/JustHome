import { NavLink } from 'react-router-dom';
import logo from '../../assets/imgs/logo.png';
import { IoSettingsOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className='w-72 h-screen bg-slate-100 shadow-lg flex flex-col gap-7 px-5'>

      {/* profile section */}
      <div className='border-b flex gap-4 items-center py-5'>
        <NavLink to='/'>
          <img src={logo} alt='website-logo' />
        </NavLink>      
      </div>

      {/* Navlinks */}
      <div className='flex flex-col gap-3 text-lg'>
        <div>
          <NavLink to='/' className={({isActive}) => isActive ? 'font-bold' : ''}>
            Dashboard
          </NavLink>
        </div>
        {/* <div>
          <NavLink to='/' className={({isActive}) => isActive ? 'font-bold' : ''}>
            My Bookings
          </NavLink>
        </div> */}
        <div>
          <NavLink to='/adminDashboard/propertyListing' className={({isActive}) => isActive ? 'font-bold' : ''}>
            Property Listings
          </NavLink>
        </div>
        <div>
          <NavLink to='/adminDashboard/chat' className={({isActive}) => isActive ? 'font-bold' : ''}>
            Messages
          </NavLink>
        </div>
      </div>

      {/* setting */}
      <NavLink to='' className='flex items-center gap-3 text-xl mt-auto pb-5 w-28'>
        <IoSettingsOutline />        
        <p>Settings</p>
      </NavLink>
    </div>
  )
}

export default Sidebar;