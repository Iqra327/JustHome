import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProperties } from "../../../redux/slices/propertiesSlice";
import { deleteProperty } from "../../../../api/propertyApi";

const PropertyListing = () => {
  const {data: properties} = useSelector((state) => state.properties);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProperties());
  },[])
  console.log(properties);

  //delete property api
  const handleDelete = async (id) => {
    try {
      const response = await deleteProperty(id);
      console.log(response); 
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <div className="p-6">
      {/* upper part from table */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-sky-900">All Listed Properties</h2>
        <NavLink to='/adminDashboard/propertyListing/newProperty'>
          <button className='text-lg border text-white p-2 rounded-md bg-orange-500 hover:bg-orange-600 transition-all'>+ Add Property</button> 
        </NavLink>
      </div>
      
      {/* table */}
      <div className="bg-white shadow-md rounded-lg h-full max-h-[650px] overflow-y-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-200 text-gray-600 uppercase text-sm">
            <tr>
              <th className="px-6 py-3">#</th>
              <th className="px-6 py-3">Image</th>
              <th className="px-6 py-3">Property Name</th>
              <th className="px-6 py-3">Price</th>
              <th className="px-6 py-3">Location</th>
              <th className="px-6 py-3">Uploaded On</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {properties.map((property, index) => (
              <tr
                key={property.id}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">
                  <img
                    src={property.images[0]}
                    alt={property.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="px-6 py-4">{property.name}</td>
                <td className="px-6 py-4">{property.price.toLocaleString()}</td>
                <td className="px-6 py-4">{property.address}</td>
                <td className="px-6 py-4">
                  {new Date(property.createdAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-3">
                    <button className="text-blue-500 hover:underline">
                      View
                    </button>
                    <button className="text-yellow-500 hover:underline">
                      Edit
                    </button>
                    <button className="text-red-500 hover:underline" onClick={() => handleDelete(property._id)}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PropertyListing;
