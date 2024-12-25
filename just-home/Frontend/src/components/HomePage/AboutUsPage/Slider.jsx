import React from 'react'
import { aboutSlider } from '../../../constants';
import CustomSlider from '../../Common/Slider';

const Slider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  return (
    <div className='bg-[#f7911c] mt-20 px-5'>
      <div className='w-full max-w-[700px] mx-auto py-16 max-sm:py-9 px-5 flex flex-col justify-center gap-4'>
      <CustomSlider settings={settings}>
        {aboutSlider.map((slide, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-md rounded-md flex flex-col gap-4 items-center text-center w-full max-w-[700px] h-52"
          >
            <h1 className="text-3xl max-sm:text-2xl max-sm:font-semibold font-bold text-sky-900">
              {slide.title}
            </h1>
            <p className="text-lg text-gray-700 font-semibold ">
              {slide.text}
            </p>
            <p className="text-md text-gray-600 leading-relaxed mt-1">
              {slide.description}
            </p>
          </div>
        ))}
      </CustomSlider>
      </div>
    </div>
  )
}

export default Slider