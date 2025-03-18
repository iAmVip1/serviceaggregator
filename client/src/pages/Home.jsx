import React from 'react'


export default function Home() {
  return (
    <div className='min-h-screen'>
       <div className=" flex items-center h-150 justify-center shadow-lg"
       style={{
        backgroundImage: "url('https://github.com/iAmVip1/serviceaggregator/blob/main/imagesForWeb/hero_1.jpg?raw=true')",
      }}
       >
      <div
        className="relative w-full max-w-md h-96 bg-cover bg-center rounded-lg "
        
      >
        <div className="absolute inset-0  bg-opacity-60 flex flex-col justify-center items-center text-center px-6 rounded-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-white uppercase">
          Service Aggregator
          </h2>
          <p className="mt-4 text-sm md:text-base text-gray-300">
          We are here for you for any home services
          </p>
          <button className="mt-6 px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold uppercase rounded-lg">
            Call now
          </button>
        </div>
      </div>
    </div>

      {/* services */}
      <div className=" mt-4 mb-4 flex items-center justify-center bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Services</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {/* Service 1 */}
          <div className="p-4 bg-white shadow-md rounded-md flex flex-col items-center justify-center hover:cursor-pointer">
            <img
              src="https://github.com/iAmVip1/serviceaggregator/blob/main/imagesForWeb/elec.png?raw=true" 
              alt="Electrician"
              className="w-16 h-16 mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-700">3</h2>
          </div>
          {/* Service 2 */}
          <div className="p-4 bg-white shadow-md rounded-md flex flex-col items-center justify-center hover:cursor-pointer">
            <img
              src="https://github.com/iAmVip1/serviceaggregator/blob/main/imagesForWeb/serviceman.png?raw=true" 
              alt="Plumber"
              className="w-16 h-16 mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-700">1</h2>
          </div>
          {/* Service 3 */}
          <div className="p-4 bg-white shadow-md rounded-md flex flex-col items-center justify-center hover:cursor-pointer">
            <img
              src="https://github.com/iAmVip1/serviceaggregator/blob/main/imagesForWeb/car.png?raw=true"
              alt="Carpenter"
              className="w-16 h-16 mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-700">1</h2>
          </div>
          {/* Service 4 */}
          <div className="p-4 bg-white shadow-md rounded-md flex flex-col items-center justify-center hover:cursor-pointer">
            <img
              src="https://github.com/iAmVip1/serviceaggregator/blob/main/imagesForWeb/avatar213.png?raw=true" 
              alt="Maid"
              className="w-16 h-16 mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-700">0</h2>
          </div>
          {/* Service 5 */}
          <div className="p-4 bg-white shadow-md rounded-md flex flex-col items-center justify-center hover:cursor-pointer">
            <img
              src="https://github.com/iAmVip1/serviceaggregator/blob/main/imagesForWeb/water.png?raw=true" 
              alt="Water Supplier"
              className="w-16 h-16 mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-700">0</h2>
          </div>
          {/* Service 6 */}
          <div className="p-4 bg-white shadow-md rounded-md flex flex-col items-center justify-center hover:cursor-pointer">
            <img
              src="https://github.com/iAmVip1/serviceaggregator/blob/main/imagesForWeb/wash.png?raw=true" 
              alt="Laundry Man"
              className="w-16 h-16 mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-700">0</h2>
          </div>
        </div>
      </div>
    </div>
    
    </div>
  )
}

