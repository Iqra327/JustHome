import React, { useEffect, useState } from 'react'
import PropertyCard from './PropertyCard'
// import { properties } from "../../../constants";
import { useForm } from 'react-hook-form';
import Button from '../../Common/Button';
import Pagination from '../../Common/Pagination';
import { fetchProperties } from '../../../redux/slices/propertiesSlice';
import { useDispatch, useSelector } from 'react-redux';

const SearchProperties = () => {
  const dispatch = useDispatch();
  const {data: properties} = useSelector((state) => state.properties);

  useEffect(() => {
    dispatch(fetchProperties());
  },[])

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = properties.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const allPages = Math.ceil(properties.length / productsPerPage);
  console.log(allPages);

  const { register, handleSubmit} = useForm();
  
  const onSubmit = (data,e) =>{
    e.preventDefault();
    console.log(data);
  }

  return (
    <div className="mt-8">
    <div className="border-b px-9 pb-3 flex items-center">
      <h2 className="text-2xl text-sky-800 font-semibold ">
        Properties For Rent
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)} 
        className="mx-auto mb-3 w-full max-w-4xl flex gap-3"
      > 
        <input 
          id='location' 
          type='text' 
          placeholder='Search By Location'
          className="py-2 px-4 w-full max-w-lg shadow border text-xl border-gray-300 rounded-lg focus:outline-sky-800"
          {...register('location', {
            required: 'Please enter location'
          })}
        /> 
        <select 
          className="p-3 border border-gray-300 focus:outline-sky-800 rounded-md"
          {...register('priceRange', {
            required: 'Please Select Price Range'
          })}
        >
          <option value="">Select Price Range</option>
          <option value="20000">10000PKR-20000PKR</option>
          <option value="30000">20000PKR-30000PKR</option>
          <option value="40000">30000PKR-40000PKR</option>
          <option value="50000">40000PKR-50000PKR</option>
        </select>
        <Button 
          text="Search Now" 
          className="bg-orange-500 text-lg" 
        />
      </form>
    </div>

    {/* properties */}
    <div className="container mt-14">
      <div className="grid grid-cols-4 gap-x-6 gap-y-12">
        {currentProducts.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        allPages={allPages}
      />
    </div>
  </div>
  )
}

export default SearchProperties