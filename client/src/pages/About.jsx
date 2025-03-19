import React from 'react'
import aboutLogo from '../../../images/logo1.png'

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-lg  overflow-hidden">
        {/* Image Section */}
        <img
          src={aboutLogo}
          alt="logo"
          className="w-full p-1 h-64 object-contain"
        />
        {/* Content Section */}
        <div className="p-6">
  <h4 className="text-sm text-gray-700 font-medium mb-4">
            Kalanki, Kathmandu
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
          Service Aggregator is one of the trustable names in the field of servicing and repairing sector. It is established with the aim “one-call solution for a wide range of home maintenance and repair needs”.
          
          </p>
          
        </div>
      </div>
    </div>
  )
}
