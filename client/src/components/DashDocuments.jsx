import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function DashDocuments() {
  const {currentUser} = useSelector((state) => state.user)
  const [userPosts, setUserPosts] = useState ([])
    const [userApplications, setUserApplications] = useState ([])
  console.log(userApplications);
  

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`/api/user/applications/${currentUser._id}`)
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
       {userApplications && userApplications.length > 0 ? (
        <div className="">

        <div className=""> Your Documents</div>
        {userApplications.map((application) =>(
          <>
          
          <Link to={`/application/${application._id}`}>
          <img 
            src={application.imageUrls}
            alt='Cover photo'
            className='w-20 h-10 object-cover bg-gray-500'
            />
          </Link>
          <Link to={`/update-documents/${application._id}`}>
            <button className='text-green-500 hover:underline'>
              Edit
            </button>
            </Link>
          </>
        ))}
        </div>
       ):(
        <>
        {/* upload */}
      <div className="flex items-center justify-center">
      <Link to='/upload-documents'>
  
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white">
  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
  + Upload Documents
  </span>
  </button>
      </Link>
        </div>
        </>
       )}
      
    </div>
  )
}
