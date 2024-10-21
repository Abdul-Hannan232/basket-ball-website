"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import Image from "next/image";
import ReviewData from "../data/carDetalReviews.json";
import { LiaAngleLeftSolid } from "react-icons/lia";
import { LiaAngleRightSolid } from "react-icons/lia";
import { RxCross2 } from "react-icons/rx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import reviewService from "../services/reviewServices";

const Review = ({
  userId,
  courtId,
  token,
  isPopupOpen,
  triggerOpenPopup,
  triggerClosePopup,
}) => {
  // console.log("userId , courtId, token : ", userId);

  // const [reviewPopup, setReviewPopup] = useState(false);
  // const PopupOpen = () => {
  //   setReviewPopup(true);
  // };
  // const PopupClose = () => {
  //   setReviewPopup(false);
  // };

  /////////////// Add Reviews And Ratings   /////////////////
  const [isSuccess, setIsSuccess] = useState(false);
  const [ratings, setRatings] = useState({
    accessibilityRating: 0,
    conditionRating: 0,
    overallRating: 0,
    comment: "",
  });

  const handleRatingChange = (category, value) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [category]: value,
    }));
  };
  const handleCommentChange = (e) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      comment: e.target.value,
    }));
  };

  const handleReviews = async () => {
    try {
      if (!userId) {
        toast.warn("Please login to review the court");
        return;
      }

      if (userId && courtId) {
        const data = await reviewService.addReview(
          { ...ratings, userId, courtId },
          token
        );

        if (data.success) {
          toast.success(data?.message);
          setRatings({
            accessibilityRating: 0,
            conditionRating: 0,
            overallRating: 0,
            comment: "",
          });
          setIsSuccess(true);
          triggerClosePopup();
          return;
        }
      }
    } catch (error) {
      console.error("Error fetching check-in status", error);
    }
  };

  /////////////// Fetch Reviews And Ratings  By Court //////////////////

  const [reviews, setReview] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const limit = 3;
  const fetchReviews = async (currentPage) => {
    try {
      if (courtId) {
        const data = await reviewService.getReviewsByCourt(
          courtId,
          currentPage,
          limit
        );
        if (data.success) {
          setReview(data);
          setTotalPages(data?.totalPages);
          // setAverageRating(data.avgOverallRating)
        }
      }
    } catch (error) {
      console.error("Error fetching check-ins", error);
    }
  };

  useEffect(() => {
    fetchReviews(currentPage);
  }, [courtId, isSuccess, currentPage]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  return (
    <div>
      <div className=" flex lg:w-[78%] w-[90%] mx-auto items-center justify-between mt-5 lg:mt-20">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 ">
            <OverallRating overallRating={reviews?.avgOverallRating} />
          </div>
          <h1 className="lg:text-2xl text-xs lg:text-white text-[#FFA500] font-bold">
            {reviews?.totalReviewsCount || "0 "} Reviews
          </h1>
        </div>
        <button
          // onClick={PopupOpen}
          onClick={triggerOpenPopup}
          className="cursor-pointer bg-[#FFA500] lg:block hidden rounded-md shadow-xl cursor-pointer lg:w-52 w-24 lg:h-14 h-9 font-bold  p-2 lg:text-xl text-xs gap-1 items-center text-black"
          // className="cursor-pointer bg-[#FFA500] block  rounded-md shadow-xl cursor-pointer lg:w-52 w-24 lg:h-14 h-9 font-bold  p-2 lg:text-xl text-xs gap-1 items-center text-black"
        >
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

      {/* {ReviewData
        ? ReviewData.map((item) => ( */}
      {reviews ? (
        reviews?.reviews?.map((item) => (
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
                    {item.user.name}
                  </h1>
                  <p className="text-xs text-[#FFA500]">{item.age}</p>
                </div>
              </div>
              <p className="text-sm text-white w-80">{item.comment}</p>
              <div className="space-y-2">
                <h1>Accessibility</h1>
                <h1>Condition</h1>
                <h1>Others</h1>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-1  ">
                  <Rating
                    rating={item?.accessibilityRating}
                    starState="viewonly"
                  />
                </div>
                <div className="flex items-center gap-1 ">
                  <Rating rating={item?.conditionRating} starState="viewonly" />
                </div>
                <div className="flex items-center gap-1 ">
                  <Rating rating={item?.overallRating} starState="viewonly" />
                </div>
              </div>
            </div>
          </>
        ))
      ) : (
        <div className="text-center py-6">No reviews found for this court</div>
      )}



     {/* Pagination */}
     {reviews?.totalReviewsCount && (
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

      {/* popup detail */}
      {isPopupOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-gray-800 bg-opacity-75 transition-all duration-300 ease-in-out">
          <div className="bg-[#333333] w-[45%] z-40 mx-auto absolute shadow-xl p-10 top-10 right-0 left-0">
            <div
              // onClick={PopupClose}
              onClick={triggerClosePopup}
              className="cursor-pointer w-5 h-5 p-1 border border-white rounded-full float-right flex flex-col items-center justify-center "
            >
              <RxCross2 className="text-xl text-white" />
            </div>
            <div className="w-[70%] mx-auto">
              <h1 className="text-3xl font-bold text-center">
                Rate and Review
              </h1>
              <div className="flex gap-20 justify-between mt-14">
                <div className="space-y-2 text-lg text-white">
                  <h1>Accessibility:</h1>
                  <h1>Condition:</h1>
                  <h1>Overall Ratings:</h1>
                  <h1>Comment:</h1>
                </div>
                <div className="space-y-6">
                  {/* Accessibility Rating */}
                  <div className="flex items-center gap-5  ">
                    <Rating
                      rating={ratings.accessibilityRating}
                      onRate={(value) =>
                        handleRatingChange("accessibilityRating", value)
                      }
                    />
                  </div>
                  {/* Condition Rating */}
                  <div className="flex items-center gap-5  ">
                    <Rating
                      rating={ratings.conditionRating}
                      onRate={(value) =>
                        handleRatingChange("conditionRating", value)
                      }
                    />
                  </div>
                  {/* Overall Rating */}
                  <div className="flex items-center gap-5  ">
                    <Rating
                      rating={ratings.overallRating}
                      onRate={(value) =>
                        handleRatingChange("overallRating", value)
                      }
                    />
                  </div>
                </div>
              </div>
              <textarea
                className="w-full mt-5 rounded-md h-32 text-black p-2 text-sm "
                value={ratings.comment}
                onChange={handleCommentChange}
                placeholder="Leave your comments here..."
              ></textarea>
              <button
                onClick={handleReviews}
                className=" mt-5 bg-[#FFA500] rounded-md shadow-xl float-right cursor-pointer font-bold p-2 text-black w-32"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}

      <ToastContainer containerId="reviewToast" />
    </div>
  );
};

export default Review;

const Rating = ({ rating, onRate, starState }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <>
      {" "}
      {stars.map((star, index) => (
        <>
          {starState === "viewonly" ? (
            <FaStar
              key={index}
              className={`text-sm  ${
                star <= rating ? "text-[#FFD700]" : "text-white"
              }`}
            />
          ) : (
            <FaStar
              key={index}
              className={`text-sm cursor-pointer ${
                star <= rating ? "text-[#FFD700]" : "text-white"
              }`}
              onClick={() => onRate(star)}
            />
          )}
        </>
      ))}
    </>
  );
};

const OverallRating = ({ overallRating }) => {
  const ratingRef = useRef(null);

  useEffect(() => {
    if (ratingRef.current) {
      const widthPercentage = (overallRating / 5) * 100; // calculate percentage based on rating
      ratingRef.current.style.width = `${widthPercentage}%`;
    }
  }, [overallRating]);

  return (
    <div className="relative inline-block text-4xl">
      {/* Background (unfilled stars) */}
      <div className="text-white text-2xl">★★★★★</div>

      {/* Foreground (filled stars) */}
      <div
        ref={ratingRef}
        className="absolute top-0 left-0 overflow-hidden text-[#FFD700] whitespace-nowrap text-2xl"
        style={{ width: "0%" }} // initially empty
      >
        ★★★★★
      </div>
    </div>
  );
};
