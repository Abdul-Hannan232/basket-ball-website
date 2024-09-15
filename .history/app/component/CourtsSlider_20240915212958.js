"use client"
import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import Link from 'next/link';
import renderStars from "../utils/rating"
import { allCourts as fetchAllCourts } from "../services/courtsServices"; // Rename the imported function
const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1267, // Adjust the breakpoint as needed
            settings: {
                slidesToShow: 2.5,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 959, // Adjust the breakpoint as needed
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },

        {
            breakpoint: 320, // Adjust the breakpoint as needed
            settings: {
                slidesToShow: 1.1,
                slidesToScroll: 1,
            },
        },
    ],
    prevArrow: <></>, // Hides the previous arrow
    nextArrow: <></>,
};
const CourtsSlider = ({ slide }) => {
    const sliderRef = useRef(null);
    const [spinner, setSpinner] = useState(false)

    const goToPrev = () => {
        sliderRef.current.slickPrev();
    };

    const goToNext = () => {
        sliderRef.current.slickNext();
    };

    const [allCourts, setAllCourts] = useState([]); // Initialize with an empty array

    useEffect(() => {
        setSpinner(true)
        const getCourts = async () => {
            try {
                const response = await fetchAllCourts(); // Use the renamed function
                setAllCourts(response.data.courts); // Store the fetched data in state
            } catch (error) {
                console.error("Failed to fetch courts data:", error);
                // You can also add error handling for the UI here
            } finally {
                setSpinner(false)
            }
        };

        getCourts();
    }, []);
    return (
        <div >
            {slide === 'carousel' ? (
                <div className="  2xl:ml-32 md:ml-14 md:pt-10 pt-10 w-[95%] mx-auto z-10 2xl:mb-40 md:mb-20" id="Testimonials" style={{ position: 'relative' }}>
                    <div className='2xl:text-6xl md:text-4xl text-xl font-bold md:mb-20 mb-10 flex justify-center items-center gap-2 '>
                        <h1 className='text-[#FFA500]'>Best Rated </h1>
                        <h1>Basketball Court</h1>
                    </div>
                    <div className="flex justify-center">
                        {spinner ? <span className="loader"></span> : null}
                    </div>



                    <Slider ref={sliderRef} {...settings}>

                        {allCourts.map((item, index) => (
                            <div key={index} className=' wbg-black'>
                                <div className='relative shadow cursor-pointer text-black rounded-md 2xl:w-[450px] md:w-[300px] w-[250px] group'>
                                    <div className='absolute inset-0 bg-black opacity-0 z-20 group-hover:opacity-70 transition-opacity'></div>

                                    <div className='bg-[#D9D9D9] relative rounded-md overflow-hidden'>
                                        {/* Image and content */}

                                        <Image src={item.images?.[0]
                                            ? `${process.env.NEXT_PUBLIC_IMAGE_URL}/${item.images[0]}`
                                            : '/basketBALL.png'} alt="image" width={343} height={228} className='rounded-t-xl h-60 2xl:w-[400px]' />

                                        <div className='flex items-center justify-center float-right -mt-5 shadow z-10 absolute right-0 p-3 w-32 gap-2 rounded-l-xl bg-white text-black'>

                                            <Image src={item.type === "indoor" ? "/Roofing.png" : "/Basketball Court.png"}
                                                alt="shelter" width={24} height={24} />
                                            <p>{item.type}</p>
                                        </div>
                                        <div className='m-5'>
                                            {/* <Image src="/star.png" alt="image" width={112} height={20} /> */}
                                            <div className='flex items-center'>
                                                {renderStars(item.ratings)}
                                            </div>
                                            <p className='text-[10px] mt-1 font-bold'>{item.rating.length} reviews</p>
                                            <h1 className='text-xl font-bold mb-5'>{item.name}</h1>
                                            <p className='w-32 text-xs font-medium mt-1'>{item.location}</p>
                                            <button className='bg-[#FFA500] p-2 mb-5 mt-10 text-black font-bold text-sm w-full shadow'>
                                                View Court
                                            </button>
                                        </div>

                                        {/* Overlay with Maintenance Button */}
                                        <div className='flex flex-col items-center h-96 justify-center z-40 absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity'>
                                            <button className='bg-[#232323] py-2 px-4 rounded-full text-white'>
                                                Maintenance
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}

                    </Slider>
                    <div style={{ position: 'absolute', transform: 'translateY(-50%)', zIndex: '1' }} className='2xl:top-[45%] lg:top-[65%] top-[35%] md:w-[100%] flex justify-between w-[100%] mx-auto'>
                        <div className=' slick- slick-arrow md:-ml-14 '>
                            <div onClick={goToPrev} className='bg-[#000000A6] text-white text-7xl md:p-[10px] flex items-center justify-center cursor-pointer md:w-14 md:h-14 w-10 h-10 text-center font-bold  rounded-full'>
                                <RiArrowLeftSLine />
                            </div>
                        </div>
                        <div className='slick- slick-arrow'>
                            <div className="bg-[#000000A6] text-white text-7xl md:p-[10px] flex items-center justify-center cursor-pointer md:w-14 md:h-14 w-10 h-10 text-center font-bold  rounded-full" onClick={goToNext}>
                                <MdOutlineKeyboardArrowRight />
                            </div>
                        </div>

                    </div>
                </div>
            ) : (
                <>
                    <div className="flex justify-center mt-[30px]">
                        {spinner ? <span className="loader"></span> : null}
                    </div>
                    <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-20 w-[80%] md:mt-20 mt-5 md:mx-auto mx-5'>

                        {allCourts.map((item, index) => (
                            <div key={index} className='relative  shadow text-black rounded-md 2xl:w-[300px] xl:w-[250px] md:w-[250px] w-[280px] group'>
                                <div className='bg-[#D9D9D9] relative rounded-md overflow-hidden'>
                                    {/* Overlay */}
                                    <div className='absolute inset-0 bg-black opacity-0  group-hover:opacity-70 transition-opacity'></div>

                                    {/* Maintenance Button (Initially Hidden) */}
                                    <div className='flex flex-col items-center h-80 justify-center z-20 absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity'>
                                        <button className='bg-[#232323] py-2 px-4 rounded-full text-white'>
                                            Maintenance
                                        </button>
                                    </div>

                                    <Image src={item.images?.[0]
                                        ? `${process.env.NEXT_PUBLIC_IMAGE_URL}/${item.images[0]}`
                                        : '/basketBALL.png'} alt="image" width={343} height={228} className='rounded-t-xl 2xl:w-[450px]' />

                                    <div className='flex items-center justify-center float-right -mt-5 shadow  absolute right-0 p-3 w-32 gap-2 rounded-l-xl bg-white text-black'>

                                        <Image src={item.type === "indoor" ? "/Roofing.png" : "/Basketball Court.png"}
                                            alt="shelter" width={24} height={24} />
                                        <p>{item.type}</p>
                                    </div>

                                    <div className='m-5 relative'>
                                        {/* <Image src="/star.png" alt="image" width={60} height={20} />
                         */}
                                        <div className='flex items-center'>
                                            {renderStars(item.ratings)}
                                        </div>
                                        <p className='text-[10px] mt-1 font-bold'>{item.rating.length} reviews</p>
                                        <h1 className='text-lg font-bold mb-2'>{item.name}</h1>
                                        <p className='w-32 text-xs font-medium '>{item.location}</p>
                                        <button className='bg-[#FFA500] p-2 mb-3 mt-3 rounded-md text-black font-bold text-sm w-full shadow'>
                                            View Court
                                        </button>
                                    </div>
                                </div>
                            </div>


                        ))}
                    </div>
                </>
            )}

        </div >
    );
};

export default CourtsSlider;


