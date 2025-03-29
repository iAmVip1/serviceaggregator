import React from 'react'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { TriangleAlert } from 'lucide-react';


export default function DashUsers() {
    const { currentUser } = useSelector((state) => state.user);
  const [users, setUsers] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState('');
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`/api/user/getusers`);
        const data = await res.json();
        if (res.ok) {
          setUsers(data.users);
          if (data.users.length < 9) {
            setShowMore(false);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    if (currentUser.isAdmin) {
      fetchUsers();
    }
  }, [currentUser._id]);

  const handleShowMore = async () => {
    const startIndex = users.length;
    try {
      const res = await fetch(`/api/user/getusers?startIndex=${startIndex}`);
      const data = await res.json();
      if (res.ok) {
        setUsers((prev) => [...prev, ...data.users]);
        if (data.users.length < 9) {
          setShowMore(false);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDeleteUser = async () => {
    try {
        const res = await fetch(`/api/user/delete/${userIdToDelete}`, {
            method: 'DELETE',
        });
        const data = await res.json();
        if (res.ok) {
            setUsers((prev) => prev.filter((user) => user._id !== userIdToDelete));
            setShowModal(false);
        } else {
            console.log(data.message);
        }
    } catch (error) {
        console.log(error.message);
    }
  };

  return (
    <div >
         {currentUser.isAdmin && users.length > 0 ? (
            <>


            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                    <thead className="text-xs text-gray-400 uppercase bg-gray-700  ">
                        <tr>
                            <th scope="col" className="px-4 py-3">
                                Username
                            </th>
                            <th scope="col" className="px-4 py-3">
                                User Email
                            </th>
                            <th scope="col" className="px-4 py-3">
                                UserId
                            </th>
                            <th scope="col" className="px-4 py-3">
                                Date Created
                            </th>
                            <th scope="col" className="px-4 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    {users.map((user) => (
                    <tbody key={user._id}>
                        <tr className="odd:bg-white odd: even:bg-gray-50 even: border-b  border-gray-200">
                            <th scope="row" className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            {user.username}
                            </th>
                            <td className="px-4 py-4">
                            {user.email}
                            </td>
                            <td className="px-4 py-4">
                            {user._id}
                            </td>
                            <td className="px-4 py-4">
                            {new Date(user.createdAt).toLocaleDateString()}
                            </td>
            
                            <td className="px-4 py-4">
                            <span
                      onClick={() => {
                        setShowModal(true);
                        setUserIdToDelete(user._id);
                      }}
                      className='font-medium text-red-500 hover:underline cursor-pointer'
                    >
                      Delete
                    </span>
                            </td>
                        </tr>
                        
                    </tbody>
                    ))}
                </table>
                {showMore && (
            <button
              onClick={handleShowMore}
              className='w-full text-teal-500 self-center text-sm py-7 hover:underline cursor-pointer'
            >
              Show more
            </button>
          )}
            </div>
            
                    </>
         ): (
            <p>You have no users yet!</p>
          )}
        {showModal && (
                <div className="fixed inset-0 bg-gray-500  flex justify-center items-center">
                  <div className="bg-white p-6 rounded-md shadow-lg">
                    <TriangleAlert className='h-14 w-14 text-gray-400 
                     mb-4 mx-auto' />
                    <h3 className="text-center mb-4">Are you sure you want to delete your account?</h3>
                    <div className="flex justify-between">
                      <button
                        className="bg-red-500 text-white p-2 rounded-md cursor-pointer hover:bg-red-600"
                        onClick={handleDeleteUser}
                      >
                        Yes, Delete
                      </button>
                      <button
                        className="bg-gray-500 text-white p-2 rounded-md cursor-pointer hover:bg-gray-600"
                        onClick={() => setShowModal(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}
    </div>
  )
}
