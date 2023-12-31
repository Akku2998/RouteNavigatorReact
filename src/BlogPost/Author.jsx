import React from 'react'
import { useState } from 'react';
import { authorData } from '../AllData/AuthorData.js';
import { FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router';
const Author = () => {
  let navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(authorData.length / itemsPerPage);
  // Get the current page of data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = authorData.slice(startIndex, endIndex);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <>
      <div className='py-20 px-4 flex flex-wrap justify-center'>
        {currentData.map((abc) => (
          <div className="box-border m-10 h-40 w-52 flex flex-col justify-center items-center" style={{ width: '18rem', padding: '20px', backgroundColor: 'rgb(246,246,246)', border: 'none', margin: '45px' }}>
            <h2 className="text-lg font-bold">{abc.name}</h2>
            <div className="mt-4 flex flex-wrap justify-center">
              <button onClick={() => navigate(`/author/${abc.Id}`)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Click to view Profile
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center rounded py-2 px-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="mr-2 bg-blue-500 hover:bg-blue-600 text-white font-bold"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages} className="bg-blue-500 hover:bg-blue-600 text-white font-bold"
        >
          Next
        </button>
      </div>
      <footer className="bg-gray-200 py-12 px-6">
        <div className="container mx-auto text-center">
          <p className="text-lg text-gray-900">
            Made with <FaHeart className="inline text-gray-900" /> by Nidhi
          </p>
        </div>
      </footer>
    </>
  )
}
export default Author;
