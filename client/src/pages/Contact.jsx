import React from 'react'

export default function Contact() {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg p-8 lg:w-3/4">
        {/* Left - Contact Form */}
        <div className="lg:w-1/2 w-full lg:mr-8 mb-6 lg:mb-0">
          <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
          <form className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          
            {/* Message Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700" htmlFor="message">
                How we can help...
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                rows="4"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-md focus:outline-none"
            >
              Submit
            </button>
          </form>
        </div>
        {/* Right - Image Section */}
        <div className="lg:w-1/2 w-full flex flex-col items-center">
          <h3 className="text-lg font-medium mb-4">Don't hesitate to contact</h3>
          <img
            src="https://github.com/iAmVip1/serviceaggregator/blob/main/imagesForWeb/contactus.jpg?raw=true"
            alt="Contact Us Illustration"
            className="w-full h-auto max-h-64 object-cover"
          />
        </div>
      </div>
    </div>
    </div>
  )
}
