"use client"
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import ReviewData from "../data/carDetalReviews.json";
import { LiaAngleLeftSolid } from "react-icons/lia";
import { LiaAngleRightSolid } from "react-icons/lia";
import { RxCross2 } from "react-icons/rx";

const Review = () => {
    const [ reviewPopup,setReviewPopup]= useState(false)
    const PopupOpen=()=>{
        setReviewPopup(true)
    }
    const PopupClose=()=>{
        setReviewPopup(false)
    }
  return (
    <div className="">
      <div className=" flex lg:w-[78%] w-[90%] mx-auto items-center justify-between mt-5 lg:mt-20">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 ">
            <FaStar className="text-[#FFD700] lg:text-sm text-[7px] " />
            <FaStar className="text-[#FFD700] lg:text-sm text-[7px] " />
            <FaStar className="text-[#FFD700] lg:text-sm text-[7px] " />
            <FaStar className="text-[#FFD700] lg:text-sm text-[7px] " />
            <FaStar className="text-white lg:text-sm text-[7px] " />
          </div>
          <h1 className="lg:text-2xl text-xs lg:text-white text-[#FFA500] font-bold">
            10 Reviews
          </h1>
        </div>
        <button onClick={PopupOpen}className="cursor-pointer bg-[#FFA500] lg:block hidden rounded-md shadow-xl cursor-pointer lg:w-52 w-24 lg:h-14 h-9 font-bold  p-2 lg:text-xl text-xs gap-1 items-center text-black">
          Add Review
        </button>
      </div>

      <div className="w-[78%] mx-auto">
        <div className="flex w-[80%] mt-20 items-center justify-between ">
          <h1 className="text-[#FFA500] text-xl">Rated by</h1>
          <h1 className="text-[#FFA500] text-xl">Ratings</h1>
        </div>
      </div>
      <hr className="border w-[78%] mx-auto border-[#4C4A4A] w-full my-5" />

      {ReviewData
        ? ReviewData.map((item) => (
            <>
              <div className="bg-[#333333] w-[82%] mx-auto mt-5 shadow-xl py-5 px-6 flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <Image
                    src="/review-icon.png"
                    alt="image"
                    width={72}
                    height={72}
                  />
                  <div>
                    <h1 className="text-2xl font-bold text-white">
                      {" "}
                      {item.name}
                    </h1>
                    <p className="text-xs text-[#FFA500]">{item.age}</p>
                  </div>
                </div>
                <p className="text-sm text-white w-80">{item.para}</p>
                <div className="space-y-2">
                  <h1>Accessibility</h1>
                  <h1>Condition</h1>
                  <h1>Others</h1>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-1  ">
                    <FaStar className="text-[#FFD700] text-sm" />
                    <FaStar className="text-[#FFD700] text-sm" />
                    <FaStar className="text-[#FFD700] text-sm" />
                    <FaStar className="text-[#FFD700] text-sm" />
                    <FaStar className="text-white text-sm" />
                  </div>
                  <div className="flex items-center gap-1 ">
                    <FaStar className="text-[#FFD700] text-sm" />
                    <FaStar className="text-[#FFD700] text-sm" />
                    <FaStar className="text-[#FFD700] text-sm" />
                    <FaStar className="text-white text-sm" />
                    <FaStar className="text-white text-sm" />
                  </div>
                  <div className="flex items-center gap-1 ">
                    <FaStar className="text-[#FFD700] text-sm" />
                    <FaStar className="text-[#FFD700] text-sm" />
                    <FaStar className="text-white text-sm" />
                    <FaStar className="text-white text-sm" />
                    <FaStar className="text-white text-sm" />
                  </div>
                </div>
              </div>
            </>
          ))
        : ""}
      <div className="flex items-center lg:justify-end justify-center lg:w-[80%] lg:mx-auto mx-5 mt-20 gap-1">
        <h1 className="bg-white text-center flex justify-center items-center fex-col rounded-md border border-[#959595] lg:w-10 lg:h-10 w-8 h-8 text-[#808080]">
          <LiaAngleLeftSolid />
        </h1>
        <div className="border border-[#959595] bg-white rounded-lg flex items-center">
          <h1 className=" flex flex-col justify-center rounded-lg items-center lg:w-10 lg:h-10 w-8 h-8 paginationShadow text-black">
            1
          </h1>
          <h1 className=" flex flex-col justify-center rounded-lg items-center lg:w-10 lg:h-10 w-8 h-8 text-black">
            2
          </h1>
          <h1 className=" flex flex-col justify-center rounded-lg items-center lg:w-10 lg:h-10 w-8 h-8 text-black">
            3
          </h1>
          <h1 className=" flex flex-col justify-center rounded-lg items-center lg:w-10 lg:h-10 w-8 h-8 text-black">
            4
          </h1>
          <h1 className=" flex flex-col justify-center rounded-lg items-center lg:w-10 lg:h-10 w-8 h-8 text-black">
            ......
          </h1>
          <h1 className=" flex flex-col justify-center rounded-lg items-center lg:w-10 lg:h-10 w-8 h-8 text-black">
            10
          </h1>
        </div>
        <h1 className="bg-white text-center flex justify-center items-center fex-col rounded-md border border-[#959595] lg:w-10 lg:h-10 w-8 h-8 text-black">
          <LiaAngleRightSolid />
        </h1>
      </div>

      {/* popup detail */}
      {reviewPopup &&(
  <div className="fixed inset-0 z-50 flex justify-center items-center bg-gray-800 bg-opacity-75 transition-all duration-300 ease-in-out">

  <div className="bg-[#333333] w-[45%] z-40 mx-auto absolute shadow-xl p-10 top-10 right-0 left-0">
    <div onClick={PopupClose} className="cursor-pointer w-5 h-5 p-1 border border-white rounded-full float-right flex flex-col items-center justify-center ">
      <RxCross2 className="text-xl text-white" />
    </div>
    <div className="w-[70%] mx-auto">
      <h1 className="text-3xl font-bold text-center">Rate and Review</h1>
      <div className="flex gap-20 justify-between mt-14">
        <div className="space-y-2 text-lg text-white">
          <h1>Accessibility:</h1>
          <h1>Condition:</h1>
          <h1>Overall Ratings:</h1>
          <h1>Comment:</h1>
        </div>
        <div className="space-y-6">
          <div className="flex items-center gap-5  ">
            <FaStar className="text-[#FFD700] text-sm" />
            <FaStar className="text-[#FFD700] text-sm" />
            <FaStar className="text-[#FFD700] text-sm" />
            <FaStar className="text-white text-sm" />
            <FaStar className="text-white text-sm" />
          </div>
          <div className="flex items-center gap-5  ">
            <FaStar className="text-[#FFD700] text-sm" />
            <FaStar className="text-[#FFD700] text-sm" />
            <FaStar className="text-[#FFD700] text-sm" />
            <FaStar className="text-[#FFD700] text-sm" />
            <FaStar className="text-white text-sm" />
          </div>
          <div className="flex items-center gap-5  ">
            <FaStar className="text-[#FFD700] text-sm" />
            <FaStar className="text-[#FFD700] text-sm" />
            <FaStar className="text-[#FFD700] text-sm" />
            <FaStar className="text-[#FFD700] text-sm" />
            <FaStar className="text-white text-sm" />
          </div>
        </div>
      </div>
      <textarea className="w-full mt-5 rounded-md h-32 "></textarea>
      <button className=" mt-5 bg-[#FFA500] rounded-md shadow-xl float-right cursor-pointer font-bold p-2 text-black w-32">
        Post
      </button>
    </div>
  </div>
  </div>
      )}
    
    </div>
  );
};

export default Review;
