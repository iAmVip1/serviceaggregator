import React from 'react'

export default function DashBooking() {
  return (
    <div>
       <div className="flex items-center justify-center ">
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-lg p-6">
        {/* Header */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">My Bookings</h1>
        
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Contact Number</th>
                <th className="border border-gray-300 px-4 py-2">Address</th>
                <th className="border border-gray-300 px-4 py-2">Date</th>
                <th className="border border-gray-300 px-4 py-2">Days</th>
                <th className="border border-gray-300 px-4 py-2">Hours</th>
                <th className="border border-gray-300 px-4 py-2">Booking</th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1 */}
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-center">Jamal</td>
                <td className="border border-gray-300 px-4 py-2 text-center">1254785035</td>
                <td className="border border-gray-300 px-4 py-2 text-center">Anywhere</td>
                <td className="border border-gray-300 px-4 py-2 text-center">2025-03-06</td>
                <td className="border border-gray-300 px-4 py-2 text-center">4</td>
                <td className="border border-gray-300 px-4 py-2 text-center">4to6</td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button className="px-4 py-2 bg-green-500 text-white rounded-md">
                    Booked
                  </button>
                </td>
              </tr>
              {/* Row 2 */}
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-center">Jamal</td>
                <td className="border border-gray-300 px-4 py-2 text-center">1254785035</td>
                <td className="border border-gray-300 px-4 py-2 text-center">Anywhere</td>
                <td className="border border-gray-300 px-4 py-2 text-center">2025-03-06</td>
                <td className="border border-gray-300 px-4 py-2 text-center">4</td>
                <td className="border border-gray-300 px-4 py-2 text-center">4to6</td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button className="px-4 py-2 bg-green-500 text-white rounded-md">
                    Booked
                  </button>
                </td>
              </tr>
              {/* Row 3 */}
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-center">Jamal</td>
                <td className="border border-gray-300 px-4 py-2 text-center">1258774569</td>
                <td className="border border-gray-300 px-4 py-2 text-center">Anywhere</td>
                <td className="border border-gray-300 px-4 py-2 text-center">2025-03-06</td>
                <td className="border border-gray-300 px-4 py-2 text-center">4</td>
                <td className="border border-gray-300 px-4 py-2 text-center">2to4</td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button className="px-4 py-2 bg-green-500 text-white rounded-md">
                    Booked
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  )
}
