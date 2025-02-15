import { useState } from "react";
import Modal from "../Modal";
import { users } from "../../../constants";

const ManageBookings = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Manage Bookings</h2>
      {/* User Bookings Summary */}
      <table className="w-full text-left bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200 text-gray-600 uppercase text-sm">
          <tr>
            <th className="px-6 py-3">#</th>
            <th className="px-6 py-3">User Name</th>
            <th className="px-6 py-3">Email</th>
            <th className="px-6 py-3">Total Bookings</th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {users.map((user, index) => (
            <tr
              key={user.userId}
              className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
            >
              <td className="px-6 py-4">{index + 1}</td>
              <td className="px-6 py-4">{user.userName}</td>
              <td className="px-6 py-4">{user.userEmail}</td>
              <td className="px-6 py-4">{user.totalBookings}</td>
              <td className="px-6 py-4">
                <button
                  onClick={() => setSelectedUser(user)}
                  className="text-blue-500 hover:underline"
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Bookings detail model */}
      {selectedUser && (
        <Modal
          className="h-full max-h-[700px] overflow-y-auto px-4 mt-24"
          onClose={() => setSelectedUser(null)}
          title={`${selectedUser.userName}'s Bookings`}
        >
          <div className="space-y-4">
            {selectedUser.bookings.map((booking) => (
              <div
                key={booking.bookingId}
                className="p-4 bg-gray-100 rounded-md"
              >
                <p>
                  <strong>Property:</strong> {booking.propertyName}
                </p>
                <p>
                  <strong>Location:</strong> {booking.location}
                </p>
                <p>
                  <strong>Check-In:</strong>{" "}
                  {new Date(booking.checkIn).toLocaleDateString()}
                </p>
                <p>
                  <strong>Check-Out:</strong>{" "}
                  {new Date(booking.checkOut).toLocaleDateString()}
                </p>
                <p>
                  <strong>Price:</strong> ${booking.price.toLocaleString()}
                </p>
                <p>
                  <strong>Status:</strong> {booking.status}
                </p>
                <button className="text-red-500 hover:underline mt-2">
                  Delete Booking
                </button>
              </div>
            ))}
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ManageBookings;
