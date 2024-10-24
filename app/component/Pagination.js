import React from 'react';
import { LiaAngleLeftSolid, LiaAngleRightSolid } from 'react-icons/lia'; 
const Pagination = ({ currentPage, totalPages, handlePageChange, setCurrentPage }) => {
  return (
    <div className="flex items-center lg:justify-end justify-center lg:w-[80%] lg:mx-auto mx-5 mt-20 gap-1">
      <h1
        onClick={() => handlePageChange(currentPage - 1)}
        className={`bg-white text-center flex justify-center items-center rounded-md border border-[#959595] lg:w-10 lg:h-10 w-8 h-8 ${
          currentPage === 1 ? 'text-[#808080]' : 'text-black cursor-pointer'
        }`}
      >
        <LiaAngleLeftSolid />
      </h1>

      <div className="border border-[#959595] bg-white rounded-lg flex items-center">
        {Array.from({ length: totalPages }, (_, index) => (
          <h1
            key={index} // Don't forget to add a key prop
            onClick={() => setCurrentPage(index + 1)}
            className={`flex flex-col justify-center rounded-lg items-center lg:w-10 lg:h-10 w-8 h-8 text-black ${
              currentPage === index + 1 ? 'paginationShadow' : ''
            } cursor-pointer`}
          >
            {index + 1}
          </h1>
        ))}
      </div>

      <h1
        onClick={() => handlePageChange(currentPage + 1)}
        className={`bg-white text-center flex justify-center items-center rounded-md border border-[#959595] lg:w-10 lg:h-10 w-8 h-8 ${
          currentPage === totalPages ? 'text-[#808080]' : 'text-black cursor-pointer'
        }`}
      >
        <LiaAngleRightSolid />
      </h1>
    </div>
  );
};

export default Pagination;
