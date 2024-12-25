import React from 'react';

const Button = ({text, className, icon, onClick}) => {
  return (
    <button 
      className={`flex items-center justify-center text-gray-100 gap-3 py-3 px-4 rounded-lg ${className}`}
      onClick={onClick}
    >
      {text}
      {icon}
    </button>
  )
}

export default Button;