import React, { useRef, useState } from 'react';
import { FaGreaterThan, FaLessThan } from 'react-icons/fa';

const Pagination = ({currentPage,setCurrentPage, allPages}) => {
  
  const prevPage = () => {
    if(currentPage > 1){
      setCurrentPage(currentPage - 1);
    }
  }

  const nextPage = () => {
    if(currentPage < allPages){
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <div className='flex items-center mt-6 justify-end gap-x-4 text-2xl text-sky-900'>
      
      <button 
        onClick={prevPage} 
        className={`p-2 rounded-full border active:bg-sky-800 active:text-white transition duration-100 ${currentPage === 1 ? 'bg-gray-200 text-gray-400' : ''}`}
      >
        <FaLessThan />
      </button>
      <p>Page {currentPage} of {allPages}</p> 
      <button 
        onClick={nextPage} 
        className={`p-2 rounded-full border active:bg-sky-800 active:text-white transition duration-100 ${currentPage === allPages ? 'bg-gray-200 text-gray-400' : ''}`}
      
      >
        <FaGreaterThan />
      </button>
      
    </div>
  )
}

export default Pagination