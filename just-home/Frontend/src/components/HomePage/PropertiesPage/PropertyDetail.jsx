import { FaArrowLeft } from 'react-icons/fa';
import { NavLink, useParams } from 'react-router-dom';
import property1 from "../../../assets/imgs/property1.jpg";
import CustomSlider from '../../Common/Slider';
import '../../../styles/slider.css';
import { LuBath, LuChartArea } from 'react-icons/lu';
import { LiaBedSolid } from 'react-icons/lia';
import { MdOutlineBedroomParent } from 'react-icons/md';
import { amenities, allImages } from '../../../constants';
import Calendar from 'react-calendar';
import '../../../styles/calendar.css';
// import 'react-calendar/dist/Calendar.css';
import Button from '../../Common/Button'
import Modal from '../../Common/Modal';
import { useEffect, useState } from 'react';
import BookingCard from './BookingCard';
import { getSingleProperty } from '../../../../api/propertyApi';

const PropertyDetail = () => {

  const [showModel, setShowModel] = useState(false);
  const [property, setProperty] = useState({});
  const [loading, setLoading] = useState(true);
  const {id} = useParams();
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    // prevArrow: <PrevArrow />,
    // nextArrow: <NextArrow />,
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

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await getSingleProperty(id);
        setProperty(response?.data?.property || {});
      } catch (error) {
        console.error("Error fetching property data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [id]);
  
  if (loading) {
    return <div className="text-center font-semibold text-gray-500 tracking-wide text-3xl mt-10 py-36">Loading...</div>;
  }
  
  if (!property) {
    return <div className="text-center font-semibold text-gray-500 tracking-wide text-3xl mt-10 py-36">Property not found</div>;
  }

  console.log(property);
  return (
    <div className='container mt-8'>
      
      {/* back to properties link */}
      <div className='text-2xl text-[#D97706] w-full max-w-9 h-9 border-2 border-orange-700 rounded-full py-1 ps-1 hover:border-sky-800 hover:text-sky-800'>
      <NavLink to='/properties'>
        <FaArrowLeft />
      </NavLink>
      </div>

      {/* main detail div */}
      <div className='mt-8'>
        <h1 className='text-3xl text-gray-800'>
          {property.name}
        </h1>

        {/* main img and map section div */}
        <div className='flex mt-5 gap-8'>   
          
          {/* left side */}
          <div className='bg-slate-50 py-4 rounded-lg w-full max-w-4xl flex flex-col gap-4 shadow-md'> 
            {/* main image */}
            <div className='px-4 h-full max-h-[420px]'>
              <img 
                src={property?.images?.[0]} 
                alt='property_img' 
                className=' object-cover w-full max-w-4xl rounded-lg h-full max-h-[420px]'
              />
            </div>
            {/* all images */}
            <div className='bg-[#f1eff8]'>
            <div className='flex flex-col w-full max-w-[840px] m-auto my-3'>
              <CustomSlider settings={settings}>
                {
                  property?.images?.slice(1).map((img, index) => (
                    <div key={index}>
                      <img src={img} alt='property-img' className='h-32 w-full max-w-72 object-cover'/>
                    </div>
                  ))
                }
              </CustomSlider>
            </div>
            </div>
          </div>

          {/* right side */}
          <div className='pt-7 rounded w-full max-w-xl shadow-lg bg-slate-100'>
            <h1 className='text-2xl font-semibold pb-1 px-4 text-sky-800'>
              Plan Your Stay
            </h1>
            <p className='pb-5 px-4 tracking-wide'>
              Explore the calendar to see available dates for your stay. Unavailable dates are highlighted for your convenience.
            </p>
            <Calendar />
          </div>
        </div>

        {/* propetrty details */}
        <div className='flex gap-8'>
          <div className='mt-2 py-6 w-full max-w-[840px]'>
            <h1 className='text-3xl font-semibold tracking-wide text-slate-700 mb-5 underline underline-offset-8 decoration-slate-500'>
              About this Property
            </h1>
            <h3 className='text-2xl'>
              PKR <span className='font-semibold'>{property.price}</span>
              /night
            </h3>
            <p className='text-lg text-slate-600'>
              {property.address}
            </p>
      
            <div className='flex items-center justify-between gap-4 mt-3 text-xl bg-slate-100 px-8 py-5 shadow-md'>
              <div className='flex items-center gap-2'>
                <LuChartArea className='font-bold'/>
                <p>{property.area} Marla</p>
              </div>
              <div className='flex items-center gap-2'>
                <LuBath />
                <p>{property.baths} Baths</p>
              </div>
              <div className='flex items-center gap-2'>
                <LiaBedSolid />
                <p>{property.beds} Beds</p>
              </div>
              <div className='flex items-center gap-2'>
                <MdOutlineBedroomParent />
                <p>{property.bedrooms} Bedrooms</p>
              </div>
            </div>

            <div className='mt-7 flex flex-col gap-3'>
              <h1 className='text-3xl text-sky-950'>
                Description
              </h1>
              <p className='text-lg'>
                {/* This beautifully designed 3.4 Marla property in Block H1, Johar Town, Lahore, offers 3 spacious bedrooms, 4 comfortable beds, and 2 modern bathrooms. With a contemporary kitchen and a cozy living area, it's ideal for families seeking a comfortable lifestyle. Located in a prime area, the property is within walking distance of renowned schools, shopping malls, and public transport. Amenities include a secure parking area, 24/7 water supply, and energy-efficient appliances. Whether you're looking for a short-term stay or a long-term residence, this property provides everything you need for a peaceful and convenient living experience. */}
                {property.description}
              </p>
            </div>

            {/* what this place offers */}
            <div className='mt-7'>
              <h1 className='text-3xl text-sky-950'>
                What this place offers
              </h1>
              <div className='grid grid-cols-2 mt-4 gap-4'>
                {
                  property?.amenities?.slice(0,4).map((amenity) => (
                    <div className='flex items-center gap-4 text-2xl' key={amenity._id}>
                      <img src={amenity.iconURL} alt='amenity-icon' className='w-10'/>
                      <p>{amenity.name}</p>
                    </div>
                  ))
                }
              </div>
              <Button 
                text='Show all amenities' 
                className='border mt-7 text-lg text-sky-9 border-sky-800 text-sky-900'
                onClick={() =>setShowModel(true)}
              />
            </div>

            {/* map */}
            <div className='mt-7'>
              <h1 className='text-3xl pb-1 text-sky-950'>
                Where you'll be
              </h1>
              <p className='pb-8 tracking-wide'>
                Explore the neighborhood and nearby amenities.
              </p>
              <iframe 
                src={property.locationURL}
                width="840" 
                height="490" 
                loading="lazy" 
                className='rounded'
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
          <BookingCard className='mt-8 max-h-[480px]' property={property}/>
        </div>

         {/* modal */}
         {
          showModel && 
          <Modal onClose={() => setShowModel(false)} className='mt-56'>
            <div className='mx-5 pb-3 flex flex-col gap-3'>
              <h2 className='text-2xl'>
                What this place offers
              </h2>
              <div className='grid grid-cols-2 mt-4 gap-4'>
                {
                  property?.amenities?.length > 4 ? 
                  property?.amenities?.slice(4).map((amenity) => (
                    <div className='flex items-center gap-4 text-2xl' key={amenity._id}>
                      <img src={amenity.iconURL} alt='amenity-icon' className='w-10'/>
                      <p>{amenity.name}</p>
                    </div>
                  )) : 
                    <h1 className='text-xl text-gray-500'>No more amenities available</h1> 
                }
              </div>
            </div>
          </Modal>
          }
      </div>
    </div>
  )
}

export default PropertyDetail