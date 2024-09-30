import React from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import ReviewData from "../data/carDetalReviews.json";
import { LiaAngleLeftSolid } from "react-icons/lia";
import { LiaAngleRightSolid } from "react-icons/lia";
import CourtData from "../data/carDetailCheckin.json";
const Checkin = () => {
  return (
    <div className="mb-40">
      <div className=" flex w-[78%] mx-auto items-center justify-between mt-20">
        <div className="flex items-center gap-3">
          <h1 className="text-4xl font-bold">Past Check-in</h1>
        </div>
        <button className="bg-[#FFA500]  rounded-md shadow-xl cursor-pointer w-52 h-14 font-bold  p-2 text-xl gap-1 items-center text-black">
          Check In{" "}
        </button>
      </div>

      <div className="w-[78%] mx-auto">
        <div className="grid grid-cols-6 w-[98%]  mt-20  ">
          <h1 className="text-[#FFA500] text-xl">Player</h1>
          <h1 className="text-[#333333] text-xl">Ratings</h1>
          <h1 className="text-[#FFA500] text-xl ml-7">Team</h1>
          <h1 className="text-[#FFA500] text-xl ml-7">Height</h1>
          <h1 className="text-[#FFA500] text-xl ml-6">Weight</h1>
          <h1 className="text-[#FFA500] text-xl">Check-ins</h1>
        </div>
      </div>
      <hr className="border w-[78%] mx-auto border-[#4C4A4A] w-full my-5" />

      {CourtData?CourtData.map((item)=>(
   <>
      <div  className="w-[78%] mx-auto p-5 mt-5 bg-[#333333] shadow-xl">
        <div className=" w-[95%]  gap-5   grid grid-cols-6 ">

<Image src="/review-icon.png" alt="image" width={54} height={54} />

       <div className=" ml-[-40px]">
            <h1 className="text-2xl font-bold text-white">Jordan Miller</h1>
            <p className="text-xs text-white">Joined Since 2017</p>
          </div>
          <p className="text-lg w-32  text-white text-center">Thunderstorm Tigers</p>
          <h1 className="text-lg text-center text-white">190 cm</h1>
          <h1 className="text-lg text-center text-white">110 kg</h1>
          <h1 className="text-lg text-center text-white w-28">02/06/17 10:00 A.M</h1>
        </div>
      </div>
   </>
    )):""} 
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
    </div>
  );
};

export default Checkin;
