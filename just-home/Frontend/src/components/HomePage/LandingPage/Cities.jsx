import React from 'react'
import { cities } from '../../../constants';

const Cities = () => {
  return (
    <div className='mt-20 container'>
      <h1 className='text-[40px] max-sm:text-3xl font-medium text-center'>
        Find Properties in These Cities
      </h1>
      <p className='text-[18px] text-center'>
        Discover spaces that match your lifestyle
      </p>
      <div className='flex flex-wrap mt-8 items-center justify-center gap-x-6 gap-y-3 rounded py-9 mx-4'>
        {
          cities.map((item) => (
            <div className='relative' key={item.id}>
              <img 
                src={item.img} 
                alt="img" 
                className='object-cover w-full max-w-72 max-sm:max-w-96 h-80 rounded-2xl'
              />
              <div className='absolute top-6 left-6 text-white'>
                <h3 className='text-[19px] font-semibold'>
                  {item.city}
                </h3>
                <p>{item.property}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cities;