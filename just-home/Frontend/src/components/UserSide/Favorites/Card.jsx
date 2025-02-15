import { useEffect, useState } from 'react'
import { IoMdHeart } from 'react-icons/io'
import { IoHeartOutline } from 'react-icons/io5'
import { getAllFavorites, removeFromFavorites } from '../../../../api/favoritesApi'
import { useSelector } from 'react-redux'

const Card = () => {
  const [isFav, setIsFav] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const {token} = useSelector((state) => state.auth)
 
  console.log(favorites);

  const removeFavorite = async (id) => {
    try {
      const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || {};
      
      if (isFav) {
        await removeFromFavorites(id, token);
        delete storedFavorites[id];
      } 
      localStorage.setItem('favorites', JSON.stringify(storedFavorites));
      setIsFav(!isFav);
    } catch (error) {
      console.error("Error updating favorites:", error);
    }
  };

  useEffect(() => {
    const fetchAllFavorites = async () => {
      const response = await getAllFavorites(token);
      setFavorites(response.data?.favorites || []);
      console.log(response.data?.favorites);
    }

    fetchAllFavorites();
  },[token, removeFavorite])
  
  return (
    <>
      {
        favorites.length > 0 ?
        favorites?.map((fav) => (
          <div key={fav._id} className=" w-full max-w-96 shadow-slate-200 shadow rounded">
            <div className='relative'>
              <img 
                src={fav.images[0]} 
                alt="img" 
                className="w-full rounded-t max-w-[350] max-h-64 h-full"
              />
              <button 
                className='absolute top-3 right-4 text-2xl  cursor-pointer bg-white rounded-full p-1'
                onClick={() => removeFavorite(fav._id)}
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
                {fav.name}
              </h1>
              <p className="text-19px">
                <span className="font-bold">Price: </span> 
                {fav.price} PKR
              </p>
              <p className="text-19px">
                <span className="font-bold">Location: </span>
                {fav.address}, Pakistan
              </p>
              <p className="text-19px">
                {fav.description}
              </p>
            </div>
          </div>
        )) 
        : 
        <h1 className='mx-auto text-2xl mt-60'>You don't have any favorite property.</h1>
      }
    </>
  )
}

export default Card;