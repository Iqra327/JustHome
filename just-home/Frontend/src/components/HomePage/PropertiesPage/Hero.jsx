import React from 'react'

const Hero = () => {
  return (
    <div className="h-[550px] w-full border bg-no-repeat bg-cover bg-[url('/src/assets/imgs/propertyHero1.jpg')]">
    <div className="flex flex-col items-center mt-48">
      <h1 className="text-4xl font-semibold text-sky-900 ">
        Unlock Endless Possibilities
      </h1>
      <p className="text-xl text-gray-600 mt-3">
        Browse through our handpicked properties to find the one that’s just
        right for you.
      </p>
    </div>
  </div>
  )
}

export default Hero