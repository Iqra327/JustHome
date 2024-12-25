import React from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const PrevArrow = ({onClick}) => {
  return (
    <div 
      className={`absolute left-0 -bottom-12 transform -translate-y-1/2 cursor-pointer z-10`}
      onClick={onClick}
    >
      <FiChevronLeft className='border hover:bg-white hover:text-orange-400 rounded-full w-12 h-7 py-1 transition-all duration-100 ease-in-out'/>
    </div>
  )
}

const NextArrow = ({onClick}) => {
  return (
    <div 
      className="absolute left-16 -bottom-12 transform -translate-y-1/2 cursor-pointer z-10"
      onClick={onClick}
    >
      <FiChevronRight className='border hover:bg-white hover:text-orange-400 rounded-full w-12 h-7 py-1 transition-all duration-100 ease-in-out'/>
    </div>
  )
}

export {PrevArrow, NextArrow};