import React from 'react';
import Button from '../../Common/Button.jsx';
import { LiaLongArrowAltRightSolid } from 'react-icons/lia';
import img1 from "../../../assets/imgs/img1.jpeg";
import { NavLink } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="mt-20 flex flex-col justify-center items-center relative">
      <div>
        <img src={img1} alt='' className=''/>
      </div>
      <div className='absolute flex flex-col justify-center items-center gap-4 max-sm:gap-2 text-center'>
        <h1 className=' text-6xl max-md:text-4xl max-lg:text-5xl max-sm:text-2xl'>
          Discover a place you'll love to live
        </h1>
        <p className=' text-[17px] max-sm:text-sm'>
          From modern apartments to cozy family homes, find spaces designed to match your lifestyle and create lasting memories
        </p>
        <div>
          <NavLink to='/properties'>
            <Button 
              text='View Properties' 
              icon={<LiaLongArrowAltRightSolid />} 
              className='bg-[#D97706] max-sm:py-1 max-sm:text-sm max-sm:gap-2 max-sm:px-2' 
            />
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Banner