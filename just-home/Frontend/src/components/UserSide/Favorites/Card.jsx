import { useState } from 'react'
import { IoMdHeart } from 'react-icons/io'
import { IoHeartOutline } from 'react-icons/io5'
import home1 from "../../../assets/imgs/home1.jpg"

const Card = () => {
  const [isFav, setIsFav] = useState(true);

  return (
    <>
      <div className=" w-full max-w-96 shadow-slate-200 shadow rounded">
        <div className='relative'>
          <img 
            src={home1} 
            alt="img" 
            className="w-full rounded-t max-w-[350] max-h-64 h-full"
          />
          <button 
            className='absolute top-3 right-4 text-2xl  cursor-pointer bg-white rounded-full p-1'
            onClick={() => setIsFav(!isFav)}
          >
            {
              isFav ? 
                <IoMdHeart className='text-red-500' /> : <IoHeartOutline className=''/>
            }
            
            {/*  */}
          </button>
        </div>
        <div className="border rounded-b py-3 px-4 flex flex-col gap-1">
          <h1 className="text-[22px] font-bold underline decoration-1 underline-offset-2">
            Modern Apartment
          </h1>
          <p className="text-19px">
            <span className="font-bold">Price: </span> 
            110 PKR
          </p>
          <p className="text-19px">
            <span className="font-bold">Location: </span>
            Lahore, Pakistan
          </p>
          <p className="text-19px">
            A modern apartment in the heart of New York, City.
          </p>
          {/* <div className="flex justify-end gap-3 mt-5">
            <NavLink to='/booking'>            
              <button 
                className="border border-sky-700 text-sky-900 py-2 px-4 text-[18px] hover:bg-sky-100" 
                onClick={() => setOpenModal(true)}
              >
                Book Now
              </button>
            </NavLink>
            <NavLink to='/propertyDetail'>
              <button 
                className="border py-2 px-4 bg-sky-900 text-slate-100 text-[18px]" 
              >
                View Details
              </button>
            </NavLink>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Card;