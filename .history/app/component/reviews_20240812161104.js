"use client"
import React, { useState } from 'react'
import { IoMdStar } from "react-icons/io";
import { PiMedalFill } from "react-icons/pi";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import Reviews from "../data/reviews.json"
import renderStars from '@/utils/rating';
import Image from 'next/image';
import { RxCross2 } from "react-icons/rx";
import { ImStarEmpty } from "react-icons/im";

const reviews = ({ grid, column }) => {
  const [showAll, setShowAll] = useState(false);
  const [popup, setPopup] = useState(false)
  console.log(renderStars(3), "renderStars")
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };
  const reviewOpen = () => {
    setPopup(true)
  }
  const reviewClose = () => {
    setPopup(false)
  }

  return (
    <>
      <div className='lg:w-[80%] mx-auto'>
        <div className={` bg-white lg:p-8 p-5 rounded-xl lg:w-[80%] lg:w-full lg:mx-auto mx-5 mb-18 mt-5`}>
          <div className='flex items-center  justify-between '>
            <div>
              <h1 className='font-bold'>Reviews</h1>
              <div className='flex items-center space-x-1'>
                <div className='flex  items-center space-x-1'>
                  <PiMedalFill className='lg:text-md lg:block hidden text-sm text-[#90A3BF] text-2xl ' />
                  <p className='text-md  text-[#90A3BF] md:block hidden '>4.0</p>
                  <IoMdStar className=' text-[#FBAD39] text-md  lg:block hidden' />
                  <IoMdStar className=' text-[#FBAD39] text-md  lg:block hidden' />
                  <IoMdStar className=' text-[#FBAD39] text-md  lg:block hidden' />
                  <IoMdStar className=' text-[#FBAD39] text-md  lg:block hidden' />
                  <IoMdStar className=' focus:text-[#FBAD39]  lg:block hidden text-md  text-[#90A3BF]' />
                  <p className='text-md  text-[#90A3BF] lg:block hidden'>(32 reviews)</p>
                </div>
                <p className='text-sm font-bold lg:hidden block  text-[#90A3BF]'>(23)</p>

              </div>
            </div>
            <button onClick={reviewOpen} className='bg-[#0B5CFF] text-white text-center  p-2 lg:rounded-xl  rounded-lg lg:w-32 w-20 hover:bg-opacity-90 cursor-pointer lg:text-sm text-[10px]'> Add Review</button>
          </div>
          <hr className='my-10 border-2' />
          <div cl>
            <div className={`grid ${column} place-items-center items-center justify-center gap-10`}>
              {Reviews.slice(0, showAll ? Reviews.length : grid).map((item, index) => (
                <div key={index} className='lg:w-[330px] mx-auto m-1'>
                  <div className='flex items-center gap-2'>
                    <Image src="/user.png" alt="user" width={45} height={45} />
                    <div className=''>
                      <h1 className='text-lg font-bold'>{item.userName}</h1>
                      <div className='flex items-center'>
                        <p className='text-md text-[#90A3BF]'>4.0</p>
                        <p className='text-xl flex items-center text-[#90A3BF]'>{renderStars(item.rating)}</p>
                      </div>
                    </div>
                  </div>
                  <p className='text-[#90A3BF] lg:w-[300px] mx-auto md:text-sm text-xs font-light mt-5'>Absolutely fantastic experience at Sunshine Honda Dealership! From the moment I walked in, the staff was friendly and attentive. They helped me find the perfect Honda Civic that fit my needs and budget. The buying process was smooth and transparent, and I never felt pressured. The car was in great condition, and the dealership even threw in some extra perks. I highly recommend Sunshine Honda to anyone in the market for a new or used car.</p>
                </div>
              ))}
            </div>
            <hr className='border-2 my-5' />
            <div className='flex justify-center items-center lg:text-lg text-sm cursor-pointer text-[#0B5CFF] my-5' onClick={toggleShowAll}>
              <p>{showAll ? "Show Less" : "Show More"}</p>
              {showAll ? <MdKeyboardArrowUp className='lg:text-3xl text-xl' /> : <MdKeyboardArrowDown className='lg:text-3xl text-xl' />}
            </div>
          </div>
        </div>
      </div>
      {popup && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 ">
          <div className=" absolute top-[15%] flex flex-col justify-center items-center right-0 left-0 ">
            <div className='md:w-[40%] bg-white relative md:mx-0 mx-3 w-full border rounded-xl  p-5'>
              <div onClick={reviewClose} className='rounded-md absolute cursor-pointer top-3 right-3 h-6 flex lfex-col justify-center items-center w-6  bg-[#0B5CFF] text-[#0B5CFF] bg-opacity-40 '>
                <RxCross2 className='text-lg ' />
              </div>

              <h1 className="md:text-3xl text-xl font-medium text-[#313131] text-center">Add Review</h1>
              <hr className='my-6' />
              <div className='flex items-center justify-center gap-3 md:my-10 my-5 className="text-3xl font-bold text-[#313131] text-center"0'>
                <ImStarEmpty className=' md:text-4xl text-2xl text-[#0B5CFF] ' />
                <ImStarEmpty className=' md:text-4xl text-2xl text-[#0B5CFF] ' />
                <ImStarEmpty className=' md:text-4xl text-2xl text-[#0B5CFF] ' />
                <ImStarEmpty className=' md:text-4xl text-2xl text-[#0B5CFF] ' />
                <ImStarEmpty className=' md:text-4xl text-2xl text-[#0B5CFF] ' />
              </div>
              <div className='bg-[#F6F7F9] p-3 rounded-xl'>
              <h1 className='text-sm text-[#313131] font-bold'>Remarks</h1>
              <textarea className='text-[#90A3BF] hover:border-[#0B5CFF] outline-none hover:border-2 p-2 rounded-xl md:h-36 h-36 w-full bg-[#F6F7F9] mt-2 md:text-sm text-xs'>Absolutely fantastic experience at Sunshine Honda Dealership! From the moment I walked in, the staff was friendly and attentive. They helped me find the perfect Honda Civic that fit my needs and budget. The buying process was smooth and transparent, and I never felt pressured. </textarea>
            </div>
              <button onClick={reviewClose} className='w-full bg-[#0B5CFF] text-white md:text-xl text-sm md:p-3 p-2 rounded-xl text-white mt-7 '>Submit</button>
            </div>
          </div>
        </div>
      )}

    </>
  )
}

export default reviews
