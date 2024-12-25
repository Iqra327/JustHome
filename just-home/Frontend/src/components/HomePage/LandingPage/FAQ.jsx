import React, { useState } from 'react';
import { faqData } from '../../../constants';
import { Collapse } from 'react-collapse';
import { FaMinus, FaPlus } from 'react-icons/fa';

const FAQ = () => {

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className='mt-20 container text-center'>
      <h1 className='text-4xl'>
        Have More Question?
      </h1>
      <p className='mb-6 mt-2 text-[17px]'>
        Can’t find the answer you’re looking for? Contact us, and we’ll be happy to help!
      </p>
      <div className='flex flex-col gap-4'>
        {
          faqData.map((text, index) => (
            <div 
              key={index} 
              className={`flex flex-col w-full max-w-[800px] m-auto px-8 gap-3 py-5 ${openIndex === index ? 'bg-slate-100 transition ease-in-out duration-75' : ''}`}
            >
              <div className='flex items-center justify-between'>
                <h2 className='text-xl'>
                  {text.question}
                </h2>
                <button 
                  onClick={() => setOpenIndex(prev => prev === index ?  null : index)}
                >
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </button>
              </div>
              <Collapse isOpened={openIndex === index}>
                <p className='text-start tracking-wide leading-relaxed text-[17px] text-gray-800'>
                  {text.answer}
                </p>
              </Collapse>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default FAQ