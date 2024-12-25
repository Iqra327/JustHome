import React from 'react';
import { contactInfo } from '../../../constants';

const Info = () => {

  return (
     <div className='mt-16 flex flex-col gap-7'>
      {
        contactInfo.map((info, index) => (
          <div className={`flex items-center ${info.className}`} key={index}>
            <div className='text-2xl'>
              <info.icon/>
            </div>
            <p className='text-gray-800'>
              {info.text}
            </p>
          </div>
        ))
      }
    </div>
  )
}

export default Info