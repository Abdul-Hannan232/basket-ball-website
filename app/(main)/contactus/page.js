import React from 'react';
import Navbar from "../../component/navbar"
import Footer from "../../component/footer"
import Image from "next/image"
const page = () => {
    return (
        <div>
            <Navbar />
            <div className='md:my-40 my-28  md:mx-20 mx-5  rounded-2xl shadow md:p-20 md:p-8 p-3 '>
                <h1 className='2xl:text-7xl md:text-6xl text-xl font-bold text-center'>Contact Us</h1>
                <hr className='2xl:my-20 md:my-14 my-5  2xl:mx-40 md:mx-20 ' />

              <div className='flex items-center justify-between md:mx-10 md:w-[95%] md:shadow'>
              <div className='w-[35%] md:block hidden'>
                    <Image src="/contactus.png" alt="" width={459} height={96} className='w-[100%]'/>
                </div>
                <div className='flex flex-col md:w-[40%] w-full  mx-auto lg:space-y-14 space-y-5'>
                    <input placeholder='Enter your name' type='text' className='bg-[#808080] md:text-xl text-sm shadow  2xl:p-8 md:p-4 p-3 2xl:h-24 md:h-14 h-10  rounded-lg' />

                    <input placeholder='Enter your email' type='text' className='bg-[#808080] md:text-xl text-sm shadow 2xl:p-8 md:p-4 p-3 2xl:h-24  md:h-14 h-10 rounded-lg' />
                    <textarea placeholder='Message...' type='text' className='bg-[#808080] md:text-xl text-sm 2xl:p-8 md:p-4 p-3 shadow  2xl:h-72  md:h-52 h-32 rounded-lg' />
                    <button className='bg-[#FFA500] text-center text-white md:p-4  md:h-20 h-10 shadow md:text-2xl text-lg'>Submit</button>
                </div>
              </div>
            </div>
            <Footer />
        </div>
    )
}

export default page
