import React from 'react'

const Button = ({text}) => {
  return (
    <button className="bg-gradient-to-r from-custom-blue to-custom-cyan text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 mt-3">
      {text}
    </button>
  )
}

export default Button;