import homeImg from '../../../assets/imgs/model-house.png';
import Button from '../../Common/Button';

const Hero = () => {
  return (
    <div className='shadow bg-sky-50'>
      <div className='container flex justify-center gap-x-8 py-12'>
        <div className='flex flex-col gap-5 w-full max-w-[650px] pt-12 max-md:pt-6 max-sm:items-center'>
          <h1 className='text-5xl max-md:text-4xl font-semibold text-sky-900'>
            About JustHome
          </h1>
          <p className='md:text-xl tracking-wide text-sky-900 max-sm:text-center'>
            A Good Place To Start Your Housing Journey. JustHome is dedicated to making your housing journey smooth and stress-free. With us, finding your perfect home is just a step away. 
          </p>
          <div className='mt-7 max-md:mt-3'>
            <Button 
              text='Start Your Journey With Us' 
              className='border-2 border-sky-700 bg-white text-sky-800 font-bold hover:text-white hover:bg-sky-700 transition-all duration-150 ease-in-out max-md:py-2 max-md:px-2'
            />
          </div>
        </div>
        <div className='w-full max-w-[650px] content-center max-sm:hidden'>
          <img src={homeImg} alt='img-home' className='object-contain flex-shrink-0'/>
        </div>
      </div>
    </div>
  )
}

export default Hero