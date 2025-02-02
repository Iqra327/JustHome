import { useEffect, useState } from "react";
import Modal from "../Modal";
import { useForm } from "react-hook-form";
import { createAmenity, deleteAmenity } from "../../../../api/amenityApi";
import { useSelector, useDispatch } from "react-redux";
import { fetchAmenities } from "../../../redux/slices/amenitiesSlice";

const Amenities = () => {
  const token = useSelector((state) => state.auth.token);
  const [isCreateAmenity, setIsCreateAmenity] = useState(false);
  const dispatch = useDispatch();
  const {data: amenities, status} = useSelector((state) => state.amenities);

  const { register, handleSubmit, formState , reset} = useForm({
    reValidateMode: 'onSubmit'
  });

  const { errors } = formState;

  //on new amenity creation
  const handleAmenity = async (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('iconURL', data.imgFile[0]);

    try {
      const response = await createAmenity(formData, token);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    reset();
    setIsCreateAmenity(false)
  }

  //getting all amenities
  useEffect(() => {
    if(status === 'idle') dispatch(fetchAmenities());
  }, [status, dispatch])

  //deleteAmenity
  const handleDelete = async (id, iconId) => {
    try {
      const response = await deleteAmenity(id, iconId);
      console.log(response); 
    } catch (error) {
      console.log(error);
    }
  }
  
  const handleEdit = () => {
    setIsCreateAmenity(true);
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between pb-5">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Manage Amenities</h2>
        <button 
          className='text-lg border text-white p-2 rounded-md bg-orange-500 hover:bg-orange-600 transition-all' 
          onClick={()=> setIsCreateAmenity(true)}
        >
          + Create Amenity
        </button>
      </div> 
      <div>
        <table className="w-full text-left bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <tr>
              <th className="px-6 py-3 text-left">#</th>
              <th className="px-6 py-3 text-left">Icon</th>
              <th className="px-6 py-3 text-left">Amenity Name</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            {amenities?.map((amenity, index) => (
              <tr
                key={amenity._id}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">
                  <img
                    src={amenity.iconURL}
                    alt={amenity.name}
                    className="w-10 h-10 object-cover rounded"
                  />
                </td>
                <td className="px-6 py-4 font-medium">{amenity.name}</td>
                <td className="px-6 py-4">
                  <div className="flex space-x-4">
                    <button
                      onClick={() => handleEdit(amenity)}
                      className="text-blue-500 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(amenity._id, amenity.iconId)}
                      className="text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* amenity modal with form */}
      {
        isCreateAmenity && 
        <Modal 
          className='mt-52 px-4 pb-4' 
          title='Add Amenity Details' 
          onClose={() => { 
            setIsCreateAmenity(false); 
            reset();
          }}
        >

          {/* form */}
          <form onSubmit={handleSubmit(handleAmenity)}  className="space-y-4" noValidate>
            <input
              type="text"
              placeholder="Amenity Name"
              className="p-2 border rounded w-full"
              {...register('name',{
                required: 'Please enter amenity name',
              })}
            />
            <p className="text-red-600">
              {errors.name?.message}
            </p>
            <input
              type="file"
              accept="image/*"
              className="p-2 border rounded w-full"
              {...register('imgFile',{
                required: 'Please upload at least one icon',
              })}
            />
            <p className="text-red-600">
              {errors.imgFile?.message}
            </p>
            <button className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded">
              Create Amenity
            </button>
          </form>
        </Modal>
      }
    </div>
  );
};

export default Amenities;