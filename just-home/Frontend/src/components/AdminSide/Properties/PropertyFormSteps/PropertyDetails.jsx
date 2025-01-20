const PropertyDetails = ({ register, errors }) => (
  <>
    <h1 className='text-center text-xl text-gray-400'>Add Property Details</h1>
    <label htmlFor="propName" className="sm:text-xl text-sky-950">
      Property Name
    </label>
    <input
      id="propName"
      type="text"
      className="border p-2 rounded outline-slate-400"
      {...register("propName", { 
        required: "Please add property name",
      })}
    />
    <p className="text-red-600">{errors.propName?.message}</p>

    <label htmlFor="description" className="sm:text-xl text-sky-950">
      Description
    </label>
    <textarea
      id="description"
      className="border resize-none p-2 rounded outline-slate-400"
      {...register("description", { 
        required: "Please add description",
        validate: (value) => {
          const wordCount = value.trim().split(/\s+/).length;
          return wordCount >= 20 || "Description must be at least 20 words long!";
        }
      })}
    />
    <p className="text-red-600">{errors.description?.message}</p>

    <label htmlFor="price" className="sm:text-xl text-sky-950">
      Price
    </label>
    <input
      id="price"
      type="number"
      className="border p-2 rounded outline-slate-400"
      {...register("price", { required: "Please add price" })}
    />
    <p className="text-red-600">{errors.price?.message}</p>
  </>
);

export default PropertyDetails;
