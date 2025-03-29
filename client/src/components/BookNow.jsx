import React from 'react'

export default function BookNow(application) {
  return (
    <div>
      <>
      <div className="flex justify-center items-center p-2 bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-full">
        <h2 className="text-center text-2xl font-bold mb-6">Booking Form</h2>
        <form className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">Address</label>
            <input type="text" placeholder="Your address" className="w-full p-2 border rounded-md" />
          </div>
          <div>
            <label className="block text-gray-700">Date</label>
            <input type="date" className="w-full p-2 border rounded-md" min={new Date().toISOString().split("T")[0]} required />
          </div>
          <div>
            <label className="block text-gray-700">City</label>
            <input type="text" placeholder="Your City" className="w-full p-2 border rounded-md" />
          </div>
          <div>
            <label className="block text-gray-700">Days</label>
            <input type="number" placeholder="Days" className="w-full p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700">Phone Number</label>
            <input type="number" placeholder="Your Number" className="w-full p-2 border rounded-md" />
          </div>
          <div>
            <label className="block text-gray-700">Hour</label>
            
            <select name="" id="" className="w-full p-2 border rounded-md">
              <option value=""> Select Hours </option>
              <option value=""> 11-12 </option>
              <option value=""> 12-01 </option>
              <option value=""> 01-02 </option>
              <option value=""> 02-03 </option>
              <option value=""> 03-04 </option>
              <option value=""> 04-05 </option>
              <option value=""> 05-06 </option>
            </select>
          </div>
          <div className="col-span-2 flex justify-center">
            <button className="bg-lime-600 text-white px-6 py-2 rounded-md text-lg w-full hover:bg-lime-700 cursor-pointer">Submit</button>
          </div>
        </form>
      </div>
    </div>
      </>
    </div>
  )
}
