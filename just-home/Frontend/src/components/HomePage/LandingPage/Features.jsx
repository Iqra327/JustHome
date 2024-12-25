import React from 'react'
import { features } from '../../../constants'
import FeatureCard from './FeatureCard'

const Features = () => {

  return (
    <div className='mt-20 max-sm:mt-14 container'>
      <h1 className='text-[40px] max-sm:text-3xl font-medium text-center'>
        Why You Should Work With Us
      </h1>
      <p className='text-[18px] max-sm:text-[14px] text-center '>
        The difference lies in our steadfast dedication to your success
      </p>
      <div className='flex flex-nowrap max-md:flex-wrap gap-4 mt-10 justify-center '>
        {
          features.map((feature, index) => (
            <FeatureCard key={index} feature={feature}/>
          ))
        }
      </div>
    </div>
  )
}

export default Features