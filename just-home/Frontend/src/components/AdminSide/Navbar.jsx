import { useState } from 'react';
import profile from '../../assets/imgs/profile.webp';
import { RxCross2 } from 'react-icons/rx';
import { NavLink } from 'react-router-dom';
import { logoutUser } from '../../redux/slices/authSlice';
import { useDispatch } from 'react-redux';
import { IoMdLogOut } from "react-icons/io";

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutUser());
  }

  return (
    <div className='h-[85px] w-full bg-[#1C3F60] text-white px-7 py-2 flex items-center justify-between relative'>
      {/* profile icon with name */}
      <div className='flex items-center gap-4'>
        <div className='rounded-full'>
          <img 
            src={profile} 
            alt='profile' 
            className='rounded-full w-12 h-12 object-cover border'
          />
        </div>
        <h1 className='text-2xl tracking-wider'>
          Welcome Owner!
        </h1>
      </div>
    
      {/* icon to logout */}
      <button onClick={() => setIsClick(true)}>
        <IoMdLogOut size={30} className='-rotate-90'/>
      </button>
  
      {/*show on-logout icon click */}
      {
        isClick && 
        <div className='w-32 border shadow text-center flex gap-2 text-xl p-1 px-2 absolute right-7 top-6 rounded bg-white text-black justify-between'>
          <NavLink to='/' onClick={logout}>
            Logout
          </NavLink>
          <button 
            className='text-2xl text-black hover:text-red-600' 
            onClick={() => setIsClick(false)}
          >
            <RxCross2 />
          </button>
        </div>
      }
    </div>
  )
}

export default Navbar;