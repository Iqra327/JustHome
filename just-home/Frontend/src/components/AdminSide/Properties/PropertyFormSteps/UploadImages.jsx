const UploadImages = ({ register, errors, setImages }) => {

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setImages(files);
  };

  return (
    <>
      <h1 className='text-center text-xl text-gray-400'>Upload Property Images</h1>
      <label htmlFor="images" className="sm:text-xl text-sky-950">
        Upload Images
      </label>
      <input
        id="images"
        type="file"
        multiple
        accept="image/*"
        {...register("images", { required: "Please upload at least 5 images" })}
        onChange={handleFileChange} 
      />
      <p className="text-red-600">{errors.images?.message}</p>
    </>
  );
};

export default UploadImages;
