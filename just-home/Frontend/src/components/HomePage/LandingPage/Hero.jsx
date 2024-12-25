import Button from '../../Common/Button';

const Hero = () => {
  return (
    <div className="h-[802px] max-sm:h-[600px] w-full bg-[url('/src/assets/imgs/hero3.jpeg')] bg-cover bg-no-repeat bg-center ">
      <div className='flex flex-col gap-5 items-center justify-center pt-32 px-9'>
        <div className='border text-white py-3 px-6 rounded-full text-center'>
          <p className='uppercase font-medium'>
            Let us guide your home
          </p>
        </div>
        <h1 className='text-white font-medium text-6xl text-center max-lg:text-5xl max-md:text-4xl max-sm:text-3xl'>
          Find your perfect place, backed by trust
        </h1>
      </div>
      <div className='container mt-12 py-7'>
        <div className='flex gap-x-7 py-7 px-10 bg-slate-300 w-full max-w-5xl mx-auto justify-center text-lg rounded-md shadow-md'>
          <input 
            type='text' 
            className='border rounded-md border-gray-300 text-center px-4 focus:outline-none focus:border-gray-500' 
            placeholder='Location'
          />
          <input 
            type='number' 
            className='border rounded-md border-gray-300 text-center px-4 focus:outline-none focus:border-gray-500' 
            placeholder='Min Price'
          />
          <input 
            type='number' 
            className='border rounded-md border-gray-300 text-center px-4 focus:outline-none focus:border-gray-500' 
            placeholder='Max Price'
          />
          <Button 
            text='Search' 
            className='border bg-sky-700 text-white'
          />
        </div>
      </div>
    </div>
  )
}

export default Hero