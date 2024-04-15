"use client"
import React, { useRef } from 'react';
import Slider from 'react-slick';
import { RiArrowLeftSLine  } from 'react-icons/ri';
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
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
        <div className="  ml-32 pt-10" id="Testimonials" style={{ position: 'relative' }} >
             <div className='text-6xl font-bold mb-20 flex justify-center items-center gap-2 '>
                <h1 className='text-[#FFA500]'>Best Rated </h1>
                <h1>Basketball Court</h1>
            </div>
        {/* <motion.h1 whileInView={{ y: 0 }} initial={{ y: 100 }} transition={{ delay: 0.2, duration: 1 }}className="md:text-5xl text-3xl poppins-bold text-center mb-8">Testimonials</motion.h1> */}
            <Slider ref={sliderRef} {...settings}>
                {testimonaldata.map((item, index) => (
                      <div className='bg-[#D9D9D9] shadow text-black rounded-md w-[] '>
                      <Image src="/basketBALL.png" alt="image" width={343} height={228} className='rounded-t-xl 2xl:w-[500px] '/>
                      <div className='m-5'>
                         
                              <Image src="/star.png" alt="image" width={112} height={20} />
                              <p className='text-[10px] mt-1 font-bold'>64 reviews</p>
  
                          
  
                          <h1 className='text-xl font-bold my-5'>{item.name}</h1>
                          <p className='w-32 text-xs font-medium mt-1'>{item.address}</p>
                          <button className='bg-[#FFA500] p-2 mb-1 mt-10  text-black font-bold text-sm w-full shadow'>View Court</button>
  
                      </div>
                  </div>
                ))}
               
            </Slider>
            <div style={{ position: 'absolute', top: '40%', transform: 'translateY(-50%)', zIndex: '1' }} className='md:w-[100%] flex justify-between w-[100%] mx-auto'>
              <div className=' slick- slick-arrow -ml-14 '>
                    <div onClick={goToPrev} className='bg-[#000000A6] text-white text-7xl md:p-[10px] flex items-center justify-center cursor-pointer md:w-14 h-14 text-center font-bold  rounded-full'>
                        <RiArrowLeftSLine/>
                    </div>
                </div>
                <div className='slick- slick-arrow'>
                {/* <div className=" md:w-16 w-10 bg-[#E8F2FF] md:h-44 h-32 md:rounded-xl rounded-lg flex flex-col justify-center md:px-4 px-2 items-center"> */}
                    <div className="bg-[#000000A6] text-white text-7xl md:p-[10px] flex items-center justify-center cursor-pointer md:w-14 h-14 text-center font-bold  rounded-full" onClick={goToNext}>
                        <MdOutlineKeyboardArrowRight />
                    </div>
                {/* </div> */}
                </div>
              
            </div>
        </div>
    );
};

export default Testimonial;


