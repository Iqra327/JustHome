// AdditionalDetails.js
import React from 'react';

const AdditionalDetails = ({ register, errors }) => (
  <>
    <h1 className='text-center text-xl text-gray-400'>Add Features</h1>
    <label htmlFor="area" className="sm:text-xl text-sky-950">
      Area (e.g., 3.4 Marla)
    </label>
    <input
      id="area"
      type="text"
      className="border p-2 rounded outline-slate-400"
      {...register("area", { required: "Please add area size" })}
    />
    <p className="text-red-600">{errors.area?.message}</p>

    <div className="flex items-center gap-4">
      <label htmlFor="beds" className="sm:text-xl text-sky-950">
        Beds
      </label>
      <input
        id="beds"
        type="number"
        className="border p-1 rounded outline-slate-400 w-16"
        {...register("beds", { required: "Please add number of beds" })}
      />
       <p className="text-red-600">{errors.beds?.message}</p>
    </div>

    <div className="flex items-center gap-4">
      <label htmlFor="baths" className="sm:text-xl text-sky-950">
        Baths
      </label>
      <input
        id="baths"
        type="number"
        className="border p-1 rounded outline-slate-400 w-16"
        {...register("baths", { required: "Please add number of baths" })}
      />
       <p className="text-red-600">{errors.baths?.message}</p>
    </div>

    <div className="flex items-center gap-4">
      <label htmlFor="bedrooms" className="sm:text-xl text-sky-950">
        Bedrooms
      </label>
      <input
        id="bedrooms"
        type="number"
        className="border p-1 rounded outline-slate-400 w-16"
        {...register("bedrooms", { required: "Please add number of bedrooms" })}
      />
       <p className="text-red-600">{errors.bedrooms?.message}</p>
    </div>
  </>
);

export default AdditionalDetails;
