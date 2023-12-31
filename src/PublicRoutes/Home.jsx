import React from 'react'

function Home() {
  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-400 to-orange-500">
      <div className="max-w-lg w-full rounded-lg overflow-hidden shadow-lg bg-white p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Welocome to our unique website
        </h1>
        <div className="relative mb-6">
          <img
            className="w-full h-64 object-cover rounded-lg shadow-md"
            src="https://via.placeholder.com/500x300"
            alt="Nature"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            
          </div>
        </div>
        <p className="text-gray-700 text-lg mb-6">
          Immerse yourself in the wonders of nature and experience the beauty
          that surrounds us. From breathtaking landscapes to vibrant wildlife,
          embark on an unforgettable journey filled with awe and inspiration.
        </p>
        <div className="flex items-center justify-center">
          <a
            href="#"
            className="text-gray-700 hover:text-purple-800 font-semibold text-sm mr-3"
          >
            Learn More
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-purple-800 font-semibold text-sm"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home;