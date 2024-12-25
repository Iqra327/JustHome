import React from 'react'
import realEstate from '../../../assets/imgs/realEstate.jpg';

const OurStory = () => {
  return (
    <div className='mt-20 max-md:mt-14 max-sm:mt-7 container flex gap-x-16 max-lg:gap-x-10 max-md:flex-col-reverse gap-y-7'>
      <div className=''>
        <img 
          src={realEstate} 
          alt='img'
          className='rounded-md object-cover w-full max-w-[620px] max-[1224px]:min-h-[450px] max-md:min-h-0 border' 
        />
      </div>
      <div className='w-full max-w-[600px] flex flex-col gap-2 pt-5 max-md:text-center'>
        <h1 className='text-5xl max-sm:text-3xl max-lg:text-4xl font-semibold text-sky-900'>
          Our Story
        </h1>
        <h3 className='text-lg text-gray-600 font-semibold'>
          Built on Passion and Purpose
        </h3>
        <p className='text-lg tracking-wide leading-relaxed mt-6 max-md:mt-3 max-lg:mt-4'>
          JustHome was born from a vision to make housing simpler, accessible, and more enjoyable for everyone. With a passion for helping people find their perfect place, we've been building trust and delivering results since day one.
        </p>
        <p className='text-lg tracking-wide leading-relaxed'>At JustHome, we believe a home is more than a place—it’s a feeling, a foundation, and a future. Our story isn’t just about properties; it’s about the lives we touch and the memories we help create every day.</p>
      </div>
    </div>
  )
}

export default OurStory