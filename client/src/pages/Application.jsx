import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';



export default function Application() {

  const [application, setApplication] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [contact, setContact] = useState(false);
  const params = useParams();
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchApplication = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/application/get/${params.applicationId}`);
        const data = await res.json();
        if (data.success === false) {
          setError(true);
          setLoading(false);
          return;
        }
        setApplication(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchApplication();
  }, [params.applicationId]);

  return (
    <div>
      <div className=" flex items-center justify-center">
    <div className="max-w-5xl w-full   rounded-lg p-6">
      
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Documents</h1>
      

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
       
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">User Details</h2>
          {/* small */}
          <div className="flex flex-col md:items-center md:hidden">
          <img
            src={application && application.userImage} 
            alt="User Profile"
            className="w-40 h-40 rounded-full object-cover shadow-md mb-4"
          />
          <p className="text-sm text-gray-500 font-bold">User Image</p>
        </div>
          {/* small */}

          <ul className="space-y-2 text-gray-600">
            <li>
              <strong>Username:</strong>  {application && `${application.username}`}
            </li>
            
            <li>
              <strong> Address:</strong> {application && `${application.address}`}
            </li>
            <li>
              <strong>User Email:</strong> {application && `${application.userMail}`}
            </li>
            <li>
              <strong>Work:</strong> {application && `${application.workType}`} 
            </li>
            <li>
              <strong>Experience:</strong> {application && `${application.experience}`} years 
            </li>
            <li>
              <strong>UserId:</strong> {application && `${application.userRef}`} 
            </li>
          </ul>
        </div>

        {/* User Image */}
        <div className="flex flex-col sm:hidden items-center md:block ">
          <img
            src={application && application.userImage} 
            alt="User Profile"
            className="w-40 h-40 rounded-full object-cover shadow-md mb-4"
          />
          <p className="text-sm text-gray-500 font-bold ml-10">User Image</p>
        </div>
      </div>

      {/* Documents Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">User Documents</h2>
        <div className="flex flex-col items-center">
          <img
            src={application && application.imageUrls}
            alt="Driving License"
            className="w-80 md:w-1/2 shadow-md"
          />
          
        </div>
      </div>

    {/* Booking Button */}
    <div className="mt-6 text-center">
      {
              currentUser && application && application.userRef !== currentUser._id && (
                <button className="px-6 py-2 bg-emerald-600 text-white font-semibold rounded-md hover:bg-emerald-700
                cursor-pointer">
          Book Now
        </button>
              )}
              </div>
      

    </div>
  </div>

    </div>
  )
}
