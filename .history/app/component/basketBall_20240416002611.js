"use client"
import React, { useRef } from 'react';
import Slider from 'react-slick';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import testimonaldata from '../data/testimonaldata.json';
import Image from 'next/image';
// import { motion } from "framer-motion"

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024, // Adjust the breakpoint as needed
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
          },
        },

        {
            breakpoint: 768, // Adjust the breakpoint as needed
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
      ],
    prevArrow: <></>, // Hides the previous arrow
    nextArrow: <></>,
};
const Testimonial = () => {
    const sliderRef = useRef(null);

    const goToPrev = () => {
        sliderRef.current.slickPrev();
    };

    const goToNext = () => {
        sliderRef.current.slickNext();
    };

    return (
        <div className="  2xl:ml-32 ml-20 pt-10 2xl:mb-40 mb-0" id="Testimonials" style={{ position: 'relative' }} >
            <div className='2xl:text-6xl text-4xl font-bold mb-20 flex justify-center items-center gap-2 '>
                <h1 className='text-[#FFA500]'>Best Rated </h1>
                <h1>Basketball Court</h1>
            </div>
            <Slider ref={sliderRef} {...settings}>
                {testimonaldata.map((item, index) => (
                  <div key={}className=''> 
                   <div className='bg-[#D9D9D9] shadow text-black rounded-md 2xl:w-[450px] w-[330px]'>
                        <Image src="/basketBALL.png" alt="image" width={343} height={228} className='rounded-t-xl 2xl:w-[450px] ' />
                        <div className='m-5'>

                            <Image src="/star.png" alt="image" width={112} height={20} />
                            <p className='text-[10px] mt-1 font-bold'>64 reviews</p>
                            <h1 className='text-xl font-bold my-5'>{item.name}</h1>
                            <p className='w-32 text-xs font-medium mt-1'>{item.address}</p>
                            <button className='bg-[#FFA500] p-2 mb-5 mt-10  text-black font-bold text-sm w-full shadow'>View Court</button>

                        </div>
                    </div>
                    
                    </div>
                ))}

            </Slider>
            <div style={{ position: 'absolute', top: '35%', transform: 'translateY(-50%)', zIndex: '1' }} className='md:w-[100%] flex justify-between w-[100%] mx-auto'>
                <div className=' slick- slick-arrow -ml-14 '>
                    <div onClick={goToPrev} className='bg-[#000000A6] text-white text-7xl md:p-[10px] flex items-center justify-center cursor-pointer w-14 h-14 text-center font-bold  rounded-full'>
                        <RiArrowLeftSLine />
                    </div>
                </div>
                <div className='slick- slick-arrow'>
                    <div className="bg-[#000000A6] text-white text-7xl md:p-[10px] flex items-center justify-center cursor-pointer w-14 h-14 text-center font-bold  rounded-full" onClick={goToNext}>
                        <MdOutlineKeyboardArrowRight />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Testimonial;


