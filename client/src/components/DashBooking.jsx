import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

export default function MyBooking() {

  const {currentUser} = useSelector((state) => state.user)
    const [userPosts, setUserPosts] = useState ([])
      const [userBookings, setUserBookings] = useState ([])

      console.log(userBookings);
      
      
        useEffect(() => {
          const fetchPosts = async () => {
            try {
              const res = await fetch(`/api/user/bookings/${currentUser._id}`)
              const data = await res.json()
              if (res.ok) {
                  setUserPosts(data.bookings)
              }
              setUserBookings(data);
            } catch (error) {
              console.log(error.message)
            }
          }
          if (currentUser._id) {
            fetchPosts();
          }
        }, [currentUser._id]
      )

      const toggleBookingStatus = async (bookingId, currentStatus) => {
        try {
          const res = await fetch(`/api/booking/update/${bookingId}`, {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ bookingStatus: !currentStatus }), 
          });
          const data = await res.json();
          if (res.ok) {
            setUserBookings((prev) =>
              prev.map((booking) =>
                booking._id === bookingId ? { ...booking, bookingStatus: data.bookingStatus } : booking
              )
            );
          } else {
            console.log(data.message);
          }
        } catch (error) {
          console.log(error.message);
        }
      };

  return (
  
      <div className='min-h-screen'>
       <div className="flex items-center justify-center mt-6 ">
       {userBookings && userBookings.length > 0 ? (
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-lg p-6">
        {/* Header */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">My Booking</h1>
        
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">Username</th>
                
                <th className="border border-gray-300 px-4 py-2">Contact Number</th>
                <th className="border border-gray-300 px-4 py-2">User Address</th>
                <th className="border border-gray-300 px-4 py-2">Date</th>
                <th className="border border-gray-300 px-4 py-2">Days</th>
                <th className="border border-gray-300 px-4 py-2">Hours</th>
                <th className="border border-gray-300 px-4 py-2">Booking Status</th>
              </tr>
            </thead>
            {userBookings.map((booking) =>(
            <tbody key={booking._id}>
              {/* Row 1 */}
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-center">
                {booking.userName}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                {booking.bookingPhoneNumber}
                </td>
                
                <td className="border border-gray-300 px-4 py-2 text-center">
                {booking.bookingAddress}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                {booking.bookingDate}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                {booking.bookingDays}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                {booking.bookingHours}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button className="px-4 py-2 bg-green-500 text-white rounded-md cursor-pointer hover:bg-green-600"
                   color={booking.bookingStatus ? 'failure' : 'success'}
                   onClick={() => toggleBookingStatus(booking._id, booking.bookingStatus)}>
                  {booking.bookingStatus ? 'Booked' : 'Pending'}
                  </button>
                </td>
              </tr>
             
            </tbody>
            ))}
          </table>
        </div>
      </div>
       ): (
        <p>You have no bookings</p>
       )}
    </div>
    </div>
  )
}
