import { useEffect, useState } from 'react';
import { IoMdHeart } from 'react-icons/io';
import { IoHeartOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import Modal from '../../Common/Modal';
import BookingCard from './BookingCard';
import { useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../../../api/favoritesApi';

const PropertyCard = ({property}) => {
  const [isFav, setIsFav] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const {token, user} = useSelector((state) => state.auth);
  console.log(user);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || {};
    if (storedFavorites[property._id]) {
      setIsFav(true);
    }
  }, [property._id]);

  const handleFavorite = async () => {
    try {
      const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || {};
      
      if (isFav) {
        await removeFromFavorites(property._id, token);
        delete storedFavorites[property._id];
      } else {
        await addToFavorites(property._id, token);
        storedFavorites[property._id] = true;
      }

      localStorage.setItem('favorites', JSON.stringify(storedFavorites));
      setIsFav(!isFav);
    } catch (error) {
      console.error("Error updating favorites:", error);
    }
  };

  return (
    <>
      <div className=" w-full max-w-96 shadow-slate-200 shadow rounded border-t">
        <div className='relative'>
          <img 
            src={property.images[0]} 
            alt="img" 
            className="w-full rounded-t max-w-[350] max-h-64 h-full"
          />
          {
            user?.role !== 'admin' &&  
            <button 
              className='absolute top-3 right-4 text-2xl  cursor-pointer bg-white rounded-full p-1'
              onClick={() => handleFavorite(property._id)}
            >
              {
                isFav && token ? 
                  <IoMdHeart className='text-red-500' /> : <IoHeartOutline className=''/>
              }
              
              {/*  */}
            </button>
          }
        </div>
        <div className="border rounded-b py-3 px-4 flex flex-col gap-1">
          <h1 className="text-[22px] font-bold underline decoration-1 underline-offset-2">
            {property.name}
          </h1>
          <p className="text-19px">
            <span className="font-bold">Price: </span> 
            {property.price}PKR
          </p>
          <p className="text-19px">
            <span className="font-bold">Location: </span>
            {property.address}, Pakistan
          </p>
          <p className="text-19px">
            {property.description}
          </p>
          <div className="flex justify-end gap-3 mt-5">
            <NavLink>            
              <button 
                className="border border-sky-700 text-sky-900 py-2 px-4 text-[18px] hover:bg-sky-100" 
                onClick={() => setShowModel(true)}
              >
                Book Now
              </button>
            </NavLink>
            <NavLink to={`/propertyDetail/${property._id}`}>
              <button 
                className="border py-2 px-4 bg-sky-900 text-slate-100 text-[18px]" 
              >
                View Details
              </button>
            </NavLink>
          </div>
        </div>
      </div>

      {
        showModel && 
        <Modal onClose={() => setShowModel(false)} className='mt-40'>
          <div className='mx-6 pb-6 flex flex-col gap-3'>
            <h1 className='text-lg text-gray-800 text-center'>
              Choose Your Dates and Finalize Your Booking
            </h1>
            <BookingCard />
          </div>
        </Modal>
        }
    </>
  )
}

export default PropertyCard;