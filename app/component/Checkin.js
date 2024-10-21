import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import ReviewData from "../data/carDetalReviews.json";
import { LiaAngleLeftSolid } from "react-icons/lia";
import { LiaAngleRightSolid } from "react-icons/lia";
import CourtData from "../data/carDetailCheckin.json";
import checkInService from "../services/checkInServices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkin = ({ hasRecentCheckIn, userId, courtId, token }) => {
  // console.log(">>>>>>>>>>>>>>>> isCheckInAllowed : ", hasRecentCheckIn);
  const [isCheckInSuccessful, setIsCheckInSuccessful] = useState(false);
  const [pastCheckIns, setPastCheckIns] = useState();

  const handleCheckIn = async () => {
    try {
      if (userId && courtId) {
        const data = await checkInService.createCheckIn(userId, courtId, token);
        if (data.success) {
          toast.success(data.message);
          setIsCheckInSuccessful(true);
        }
      }
    } catch (error) {
      console.error("Error fetching check-in status", error);
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const limit = 3;
  const fetchCheckIns = async (currentPage) => {
    try {
      if (courtId) {
        const data = await checkInService.getCheckinByCourt(
          courtId,
          currentPage,
          limit
        );
        if (data.success) {
          setPastCheckIns(data);
          setTotalPages(data?.totalPages);
        }
      }
    } catch (error) {
      console.error("Error fetching check-ins", error);
    }
  };

  useEffect(() => {
    fetchCheckIns(currentPage);
  }, [courtId, isCheckInSuccessful, , currentPage]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  return (
    <div className="mb-40">
      <ToastContainer />
      <div className=" flex w-[78%] mx-auto items-center justify-between mt-20">
        <div className="flex items-center gap-3">
          <h1 className="text-4xl font-bold">Past Check-in</h1>
        </div>
        {!userId ? (
          //  user not logged in ...  show disabled button
          <button
            disabled
            className="bg-[#FFA500] rounded-md shadow-xl w-52 h-14 font-bold p-2 text-xl text-black cursor-not-allowed opacity-50"
          >
            Check In
          </button>
        ) : !hasRecentCheckIn && !isCheckInSuccessful ? (
          //  user loggedIn and no recent check-in ...  show enable button
          <button
            className="bg-[#FFA500] rounded-md shadow-xl cursor-pointer w-52 h-14 font-bold p-2 text-xl text-black"
            onClick={handleCheckIn}
          >
            Check In
          </button>
        ) : (
          //  user not logged in ...  show disabled button
          <button
            disabled
            className="bg-[#FFA500] rounded-md shadow-xl w-52 h-14 font-bold p-2 text-xl text-black cursor-not-allowed opacity-50"
          >
            Check In
          </button>
        )}
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
      {/* 
      {CourtData
        ? CourtData.map((item) => ( */}

      {pastCheckIns?.checkIns ? (
        pastCheckIns?.checkIns.map((checkIn) => (
          <>
            <div className="w-[78%] mx-auto p-5 mt-5 bg-[#333333] shadow-xl">
              <div className=" w-[95%]  gap-5   grid grid-cols-6 ">
                <Image
                  src="/review-icon.png"
                  alt="image"
                  width={54}
                  height={54}
                />

                <div className=" ml-[-40px]">
                  <h1 className="text-2xl font-bold text-white">
                    {checkIn?.user?.name}
                  </h1>
                  <p className="text-xs text-white">
                    {checkIn?.user?.joiningDate}
                  </p>
                </div>
                <p className="text-lg w-32  text-white text-center">
                  {checkIn?.user?.team || "-"}
                </p>
                <h1 className="text-lg text-center text-white">
                  {checkIn?.user?.height || "-"}
                </h1>
                <h1 className="text-lg text-center text-white">
                  {checkIn?.user?.weight || "-"}
                </h1>
                <h1 className="text-lg text-center text-white w-28">
                  {checkIn?.checkInTime}
                </h1>
              </div>
            </div>
          </>
        ))
      ) : (
        <div className="text-center py-6">No past checkins!</div>
      )}

{/* Pagination */}
      {pastCheckIns?.totalChekinsCount && (
        <div className="flex items-center lg:justify-end justify-center lg:w-[80%] lg:mx-auto mx-5 mt-20 gap-1">
          <h1
            onClick={() => handlePageChange(currentPage - 1)}
            className={`bg-white text-center flex justify-center items-center fex-col rounded-md border border-[#959595] lg:w-10 lg:h-10 w-8 h-8  ${
              currentPage === 1 ? "text-[#808080]" : "text-black cursor-pointer"
            }  `}
          >
            <LiaAngleLeftSolid />
          </h1>

          <div className="border border-[#959595] bg-white rounded-lg flex items-center">
            {Array.from({ length: totalPages }, (_, index) => (
              <h1
                onClick={() => setCurrentPage(index + 1)}
                className={` flex flex-col justify-center rounded-lg items-center lg:w-10 lg:h-10 w-8 h-8 text-black     ${
                  currentPage === index + 1 ? "paginationShadow" : ""
                } cursor-pointer`}
              >
                {index + 1}
              </h1>
            ))}
          </div>
          <h1
            onClick={() => handlePageChange(currentPage + 1)}
            className={`bg-white text-center flex justify-center items-center fex-col rounded-md border border-[#959595] lg:w-10 lg:h-10 w-8 h-8  ${
              currentPage === totalPages
                ? "text-[#808080]"
                : "text-black cursor-pointer"
            } `}
          >
            <LiaAngleRightSolid />
          </h1>
        </div>
      )}


      
    </div>
  );
};

export default Checkin;
