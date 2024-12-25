import React from 'react'

const Hero = () => {
  return (
    <div className="h-[600px] w-full border bg-no-repeat bg-cover bg-[url('/src/assets/imgs/ContactUs2.jpg')]">
      <div className='flex flex-col items-center mt-48'>
        <h1 className="text-4xl font-semibold text-sky-900 ">
          Contact Us
        </h1>
        <p className='text-xl text-gray-600 mt-3'>
          "We’d love to hear from you! Reach out to us with any questions, feedback, or concerns.
        </p>
      </div>
      </div>  
  )
}

export default Hero