import React from 'react'
import { stats } from '../../../constants'

const Stats = () => {
  return (
    <div className='container mt-20 max-sm:mt-14 grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-x-4 gap-y-3'>
    {
      stats.map((content, index) => (
        <div key={index} className='flex flex-col gap-3 max-xl:gap-2 max-sm:text-center'>
          <div className='flex flex-col gap-3'>
            <div className='m-auto text-5xl max-xl:text-4xl text-sky-900'>
              <content.icon/>
            </div>
            <h1 className='text-5xl max-xl:text-4xl text-center font-bold text-[#f7911c]'>
              {content.count}K+
            </h1>
            <p className='text-[20px] text-sky-950 text-center'>
              {content.heading}
            </p>
          </div>
          <p className='text-[17px] leading-relaxed mt-4'>
            {content.para}
          </p>
        </div>
      ))
    }
  </div>
  )
}

export default Stats