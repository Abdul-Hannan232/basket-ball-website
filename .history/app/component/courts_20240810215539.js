"use client"
import React, { useRef } from 'react';
import Slider from 'react-slick';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import testimonaldata from '../data/testimonaldata.json';
import Image from 'next/image';
import { motion } from "framer-motion"

const Testimonial = () => {


    return (

        <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-20 w-[80%] md:mt-20 mt-5 md:mx-auto mx-5'>

            {testimonaldata.map((item, index) => (
            <div key={index} className='relative shadow text-black rounded-md 2xl:w-[300px] xl:w-[250px] md:w-[250px] w-[280px] group'>
            <div className='bg-[#D9D9D9] relative rounded-md overflow-hidden'>
              {/* Overlay */}
              <div className='absolute inset-0 bg-black opacity-0 z-20 group-hover:opacity-70 transition-opacity'></div>
              
              {/* Maintenance Button (Initially Hidden) */}
              <div className='flex flex-col items-center h-80 justify-center z-40 absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity'>
                <button className='bg-[#232323] py-2 px-4 rounded-full text-white'>
                  Maintenance
                </button>
              </div>
              
              <Image src="/basketBALL.png" alt="image" width={343} height={228} className='rounded-t-xl 2xl:w-[450px]' />
              
              <div className='flex items-center justify-center float-right -mt-5 shadow z-10 absolute right-0 p-3 w-32 gap-2 rounded-l-xl bg-white text-black'>
                <Image src={item.image} alt="shelter" width={24} height={24} />
                <p>{item.door}</p>
              </div>
          
              <div className='m-5 relative'>
                <Image src="/star.png" alt="image" width={60} height={20} />
                <p className='text-[10px] mt-1 font-bold'>64 reviews</p>
                <h1 className='text-lg font-bold mb-2'>{item.name}</h1>
                <p className='w-32 text-xs font-medium '>{item.address}</p>
                <button className='bg-[#FFA500] p-2 mb-3 mt-3 rounded-md text-black font-bold text-sm w-full shadow'>
                  View Court
                </button>
              </div>
            </div>
          </div>
          

            ))}
        </div>

    );
};

export default Testimonial;


