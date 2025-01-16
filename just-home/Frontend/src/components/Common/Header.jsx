import React, { useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import { GiHamburgerMenu } from 'react-icons/gi'
import logo from "../../assets/imgs/logo.png"
import { NavLink } from 'react-router-dom'
import { RxCross2 } from 'react-icons/rx'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../redux/slices/authSlice'

const Header = () => {

  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const logout = () => {
    setIsOpen(false);
    dispatch(logoutUser());
  }
  
  return (
    <>    
      <div className='py-4 px-3 z-10 w-full border-b bg-[#74b4d9]'>
        <div className='flex justify-between items-center mx-7'>
          <div>
            <img src={logo} alt="logo" className='text-white'/>
          </div>
          <ul className='flex gap-7 items-center text-19px max-sm:hidden font-medium text-white'>
            <NavLink 
              to='/' 
              className={({isActive}) => isActive ? 'underline underline-offset-4 decoration-white decoration-2 font-bold' : ''}
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to='/properties' 
              className={({isActive}) => isActive ? 'underline underline-offset-4 decoration-white decoration-2 font-bold' : ''}>
              <li>Properties</li>
            </NavLink>
            <NavLink 
              to='/about' 
              className={({isActive}) => isActive ? 'underline underline-offset-4 decoration-white decoration-2 font-bold' : ''}
            >
              <li>About Us</li>
            </NavLink>
            <NavLink
              to='/contact' 
              className={({isActive}) => isActive ? 'underline underline-offset-4 decoration-white decoration-2 font-bold' : ''}>
              <li>Contact Us</li>
            </NavLink>
            {/* <NavLink 
              to='/login' 
              className={({isActive}) => isActive ? 'underline underline-offset-4 decoration-white decoration-2 font-bold' : ''}
            >
              <li>Login</li>
            </NavLink> */}
          </ul>
          <div className='flex items-center cursor-pointer text-white text-19px'>
            {
              !token ? 
              <NavLink 
                to='/login' 
                className={({isActive}) => isActive ? 'underline underline-offset-4 decoration-white decoration-2 font-bold' : ''}
              >
                <p>Login</p>
              </NavLink> :    
              <>
                <button onClick={() => setIsOpen(true)}>
                  <CgProfile className='text-3xl max-sm:hidden'/>
                </button>
                <GiHamburgerMenu 
                  className='hidden max-sm:block' 
                  onClick={() => setOpen(!open)}
                />
              </>          
            }
          </div>
        </div>
      </div>

      {/* on profile icon click */}
      {
        isOpen && 
        <div className='w-36 h-36 border shadow text-center flex flex-col gap-2 text-xl pt-2 absolute right-10 top-6 bg-sky-50 rounded'>
          <button 
            className='text-2xl border border-gray-600 rounded-full flex ms-auto me-2 text-white bg-red-400 hover:bg-red-500' 
            onClick={() => setIsOpen(false)}
          >
            <RxCross2 />
          </button>
          <ul className='flex flex-col gap-2 pb-4  underline-offset-2 decoration-gray-400'>
            <NavLink to='/userDashboard'>
              <li className='hover:underline'>
                Dashboard
              </li>
            </NavLink>
            <hr className='underline'/>
            {/* <NavLink>
              <li className='hover:underline'>
                Settings
              </li>
            </NavLink>
            <hr className='underline'/> */}
            <NavLink to='/' onClick={logout}>
              <li className='hover:underline'>
                Logout
              </li>
            </NavLink>
          </ul>
        </div>
      }
      
      {/* hamburger-navlinks */}
      {
        open &&       
        <div className='top-0 h-80 w-full backdrop-blur-sm px-3 py-2 border-b fixed z-20'>
          <button 
            className='text-2xl flex ms-auto' 
            onClick={() => setOpen(false)}
          >
            <RxCross2 />
          </button>
          <ul className='flex flex-col gap-7 items-center text-[16px] font-bold pt-4 text-sky-950'>
          <NavLink 
            to='/' 
            className={({isActive}) => isActive ? 'underline decoration-sky-950 font-bold' : ''}
          >
            <li>Home</li>
          </NavLink>
          <NavLink 
            to='/about' 
            className={({isActive}) => isActive ? 'underline decoration-sky-950 font-bold' : ''}
          >
            <li>About</li>
          </NavLink>
          <NavLink
            to='/products' 
            className={({isActive}) => isActive ? 'underline decoration-sky-950 font-bold' : ''}>
            <li>Products</li>
          </NavLink>
          {/* <NavLink 
            to='/dashboard' 
            className={({isActive}) => isActive ? 'underline decoration-sky-950 font-bold' : ''}
          >
            <li>Dashboard</li>
          </NavLink> */}
          <NavLink
            to='/contact' 
            className={({isActive}) => isActive ? 'underline decoration-sky-950 font-bold' : ''}>
            <li>Contact Us</li>
          </NavLink>
        </ul>
      </div>
      }
    </>
  )
}

export default Header