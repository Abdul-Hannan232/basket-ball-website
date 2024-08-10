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
    slidesToShow:3.5,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024, // Adjust the breakpoint as needed
          settings: {
            slidesToShow: 3,
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
const Testimonial = () => {
    const sliderRef = useRef(null);

    const goToPrev = () => {
        sliderRef.current.slickPrev();
    };

    const goToNext = () => {
        sliderRef.current.slickNext();
    };

    return (
        <div className="  2xl:ml-32 md:ml-20 md:pt-10 pt-10 2xl:mb-40 md:mb-20" id="Testimonials" style={{ position: 'relative' }} >
            <div className='2xl:text-6xl md:text-4xl text-xl font-bold md:mb-20 mb-10 flex justify-center items-center gap-2 '>
                <h1 className='text-[#FFA500]'>Best Rated </h1>
                <h1>Basketball Court</h1>
            </div>
            <Slider ref={sliderRef} {...settings}>
                {testimonaldata.map((item, index) => (
                  <div key={index}className=''> 
                   <div className='bg-[#D9D9D9] relative shadow text-black rounded-md 2xl:w-[450px] md:w-[330px] w-[250px]'>
                        <Image src="/basketBALL.png" alt="image" width={343} height={228} className='rounded-t-xl 2xl:w-[450px] ' />
                       <div className='flex items-center justify-center float-right -mt-5 shadow z-10 absolute right-0 p-3 w-32 gap-2 rounded-l-xl bg-white text-black' >
                        <Image src={item.image} alt="shelter" width={24} height={24}/>
                       <p>{item.door}</p></div>
                        <div className='m-5'>

                            <Image src="/star.png" alt="image" width={112} height={20} />
                            <p className='text-[10px] mt-1 font-bold'>64 reviews</p>
                            <h1 className='text-xl font-bold mb-5'>{item.name}</h1>
                            <p className='w-32 text-xs font-medium mt-1'>{item.address}</p>
                            <button className='bg-[#FFA500] p-2 mb-5 mt-10  text-black font-bold text-sm w-full shadow'>View Court</button>

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
    );
};

export default Testimonial;


