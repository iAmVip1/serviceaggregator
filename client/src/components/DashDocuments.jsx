import React from 'react'

export default function DashDocuments() {
  return (
    <div><div className=" flex items-center justify-center">
    <div className="max-w-5xl w-full bg-white  rounded-lg p-6">
      
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Documents</h1>
      

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
       
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">User Details</h2>
          <ul className="space-y-2 text-gray-600">
            <li>
              <strong>Username:</strong> User
            </li>
            
            <li>
              <strong> Address:</strong> Bhopal
            </li>
            <li>
              <strong>User Email:</strong> user@gmail.com
            </li>
            <li>
              <strong>Contact Numbers:</strong> 9854120039
            </li>
          </ul>
        </div>

        {/* User Image */}
        <div className="flex flex-col items-center">
          <img
            src="https://github.com/iAmVip1/serviceaggregator/blob/main/images/avatar.jpg?raw=true" 
            alt="User Profile"
            className="w-40 h-40 rounded-full object-cover shadow-md mb-4"
          />
          <p className="text-sm text-gray-500 font-bold">User Image</p>
        </div>
      </div>

      {/* Documents Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">User Documents</h2>
        <div className="flex flex-col items-center">
          <img
            src="https://github.com/iAmVip1/serviceaggregator/blob/main/imagesForWeb/driving234.jpg?raw=true" 
            alt="Driving License"
            className="w-full md:w-1/2 shadow-md"
          />
          
        </div>
      </div>

      {/* Accept Button */}
      <div className="mt-6 text-center">
        <button className="px-6 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700">
          Update
        </button>
      </div>
    </div>
  </div></div>
  )
}
