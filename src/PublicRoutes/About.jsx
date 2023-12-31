import React from 'react'

function About() {
  return (
   <>
   <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-500">
      <div className="max-w-lg w-full rounded-lg overflow-hidden shadow-lg bg-white p-8">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-gray-700 text-base mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
          eleifend risus. Curabitur eu magna lobortis, tincidunt urna eu,
          sagittis justo. Aliquam ac mauris lectus. Duis malesuada augue eu
          consectetur finibus. Sed at sem nec purus lacinia aliquet. Sed vitae
          convallis nisi.
        </p>
        <p className="text-gray-700 text-base">
          Vestibulum vel suscipit tortor, vitae tristique neque. Proin finibus,
          turpis a congue commodo, arcu orci tincidunt arcu, eu ultrices velit
          risus ac justo. Donec id ipsum auctor, lacinia felis at, venenatis
          massa.
        </p>
      </div>
    </div>
   </>
  )
}

export default About;