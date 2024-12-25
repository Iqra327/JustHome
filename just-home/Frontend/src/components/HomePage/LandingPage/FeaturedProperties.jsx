import React from 'react'
import { FaBed, FaDollarSign } from 'react-icons/fa'
import { IoLocationOutline } from 'react-icons/io5'
import { LuBath } from 'react-icons/lu'
import { featuredProperties } from '../../../constants'

const FeaturedProperties = () => {
  return (
    <div className='mt-20 container'>
      <h1 className='text-[40px] max-md:text-3xl max-sm:text-2xl font-medium text-center'>
        Featured Properties
      </h1>
      <p className='text-[18px] max-sm:text-[14px] text-center'>
        Where Comfort Meets Style – Our Featured Picks
      </p>
      <div>

      </div>
      <div className='grid grid-cols-3 gap-y-6 gap-x-4 max-lg:grid-cols-2 max-sm:grid-cols-1 place-content-center justify-items-center mt-4'>
        {
          featuredProperties.map((item) => (
            <div key={item.id} className='relative flex justify-center w-full max-w-md'>
              <img 
                src={item.img} 
                alt="img" 
                className=' object-cover rounded-2xl'
              />
              <div className='text-white absolute top-6 left-8 flex gap-1 w-full max-w-60'>
                <div className='w-full max-w-24 text-center rounded-[33px] bg-sky-950'>
                  <p className='uppercase py-2  text-xs'>
                    For Rent
                  </p>
                </div>
                <div className='w-full max-w-24'>
                  <p className='uppercase bg-[#D97706] py-2 rounded-[33px] text-xs text-center'>
                    Featured
                  </p>
                </div>
              </div>
              <div className='absolute bottom-2 text-white left-8'>
                <h4 className='uppercase'>
                  {item.name}
                </h4>
                <div className='flex items-center'>
                  <IoLocationOutline />
                  <p>{item.location}</p>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='flex items-center gap-2 border-r pr-2'>
                    <FaBed />
                    <p>{item.bed}</p>
                  </div>
                  <div className='flex items-center gap-2 border-r pr-2'>
                    <LuBath />
                    <p>{item.bath}</p>
                  </div>
                </div>
              </div>
              <div className='flex items-center absolute bottom-2 right-8 text-white font-semibold text-xl'>
                <FaDollarSign />
                <p>{item.price}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default FeaturedProperties