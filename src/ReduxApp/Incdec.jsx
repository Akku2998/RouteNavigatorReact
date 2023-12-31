import React from 'react'

 function Incdec() {
  return (
    <>
    <h1>WELCOME TO REDUX</h1>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
  <div className="max-w-lg w-full rounded-lg overflow-hidden shadow-lg bg-white">
        <img
          className="w-full h-56 object-cover"
          src="https://via.placeholder.com/400x200"
          alt="Placeholder"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-2xl mb-2">Counter App</div>
          <div className="px-8 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            -
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            Tag 2
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            +
          </span>
          </div>
        </div>
        <div className="px-6 py-4 bg-gray-100">
          
        </div>
      </div>
    </div>
    </>
  )
}
export default Incdec;