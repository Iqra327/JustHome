const Location = ({ register, errors }) => (
  <>
    <h1 className='text-center text-xl text-gray-400'>Add Location Details</h1>
    <label htmlFor="locationName" className="sm:text-xl text-sky-950">
      Location Name
    </label>
    <input
      id="locationName"
      type="text"
      className="border p-2 rounded outline-slate-400"
      {...register("locationName", { required: "Please add location name" })}
    />
    <p className="text-red-600">{errors.locationName?.message}</p>

    <label htmlFor="locationLink" className="sm:text-xl text-sky-950">
      Location Link
    </label>
    <input
      id="locationLink"
      type="url"
      className="border p-2 rounded outline-slate-400"
      {...register("locationLink", { 
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
