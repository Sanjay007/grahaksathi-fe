import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "animate.css";

const baseUrl = process.env.REACT_APP_BASE_URL ;
// console.log(baseUrl)

const Users = () => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (e) => {
    // console.log(e.target.value);
    setSelectedUserId(e.target.value);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const handleDeleteUser = async () => {
    try {
      // Make the DELETE request to delete the user with the selectedUserId
      console.log(baseUrl)
      const response = await fetch(`${baseUrl}/api/v1/admin/deleteuser/${selectedUserId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // Show success Swal.fire if the response is successful
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "User Deleted successfully!",
        });

        // Fetch the updated user list after deletion
        const getUsersResponse = await fetch(`${baseUrl}/api/v1/admin/getallusers`);
        const data = await getUsersResponse.json();
        setUsers(data);
      } else {
        // Show error Swal.fire if the response is not successful
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to Delete user. Please try again later.",
        });
      }

      // Close the modal
      closeModal();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const session = JSON.parse(localStorage.getItem('session'));
       console.log(session.token)
        const response = await fetch(`${baseUrl}/api/v1/admin/getallusers`, {
          method: 'GET',
          headers: {
            'Authorization': `${session.token}`,
          },
        });
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="animate__bounceIn">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-600 dark:text-gray-400">
          <thead className="text-base tracking-wider text-gray-900 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                UserName
              </th>
              <th scope="col" className="px-6 py-3">
                Mobile
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {user.name}
                </th>
                <td className="px-6 py-4">{user.mobile}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.address}</td>
                <td className="px-6 py-4">
                  <button
                    value={user._id}
                    onClick={openModal}
                    id="deleteButton"
                    data-modal-toggle="deleteModal"
                    type="button"
                    className="text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Delete Modal */}
      <div id="deleteModal" tabindex="-1" aria-hidden="true" className={`${isOpen ? "flex" : "hidden"} fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal backdrop-brightness-75 md:h-full`}>
        <div className="relative p-4 w-full max-w-md h-full md:h-auto">
          {/* <!-- Modal content --> */}
          <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
            <button
              onClick={closeModal}
              type="button"
              className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="deleteModal"
            >
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <svg className="text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <p className="mb-4 text-gray-600 dark:text-gray-300">Are you sure you want to delete this user?</p>
            <div className="flex justify-center items-center space-x-4">
              <button
                onClick={closeModal}
                data-modal-toggle="deleteModal"
                type="button"
                className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                No, cancel
              </button>
              <button
                onClick={(e) => handleDeleteUser(e)}
                type="submit"
                className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
              >
                Yes, I'm sure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
