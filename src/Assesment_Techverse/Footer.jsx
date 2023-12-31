import React from 'react'

import { FaFacebook, FaInstagram } from 'react-icons/fa';
function Footer() {
  return (
    <>
      <footer className="bg-gray-200 py-8 px-4">
        <div className="flex items-center justify-between">
          <div className="w-1/4">
            <img src="./footer-leaf.png" alt="Logo" className="h-120 w-200 ml-16" />


          </div>
          <div className="w-2/4 text-center">
            <h1 className="text-lg font-semibold text-gray-600">Get Notified</h1>
            <h1 className="text-lg font-semibold text-gray-600">about new amazing products</h1>
            <div className="mt-8">
              <p className="mt-4 text-sm text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industy.</p>
              <p className=" text-sm text-gray-500">It has been the industry's standard dummy text ever since.</p>
            </div>
            <div>
            <input type="text" placeholder="Enter your email" className="border border-gray-400 rounded-full px-4 py-2 mt-4" />
            <button className="bg-teal-600 text-white font-semibold py-3 px-6 ml-2 rounded-full cursor-pointer">Next</button>
            </div>
            <div className="flex justify-center">
  <ul className="flex items-center space-x-16 w-full">
    <li><a href="#" className="text-gray-600 text-sm">Product</a></li>
    <li><a href="#" className="text-gray-600 text-sm">Company</a></li>
    <li><a href="#" className="text-gray-600 text-sm">Learn more</a></li>
    <li><a href="#" className="text-gray-600 text-sm">Get in touch</a></li>
  </ul>
</div>

          </div>

          <div className="w-1/4 text-right">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex justify-end mt-4">
              <a href="#" className="text-2xl text-gray-600 mx-2 hover:text-blue-500">
                <FaFacebook />
              </a>
              <a href="#" className="text-2xl text-gray-600 mx-2 hover:text-blue-500">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        {/*<div className="mt-8">
        <h4 className="text-lg font-semibold">Content Heading</h4>
        <p className="mt-4">Some content goes here...</p>
  </div>*/}
      </footer>
    </>
  )
}
export default Footer;
