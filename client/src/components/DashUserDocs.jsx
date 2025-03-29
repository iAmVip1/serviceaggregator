import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { TriangleAlert } from 'lucide-react';


export default function DashUserDocs() {
    const {currentUser} = useSelector((state) => state.user)
  const [userPosts, setUserPosts] = useState ([])
  const [userApplications, setUserApplications] = useState ([])
  
  console.log(userApplications);

  useEffect (() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`/api/application/getAll/`)
        const data = await res.json()
        if (res.ok) {
            setUserPosts(data.applications)
        }
        setUserApplications(data);
      } catch (error) {
        console.log(error.message)
      }
    }
    if (currentUser._id) {
      fetchPosts();
    }
  }, [currentUser._id]
)
const handleApplicationDelete = async (applicationId) => {
    try {
      const res = await fetch(`/api/application/delete/${applicationId}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        return;
      }
      
      setUserApplications((prev) =>
      prev.filter((application) => application._id !== applicationId)
      );

    } catch (error) {
      console.log(error.message);
      
    }
  }

  return (
    <div>
         {currentUser.isAdmin && userApplications.length > 0 ? (
            <>


            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                    <thead className="text-xs text-gray-400 uppercase bg-gray-700  ">
                        <tr>
                            <th scope="col" className="px-4 py-3">
                                Username
                            </th>
                            <th scope="col" className="px-4 py-3">
                                User Image
                            </th>
                            <th scope="col" className="px-4 py-3">
                                User Email
                            </th>
                            <th scope="col" className="px-4 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-4 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    {userApplications.map((application) =>(
                    <tbody key={application._id}>
                        <tr className="odd:bg-white odd: even:bg-gray-50 even: border-b  border-gray-200">
                            <th scope="row" className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            <p className=''>{application.username}</p>
                            </th>
                            <td className="px-4 py-4">
                            <Link to={`/application/${application._id}`}>
            <img 
            src={application.userImage}
            alt='Cover photo'
            className='w-20 h-10 object-contain bg-gray-500'
            />
            </Link>
                            </td>
                            <td className="px-4 py-4">
                            <p className=''>{application.userMail}</p>
                            </td>
            
                            <td className="px-4 py-4">
                            <p className=''>{application.workType}</p>
                            </td>

                            <td className="px-4 py-4">
                           <button onClick={() => handleApplicationDelete(application._id)}
             className='text-red-700 hover:underline cursor-pointer'>
              Delete
            </button>
                            </td>
                        </tr>
                        
                    </tbody>
                    ))}
                </table>
            </div>
            
                    </>
         ):(
            <p>No documents available</p>
         )}
    </div>
  )
}
