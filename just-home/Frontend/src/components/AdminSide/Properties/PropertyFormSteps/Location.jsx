const Location = ({ register, errors }) => (
  <>
    <h1 className='text-center text-xl text-gray-400'>Add Location Details</h1>
    <label htmlFor="address" className="sm:text-xl text-sky-950">
      Location Name
    </label>
    <input
      id="address"
      type="text"
      className="border p-2 rounded outline-slate-400"
      {...register("address", { required: "Please add location name" })}
    />
    <p className="text-red-600">{errors.locationName?.message}</p>

    <label htmlFor="locationURL" className="sm:text-xl text-sky-950">
      Location Link
    </label>
    <input
      id="locationURL"
      type="url"
      className="border p-2 rounded outline-slate-400"
      {...register("locationURL", { 
        required: "Please add location link",
        pattern: {
          value: /^https:\/\/www\.google\.com\/maps\/embed\?pb=.+$/,
          message: "Please provide a valid Google Maps embed link"
        } 
      })}
    />
    <p className="text-red-600">{errors.locationLink?.message}</p>
  </>
);

export default Location;
