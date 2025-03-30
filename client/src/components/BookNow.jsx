import React from 'react'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

export default function BookNow({application}) {
  const {currentUser} = useSelector(state => state.user)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    bookingAddress:'',
    bookingCity:'',
    bookingPhoneNumber:'',
    bookingDate:'',
    bookingDays:'',
    bookingHours:'',
  })

  const navigate = useNavigate();

  const handleChange = (e) => {

    if (e.target.id === 'bookingHours' ) {
      setFormData({
         ...formData,
         [e.target.id]: e.target.value 
      })   
     }

    if (e.target.type === 'number' || e.target.type === 'text' || e.target.type === 'date') {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })      
    }
  }

  console.log(application.userRef);
  

  const handleSubmit = async (e) => {
    e.preventDefault ();
    try {
      setLoading(true);
      setError(false);
      const res = await fetch ('/api/booking/create',{
        method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
              ...formData,
              bookingUserRef: currentUser._id,
              bookingUserMail: currentUser.email ,
              workType: application.workType,
              phoneNumber1: application.phoneNumber1,
              phoneNumber2: application.phoneNumber2,
              city: application.city,
              address: application.address,
              userRef: application.userRef,
              userName: application.username,
              userMail: application.userMail

          }),
      })
      const data = await res.json();
        setLoading(false);
        if (data.success === false){
          setError(data.message);
      }
      navigate (`/mybooking`)
    } catch (error) {
      setError(error.message)
      setLoading(false);
    }

  }

  
  
  return (
    <div>
      <>
      <div className="flex justify-center items-center p-2 bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-full">
        <h2 className="text-center text-2xl font-bold mb-6">Booking Form</h2>
        <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700">Address</label>
            <input type="text" placeholder="Your address" className="w-full p-2 border rounded-md" id="bookingAddress"
            onChange={handleChange}
            value={formData.bookingAddress} required />
          </div>
          <div>
            <label className="block text-gray-700">Date</label>
            <input type="date" className="w-full p-2 border rounded-md" min={new Date().toISOString().split("T")[0]} required id='bookingDate'
            onChange={handleChange}
            value={formData.date} />
          </div>
          <div>
            <label className="block text-gray-700">City</label>
            <input type="text" placeholder="Your City" className="w-full p-2 border rounded-md" id='bookingCity'
             onChange={handleChange}
             value={formData.bookingCity}
             required />
          </div>
          <div>
            <label className="block text-gray-700">Days</label>
            <input type="number" placeholder="Days" className="w-full p-2 border rounded-md" id='bookingDays'
             onChange={handleChange}
             value={formData.days} 
             required
            />
          </div>
          <div>
            <label className="block text-gray-700">Phone Number</label>
            <input type="number" placeholder="Your Number" className="w-full p-2 border rounded-md" id='bookingPhoneNumber'
             onChange={handleChange}
             value={formData.bookingPhoneNumber} 
             required/>
          </div>
          <div>
            <label className="block text-gray-700">Hour</label>
            
            <select name="" id="bookingHours" className="w-full p-2 border rounded-md"
             onChange={handleChange}
             value={formData.bookingHours} 
             required >
              <option value=""> Select Hours </option>
              <option value="11-12"> 11-12 </option>
              <option value="12-01"> 12-01 </option>
              <option value="01-02"> 01-02 </option>
              <option value="02-03"> 02-03 </option>
              <option value="03-04"> 03-04 </option>
              <option value="04-05"> 04-05 </option>
              <option value="05-06"> 05-06 </option>
            </select>
          </div>
          <div className="col-span-2 flex justify-center">
            <button className="bg-lime-600 text-white px-6 py-2 rounded-md text-lg w-full hover:bg-lime-700 cursor-pointer">
            {loading ? 'Booking...' : 'Book'}
            </button>

            {error && <p className='text-red-700 text-sm'>{error}</p>}
          </div>
        </form>
      </div>
    </div>
      </>
    </div>
  )
}
