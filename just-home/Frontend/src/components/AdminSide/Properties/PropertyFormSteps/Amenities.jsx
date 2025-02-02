import { useState } from "react";
import { useSelector } from "react-redux";
import { Controller } from "react-hook-form";

const Amenities = ({ control, errors }) => {
  const { data: amenities } = useSelector((state) => state.amenities);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (selectedAmenities, amenityId) => {
    if (selectedAmenities.includes(amenityId)) {
      return selectedAmenities.filter((id) => id !== amenityId);
    } else {
      return [...selectedAmenities, amenityId]; 
    }
  };

  return (
    <>
      <h1 className="text-center text-xl text-gray-400">Select Amenities To Add</h1>
      <label htmlFor="amenities" className="sm:text-xl text-sky-950">
        Amenities
      </label>

      {/* Custom dropdown */}
      <div className="relative">
        <Controller
          name="amenities"
          control={control}
          defaultValue={[]} // Default to empty array if nothing is selected
          render={({ field: { value, onChange } }) => (
            <>
              <button
                type="button"
                onClick={toggleDropdown}
                className="w-full p-2 border rounded-md bg-white text-left"
              >
                {value.length > 0
                  ? value
                      .map((id) => amenities.find((a) => a._id === id)?.name)
                      .join(", ")
                  : "Select Amenities"}
              </button>

              {isOpen && (
                <div className="absolute w-full border rounded-md bg-white mt-1 shadow-lg max-h-48 overflow-auto z-10">
                  {amenities.map((amenity) => (
                    <div
                      key={amenity._id}
                      className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => onChange(handleSelect(value, amenity._id))}
                    >
                      <input
                        type="checkbox"
                        checked={value.includes(amenity._id)}
                        className="mr-2"
                        readOnly
                      />
                      {amenity.name}
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        />
      </div>

      <p className="text-red-600">{errors.amenities?.message}</p>
    </>
  );
};

export default Amenities;
