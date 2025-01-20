// UploadImages.js
import React from 'react';

const UploadImages = ({ register, errors }) => (
  <>
    <h1 className='text-center text-xl text-gray-400'>Upload Property Images</h1>
    <label htmlFor="img" className="sm:text-xl text-sky-950">
      Upload Images
    </label>
    <input
      id="img"
      type="file"
      multiple
      accept="image/*"
      {...register("img", {
        required: "Please upload at least 5 images",
        validate: (files) => files.length >= 5 || "Upload at least 5 images",
      })}
    />
    <p className="text-red-600">{errors.img?.message}</p>
  </>
);

export default UploadImages;