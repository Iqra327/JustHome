import React from 'react'

const FeatureCard = ({feature}) => {
  return (
    <div className='flex flex-col items-center justify-center gap-4 p-4 py-7 rounded-lg text-center shadow-lg border-t bg-slate-100'>
      <figure>
        <img src={feature.img} alt="icon" className=''/>
      </figure>
      <p className='text-xl font-medium'>
        {feature.text}
      </p>
      <p className='text-center text-[17px]'>
        {feature.description}
      </p>
    </div>
  )
}

export default FeatureCard