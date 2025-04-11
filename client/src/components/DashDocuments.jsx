import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

export default function DashDocuments() {
  const {currentUser} = useSelector((state) => state.user)
  const [userPosts, setUserPosts] = useState ([])
    const [userApplications, setUserApplications] = useState ([])
    const navigate = useNavigate();
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
        <div className=" md:mr-55 sm:block mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-center  text-2xl mb-6">My Details and Documents</h1>
        
        {userApplications.map((application) =>(
          <>
          <form key={application._id}>
          <div className="mb-4 flex items-center">
            <label className="w-1/3 md:ml-55 sm:block font-bold">Username: </label>
            <span>
            {application.username} 
               </span>
          </div>
          <div className="mb-4 flex items-center">
            <label className="w-1/3 md:ml-55 sm:block font-bold">Contact no:</label>
            <span> 
            {application.phoneNumber1}, {application.phoneNumber2}
               </span>

          </div>
          <div className="mb-4 flex items-center">
            <label className="w-1/3 md:ml-55 sm:block font-bold">Email Id:</label>
           <span>
           {application.userMail}
             </span>
          </div>
          <div className="mb-4 flex items-center">
            <label className="w-1/3 md:ml-55 sm:block font-bold">City:</label>
            <span>
            {application.city}
             </span>
          </div>
          <div className="mb-4 flex items-center">
            <label className="w-1/3 md:ml-55 sm:block font-bold">Address:</label>
            <span>
            {application.address}
             </span>
          </div>
          <div className="mb-4 flex items-center">
            <label className="w-1/3 md:ml-55 sm:block font-bold">Experience:</label>
            <span>
            {application.experience}
             </span>
          </div>
          <div className="mb-4 flex items-center">
            <label className="w-1/3 md:ml-55 sm:block font-bold">Work Category:</label>
            <span>
            {application.workType}
             </span>
          </div>
          <div className="mb-4 flex items-center">
            <label className="w-1/3 md:ml-55 sm:block font-bold">Document:</label>
            <div className="w-2/3 p-2  rounded h-24 flex ">
             <Link to={`/application/${application._id}`}>
          <img 
            src={application.imageUrls}
            alt='Cover photo'
            className='w-50 h-25 mt-5 object-contain bg-gray-500'
            />
          </Link>
            </div>
          </div>
          <div className="flex justify-between">
          <Link to={`/update-documents/${application._id}`}>
            <button className="bg-purple-500 text-white py-2 px-4 rounded mt-5 cursor-pointer hover:bg-purple-600">
              Update
            </button>
            </Link>

            <Link to='tab=documents'>
            
            <button className="bg-red-500 text-white py-2 px-4 rounded mt-5 cursor-pointer hover:bg-red-600"
            onClick={() => handleApplicationDelete(application._id)}>
              Delete
            </button>
            </Link>
          </div>
          </form>
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
