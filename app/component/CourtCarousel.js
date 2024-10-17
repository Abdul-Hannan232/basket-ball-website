"use client"
import React, { useState, useEffect } from 'react';
import { FaGreaterThan, FaLessThan } from "react-icons/fa";

// const images = [
//     '/basketball1.jpeg',
//     '/basketball2.jpeg',
//     '/basketball3.jpeg',
//     '/basketball4.jpeg',
//     '/basketball1.jpeg',
// ];

const CourtCarousel = ({ status , images}) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [transitioning, setTransitioning] = useState(false);
    const [prevSelectedImageIndex, setPrevSelectedImageIndex] = useState(0);

    useEffect(() => {
        if (prevSelectedImageIndex !== selectedImageIndex) {
            setTransitioning(true);
            const timeout = setTimeout(() => {
                setTransitioning(false);
                setPrevSelectedImageIndex(selectedImageIndex);
            }, 500); // Adjust duration as needed
            return () => clearTimeout(timeout);
        }
    }, [selectedImageIndex, prevSelectedImageIndex]);

    const handlePrevious = () => {
        setSelectedImageIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setSelectedImageIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <>
            {status === "popup" ? (
                <>   <div className="flex flex-col items-center">
                    <div className='flex items-center gap-4 w-[95%] mx-auto relative'>
                        <button className="text-white bg-white left-0 z-40 absolute bg-opacity-50 lg:p-2 p-1  rounded-md" onClick={handlePrevious}>
                            <FaLessThan className='text-sm' />
                        </button>
                        <div className='md:w-[680px] lg:mx-0 mx-5 w-full mx-auto '>
                            <img
                            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${images[selectedImageIndex]}`}
                                // src={images[selectedImageIndex]}
                                alt="Selected"
                                className={`mb-4 w-full rounded-xl  md:h-56 h-28 ${transitioning ? 'zoom-out' : 'zoom-in'}`}
                            />
                        </div>
                        <button className="text-white bg-white right-0 z-40 absolute bg-opacity-50 lg:p-2 p-1 rounded-md" onClick={handleNext}>
                            <FaGreaterThan className='text-sm ' />
                        </button>
                    </div>
                    <div className="flex items-center ">
                        <div className="flex">
                            {images?.map((image, index) => (
                                <img
                                    key={index}
                                    // src={image}
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${image}`}
                                    alt={`Image ${index}`}
                                    className={`lg:w-40  md:w-16 w-10   md:h-12 h-8 ml-2  rounded-md object-cover cursor-pointer ${index === selectedImageIndex ? 'border-2 border-blue-500' : ''}`}
                                    onClick={() => setSelectedImageIndex(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div></>
            ) : (

                <>
                    <div className="flex flex-col items-center">
                        <div className='flex items-center gap-4 w-[95%] mx-auto relative'>
                            <button className="text-white bg-black left-0 z-40 absolute lg:px-2 lg:py-3 py-2 px-2 rounded-full" onClick={handlePrevious}>
                                <FaLessThan className='text-xs lg:text-xl text-[#808080]' />
                            </button>
                            <div className='md:w-[680px] lg:mx-0 mx-5 w-full mx-auto '>
                                <img
                                    // src={images[selectedImageIndex]}
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${images[selectedImageIndex]}`}
                                    alt="Selected"
                                    className={`mb-4 w-full rounded-xl md:h-96 h-48 ${transitioning ? 'zoom-out' : 'zoom-in'}`}
                                />
                            </div>
                            <button className="text-white bg-black right-0 z-40 absolute  lg:px-2 lg:py-3 py-2 px-2 rounded-full " onClick={handleNext}>
                                <FaGreaterThan className='text-xs lg:text-xl' />
                            </button>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="flex justify-center">
                                {images?.map((image, index) => (
                                    <img
                                        key={index}
                                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${image}`}
                                        alt={`Image ${index}`}
                                        className={`lg:w-24 w-12 ml-2 lg:h-20 h-14 rounded-md object-cover cursor-pointer ${index === selectedImageIndex ? 'border-2 border-blue-500' : ''}`}
                                        onClick={() => setSelectedImageIndex(index)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div></>
            )}

        </>
    );
};

export default CourtCarousel;
