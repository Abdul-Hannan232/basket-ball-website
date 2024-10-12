"use client";
import React, { useState } from "react";
// import Navbar from "../../component/NavBarComponent";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
// import Footer from "../../component/FooterComponent";
import BasketBall from "../../component/CourtsSlider";
import { searchCourt } from "../../services/courtsServices";
import { useAuthToken } from "../../customHook/useAuthToken";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const { token } = useAuthToken();
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      if (!query.trim()) {
        toast.warn("Please enter a search term.");
        return;
      }

      try {
        const response = await searchCourt(query, token);
        if (response?.data?.success) {
          setSearchResults(response.data.courts);
        } else {
          toast.info(response.data.message);
          // console.error("Error during search:", response.data.message);
        }
      } catch (error) {
        console.error("Search failed:", error);
      }
    }
  };

  return (
    <div>
      <div className=" md:banner mobilebanner   md:h-[100vh] h-[250px]">
        <ToastContainer />
        <div className="relative  flex flex-col md:justify-center md:mt-0 pt-14 items-center md:h-[90vh] ">
          <div className="bg-white absolute lg:w-[55%] w-[90%] mx-auto md:h-80 h-36 flex flex-col justify-center it-center  bg-opacity-60 rounded-xl  right-0 left-0">
            <div className="relative lg:mx-10 mx-5 border bg-white text-black flex items-center   rounded-full">
              <input
                type="text"
                placeholder="Search Here"
                className="text-black md:text-lg text-xs border-transparent outline-none hover:border-[#FFA500] border-2 md:p-5 p-3 w-full rounded-full "
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={handleSearch}
              />
              <CiSearch className="absolute text-black md:w-20 w-8 px-1 my-2 md:h-10 h-6 right-0 text-4xl border-2 border-[#AFAFAF] border-t-transparent border-r-transparent border-b-transparent  md:top- " />
            </div>
            <div className="flex justify-center gap-3 mt-7 ">
              <div className="bg-white text-center text-black bg-opacity-60 border-[#000000] border-2 flex justify-center items-center md:rounded-[10px] rounded-[7px] md:p-4 p-2 md:w-36 w-22  md:h-16 h-10">
                <Image
                  src="/Basketball Net.png"
                  alt="basket"
                  width={100}
                  height={50}
                  className="md:w-10 mx-auto mt-1 md:h-12 w-6 h-8 "
                />
                <p className="md:text-sm text-[8px]  font-bold">X Courts</p>
              </div>
              <div className="bg-white text-center text-black bg-opacity-60 border-[#000000] border-2 flex justify-center items-center md:rounded-[10px] rounded-[7px] md:p-4 p-2 md:w-36 w-22  md:h-16 h-10">
                <Image
                  src="/Basketball Player.png"
                  alt="basket"
                  width={100}
                  height={50}
                  className="md:w-10 mx-auto  md:h-10 w-6 h-6 "
                />
                <p className="md:text-sm text-[8px]  font-bold">X Users</p>
              </div>
              <div className="bg-white text-center text-black bg-opacity-60 border-[#000000] border-2 flex justify-center items-center md:rounded-[10px] rounded-[7px] md:p-4 p-2 md:w-36 w-22  md:h-16 h-10">
                <Image
                  src="/Rating.png"
                  alt="basket"
                  width={100}
                  height={50}
                  className="md:w-10 mx-auto  md:h-10 w-6 h-6 "
                />
                <p className="md:text-[13px] text-[8px]  font-bold">
                  X Reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BasketBall searchResults={searchResults} slide={"carousel"} />
    </div>
  );
}
