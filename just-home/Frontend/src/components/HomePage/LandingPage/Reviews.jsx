import { IoStarSharp } from 'react-icons/io5';
import CustomSlider from '../../Common/Slider';
import { NextArrow, PrevArrow } from '../../Common/CustomArrows';
import { testimonials } from '../../../constants';

const Reviews = () => {

  const settings = {
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
    <div className='bg-[#f7911c] flex text-white mt-20 py-9'>
      <div className='container grid grid-cols-2 max-sm:grid-cols-1 max-sm:gap-y-3'>
        <div className='flex flex-col gap-4 w-full max-w-md px-3'>
          <h1 className='text-[40px] max-lg:text-3xl max-md:text-2xl'>
            What our customers are saying us?
          </h1>
          <p className='max-md:text-[14px] text-[17px]'>
            Hear from our happy customers about their experiences and how we helped them find their perfect home
          </p>
          <div className='flex gap-12 max-md:gap-8 max-md:text-[14px]'>
            <div className=''>
              <p className='text-2xl max-md:text-[17px] font-bold'>1k+</p>
              <p>Happy People</p>
            </div>
            <div>
              <p className='text-2xl font-bold max-md:text-[17px]'>4.88</p>
              <p>Overall rating</p>
              <div className='flex'>
                <IoStarSharp className='text-yellow-400'/>
                <IoStarSharp className='text-yellow-400'/>
                <IoStarSharp className='text-yellow-400'/>
                <IoStarSharp className='text-yellow-400'/>
                <IoStarSharp className='text-yellow-400'/>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full max-w-md flex flex-col relative'>
          <CustomSlider settings={settings}>
            {
              testimonials.map((info, index) => (
                <div key={index}>            
                  <div className='flex items-center gap-6'>
                    <img 
                      src={info.img} 
                      alt='profile-picture' 
                      className='w-28 h-28 max-md:h-20 max-md:w-20 rounded-full object-cover' 
                    />
                    <div>
                      <h3 className='text-xl font-medium'>
                        {info.name}
                      </h3>
                      <p>
                        {info.role}
                      </p>
                    </div>
                  </div>
                  <p className='text-[19px] my-2 max-md:text-[16px]'>
                    {info.description}
                  </p>
                </div>
              ))
            }
          </CustomSlider>
        </div>
      </div>
    </div>
  )
}

export default Reviews