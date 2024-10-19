"use client";
import React, { useState, useEffect } from 'react';
import checkInService from '../services/checkInServices';
import Carousel from "./CourtCarousel.js";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import Loader from "../component/LoadingBall.js";
import { getCourtById } from "../services/courtsServices.js";
// import Image from "next/image";
// import { IoMdStar } from "react-icons/io";
// import { FaLocationDot } from "react-icons/fa6";
// import { PiMedalFill } from "react-icons/pi";
// import { IoIosCall } from "react-icons/io";
// import { RxExternalLink } from "react-icons/rx";
// import CarDetail from "../../app/data/carDetail.json";
// import Reviews from "./StarReviews.js";
// import renderStars from "./../utils/rating.js";
// import Link from "next/link";
import { LuExternalLink } from "react-icons/lu";
import ReviewsCompponent from "../component/Review.js";
import Checkin from "../component/Checkin.js";
import { useAuthToken } from '../customHook/useAuthToken';

export default function CourtDetail() { 
  const searchParams = useSearchParams();
  const courtId = searchParams.get("id");
  const { token, decodedToken } = useAuthToken();
  const [hasRecentCheckIn, setHasRecentCheckIn] = useState(false);
const userId = decodedToken?.id;
  ////////////////////////////  Check Ckeckin Status //////////////////////////


useEffect(() => {

  const fetchCheckInStatus = async () => {
    try {
      if (userId && courtId) {
        const data = await checkInService.getCheckInStatus(userId, courtId, token);
        setHasRecentCheckIn(data?.hasRecentCheckIn);
      }
      // console.log("isCheckInAllowed : ", data);

    } catch (error) {
      console.error("Error fetching check-in status", error);
    }
  };

  
  if (userId && courtId) {
    fetchCheckInStatus();
  }
}, [userId,courtId]);




  /////////// Fetch Court Detail
  const { data, error, isLoading } = useSWR(
    courtId ? [`/api/court/${courtId}`, courtId] : null,
    () => getCourtById(courtId)
  );

  if (isLoading) return <Loader />;
  if (error) console.log(error);

  if (error) return <div>Failed to load court details.</div>;


  const style = [
    {
      key: "Body Style",
      value: "Sedan",
    },

    {
      key: "Model Category",
      value: "Family Car",
    },
    {
      key: "Exterior Color",
      value: "Orange",
    },
    {
      key: "Interior Color",
      value: "Red",
    },
  ];
  const performence = [
    {
      key: "Transmission",
      value: "Automatic",
    },

    {
      key: "Engine Type",
      value: "Hybrid",
    },
    {
      key: "Engine Capacity (CC)",
      value: "2,000 CC",
    },
  ];
  const features = [
    {
      key: "Seating Capacity",
      value: "05",
    },

    {
      key: "Number of Doors",
      value: "04",
    },
    {
      key: "Additional Features",
      value:
        "Rearview camera, Lane departure warning, Apple CarPlay/Android Auto, Navigation system, Automatic emergency braking",
    },
  ];
  return (
    <>
      <div className="lg:flex  mt-20 gap-10 lg:w-[80%] mx-auto ">
        <main className="container mx-auto lg:w-[50%] ">
          <Carousel status={"carousel"} images ={data?.images} />
        </main>
        <div className="lg:w-[100%] w-[90%] lg:mx-0 mx-5 lg:mt-0 mt-10 ">
          <h1 className="lg:text-3xl text-xl text-white font-bold">
            {data?.name}
          </h1>
          <div className="flex  mt-5 lg:gap-20 gap-">
            <div className="grid grid-row-6 lg:gap-5 gap-3">
              <h1 className="text-white lg:text-lg text-sm font-bold">
                Location:{" "}
              </h1>
              <button className="bg-[#333333] rounded-md p-2 flex justify-center text-xs gap-1 items-center text-[#333333]">
                <LuExternalLink className="text-xl text-[#333333]" />
                Get Directions
              </button>

              <h1 className="text-white lg:text-lg text-sm font-bold">
                Availability:{" "}
              </h1>
              <h1 className="text-white lg:text-lg text-sm font-bold">
                Price:{" "}
              </h1>
              <h1 className="text-white lg:text-lg text-sm font-bold">
                Type:{" "}
              </h1>
              <h1 className="text-white lg:text-lg text-sm font-bold">
                Size:{" "}
              </h1>
            </div>
            <div className="grid grid-row-6 lg:gap-5 gap-3">
              <p className="text-white lg:text-xs text-[10px] ">
               {data?.location}
              </p>
              <button className="bg-[#0BAD0B] lg:rounded-md rounded-sm shadow-xl cursor-pointer lg:h-9 h-7 lg:w-32 w-28 p-2 flex justify-center lg:text-xs text-[10px] gap-1 items-center text-white">
                <LuExternalLink className="lg:text-xl text-sm" />
                Get Directions
              </button>
              <p className="text-white lg:text-xs text-[10px]  ">
                {/* 19 : 30 H to 22 : 00 H */}
                {data.availability || "no mention"}
              </p>
              <p className="text-white lg:text-xs text-[10px] ">$ {data?.cost}/hr </p>
              <p className="text-white lg:text-xs text-[10px] ">{data?.type} </p>
              <p className="text-white lg:text-xs text-[10px] ">{data?.size || "no mention"} </p>
            </div>
          </div>
          <div className="flex items-center justify-between lg:mt-0 mt-12">
            <button className="bg-[#F61818] lg:mt-10 rounded-md  shadow-xl cursor-pointer h-9 lg:w-32 w-24 p-2 text-xs gap-1 items-center text-white">
              Report
            </button>
            <button className="bg-[#FFA500] lg:hidden block rounded-md shadow-xl cursor-pointer lg:w-52 w-24 lg:h-14 h-9 font-bold  p-2 lg:text-xl text-xs gap-1 items-center text-black">
              Add Review
            </button>
          </div>
        </div>
      </div>
      <ReviewsCompponent />
      <Checkin  hasRecentCheckIn={hasRecentCheckIn} userId={userId} courtId={courtId} token={token} />
    </>
  );
}
