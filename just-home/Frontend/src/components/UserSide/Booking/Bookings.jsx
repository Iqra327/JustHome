import { properties } from "../../../constants";

const Bookings = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-6">Bookings</h2>
      <div className="bg-white shadow-md rounded-lg h-full max-h-[650px] overflow-y-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-200 text-gray-600 uppercase text-sm">
            <tr>
              <th className="px-6 py-3">#</th>
              <th className="px-6 py-3">Property Name</th>
              <th className="px-6 py-3">Price</th>
              <th className="px-6 py-3">Check-In Date</th>
              <th className="px-6 py-3">Check-Out Date</th>
              <th className="px-6 py-3">View</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {properties.map((property, index) => (
              <tr
                key={property.id}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{property.title}</td>
                <td className="px-6 py-4">{property.price}</td>
                <td className="px-6 py-4">{property.checkInDate || "N/A"}</td>
                <td className="px-6 py-4">{property.checkOutDate || "N/A"}</td>
                <td className="px-6 py-4">
                <button className="text-blue-500 hover:underline">
                  View
                </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
