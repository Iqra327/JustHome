import { useSelector } from "react-redux";

const UsersList = () => {
  const { data: users } = useSelector((state) => state.auth);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4 text-sky-900">Manage Users</h1>
      <div className="bg-white shadow-md rounded-lg h-full max-h-[650px] overflow-y-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-200 text-gray-600 uppercase text-sm">
            <tr>
              <th className="px-6 py-3">#</th>
              <th className="px-6 py-3">Username</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Login Date</th>
              <th className="px-6 py-3">Edit</th>
              <th className="px-6 py-3">Delete</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {users?.map((user, index) => (
              <tr
                key={user._id}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{user.username}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">
                  {new Date(user.createdAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4">
                  <button className="text-yellow-500 hover:underline">
                    Edit
                  </button>
                </td>
                <td className="px-6 py-4">
                  <button className="text-red-500 hover:underline">
                    Delete
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

export default UsersList;