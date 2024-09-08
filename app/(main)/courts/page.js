
"use client"
import React, { useState } from 'react';
import { CiFilter } from "react-icons/ci";
import Navbar from '../../component/NavBarComponent';
import CourtsSlider from "../../component/CourtsSlider";
import Footer from '../../component/FooterComponent';
import { RxCrossCircled } from "react-icons/rx";
import { CiLocationOn } from "react-icons/ci";
import Carousel from '../../component/CourtCarousel.js';

export default function Courts() {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <div className='relative'>
            <div className='md:w-[80%] md:mx-auto mx-5 mt-10 flex items-center justify-between'>
                <div className='flex items-center md:gap-4 gap-1'>
                    <h1 className='md:text-3xl text-md'>Basketball Courts</h1>
                    <CiFilter className='text-[#FFA500] md:text-3xl text-xl' />
                </div>
                <button
                    className='bg-[#FFA500] rounded-md md:text-xl text-sm text-black md:px-16 px-3 py-2 shadow'
                    onClick={() => setShowPopup(true)}
                >
                    Add Court
                </button>
            </div>
            <CourtsSlider slide={"box"} />
            <div className='w-[80%] mx-auto mt-40 flex items-center gap-2'>
                <h1 className='text-[#FFA500] text-2xl font-bold'>Map</h1>
                <h1 className='text-white text-2xl font-bold'>View</h1>
            </div>
            <div className='mt-10 mb-40'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d57939.403949465006!2d67.15371090000001!3d24.8223971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1723305059891!5m2!1sen!2s"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            {/* Courts popup */}
            {showPopup && (
            <div className="fixed inset-0 z-50 flex justify-center items-center bg-gray-800 bg-opacity-75 transition-all duration-300 ease-in-out">
                <div className='lg:w-[40%] w-[80%] relative h-[90vh] rounded-lg transform overflow-auto transition-transform duration-500 ease-in-out translate-y-0 bg-[#333333] shadow-xl'>
                    <div className='flex justify-center relative items-center p-5'>
                        <h1 className='text-white md:text-3xl text-lg poppins-bold '>Add Court</h1>
                        <RxCrossCircled
                            className='text-white cursor-pointer float-right absolute right-5 md:text-3xl text-lg '

                            onClick={() => setShowPopup(false)}
                        />
                    </div>
                    <div className='w-[80%] mx-auto'>
                        <label className='text-sm text-white '>
                            Court Name
                        </label>
                        <br />
                        <input type='text' placeholder='Main Court' className='rounded-md mb-5 text-sm w-full mt-1 md:p-4 p-3 shadow-xl bg-[#808080] text-white' />
                        <label className='text-sm text-white  '>
                            Location
                        </label>
                        <br />
                        <div className='w-full mb-5 relative  mt-1 md:p-4 p-3 shadow-xl bg-[#808080] rounded-md text-white'>
                            <input type='text' placeholder='123 Main Street, Anytown, USA' className='rounded-md bg-[#808080] md:text-sm text-[10px] w-full' />
                            <CiLocationOn className='absolute top-4 md:right-5 right-3 text-xl' />
                        </div>
                        <label className='text-sm text-white  '>
                            Size
                        </label>
                        <div className='flex mt-3 mb-5 items-center justify-between md:w-[70%]'>
                            <div className='flex items-center gap-2 '>
                                <input type="radio" className='w-4 h-4' />
                                <h1 className='md:text-sm text-xs text-white '>Half Court</h1>
                            </div>
                            <div className='flex items-center gap-2 '>
                                <input type="radio" className='w-4 h-4' />
                                <h1 className='md:text-sm text-xs text-white '>Full Court</h1>
                            </div>
                        </div>
                        <label className='text-sm text-white '>
                            Availability
                        </label>
                        <br />
                        <input type='text' placeholder='Monday to Friday, 9:00 AM - 9:00 PM' className='rounded-md mb-5 md:text-sm text-xs w-full mt-1 md:p-4 p-3 shadow-xl bg-[#808080] text-white' /><label className='text-sm text-white '>
                            Price
                        </label>
                        <br />
                        <input type='text' placeholder='$ 40/hr' className='rounded-md mb-5 text-sm w-full mt-1 md:p-4 p-3 shadow-xl bg-[#808080] text-white' />

                        <label className='text-sm text-white  '>
                            Type
                        </label>
                        <div className='grid grid-cols-2 mt-3 mb-5 items-center md:gap-7 gap-5 justify-between md:w-[70%]'>
                            <div className='flex items-center gap-2 '>
                                <input type="radio" className='w-4 h-4' />
                                <h1 className='text-sm text-white '>Indoor</h1>
                            </div>
                            <div className='flex items-center gap-2 '>
                                <input type="radio" className='w-4 h-4' />
                                <h1 className='text-sm text-white '>OutDoor</h1>
                            </div>
                            <div className='flex items-center gap-2 '>
                                <input type="radio" className='w-4 h-4' />
                                <h1 className='text-sm text-white '>Sheltered</h1>
                            </div>
                        </div>
                    </div>
                    <div className='w-[80%]  border-2 border-white rounded-xl py-2  mx-auto'>
                        <Carousel status={"popup"} />
                        <p className='md:text-sm text-xs text-center mt-7 text-white'>Drop your images here too</p>
                        <a href='#' className='md:text-sm text-xs text-center md:mb-5 mb-3 underline text-[#FFA500] flex justify-center'>Click here to Browser</a>
                    </div>
                    <button className='text-black bg-[#FFA500] md:p-4 p-3 md:text-xl text-md text-center flex justify-center w-[80%] mx-auto font-semibold my-10 md:rounded-xl rounded-lg'>Submit</button>
                    {/* Add content for the popup form or additional elements here */}
                </div>
            </div>
            )}

        </div>
    )
}
