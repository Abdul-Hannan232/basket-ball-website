"use client"
import React, { useState, useEffect } from 'react';
import { FaGreaterThan, FaLessThan } from "react-icons/fa";

const images = [
    '/carouselPic.png',
    '/carone.jpeg',
    '/car2.jpg',
    '/basketBALL',
];

const Carousel = () => {
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
        <div className="flex flex-col items-center">
            <div className='flex items-center gap-4 w-[95%] mx-auto relative'>
                <button className="text-white bg-white left-0 z-40 absolute bg-opacity-50 lg:p-3 p-1 lg:rounded-xl rounded-md" onClick={handlePrevious}>
                    <FaLessThan className='text-sm lg:text-xl'/>
                </button>
                <div className='md:w-[680px] lg:mx-0 mx-5 w-full mx-auto md:h-80'>
                    <img
                        src={images[selectedImageIndex]}
                        alt="Selected"
                        className={`mb-4 w-full rounded-xl md:h-96 h-48 ${transitioning ? 'zoom-out' : 'zoom-in'}`}
                    />
                </div>
                <button className="text-white bg-white right-0 z-40 absolute bg-opacity-50 lg:p-3 p-1 lg:rounded-xl rounded-md" onClick={handleNext}>
                    <FaGreaterThan className='text-sm lg:text-xl'/>
                </button>
            </div>
            <div className="flex items-center md:mt-20">
                <div className="flex">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Image ${index}`}
                            className={`lg:w-40 md:w-20 w-16 lg:h-20 md:h-14 h-12 ml-2 lg:rounded-xl rounded-md object-cover cursor-pointer ${index === selectedImageIndex ? 'border-2 border-blue-500' : ''}`}
                            onClick={() => setSelectedImageIndex(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
