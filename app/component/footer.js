import React from 'react'
import { FaArrowRight } from "react-icons/fa"
import Link from 'next/link'
import Image from "next/image"
const Footer = () => {
    return (
        <div className='shadow p-10 mt-10'>
            <div className='flex justify-between mx-20'>
                <div> 
                    <h1 className='2xl:text-4xl text-3xl font-bold text-[#FFA500]'>Logo</h1>
                    <p className='font-light 2xl:text-lg text-sm w-72 text-[#F8F8F8] mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.</p>
                    <div className='relative w-72 border  text-black shadow flex items-center p-3 rounded-full 2xl:mt-10 mt-7 '>
                        <input type='text' placeholder='Send email' className='text-black bg-[#333333]' />
                        <FaArrowRight className="absolute text-black w-11 h-11 rounded-full right-0 text-4xl border-2 2xl:p-2 p-3 font-light  bg-[#ABABAB]   top-[2px]" />
                    </div>
                </div>
                <div>
                    <ul className='2xl:space-y-3 space-y-2'>
                        <li className='text-[#FFA500] 2xl:text-xl text-lg font-bold '> Company</li>
                        <li><Link href="#" className='!text-sm'>Court</Link></li>
                        <li><Link href="#" className='!text-sm'>Shop</Link></li>
                        <li><Link href="#" className='!text-sm'>FAQs</Link></li>
                        <li><Link href="#" className='!text-sm'>Contact Us</Link></li>
                        <li><Link href="#" className='!text-sm'>Terms & Conditions</Link></li>
                        <li><Link href="#" className='!text-sm'>About Us</Link></li>
                        <li><Link href="#" className='!text-sm'>Privacy Policy</Link></li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-2xl text-[#FFA500]'>Become a Member</h1>
                    <p className='font-light 2xl:text-lg text-sm w-72 text-[#F8F8F8] mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore

                    </p>
                    <div className='relative 2xl:w-52 w-40 border mt-10 text-black shadow text-center border-[#FFA500] 2xl:p-3 p-2 cursor-pointer rounded-full '>
                     <h1 className='text-[#FFA500] 2xl:text-2xl text-lg text-center'> Sign Up</h1>
                    </div>
                </div>
            </div>
            <hr className='m-20'/>
            <div className='flex justify-between items-center mx-20'>
            <div className='flex 2xl:gap-5 gap-3 items-center w-80'>
              <Image src="/insta.png" alt="insta" width={56} height={56} className='w-10 h-10'/>
              <Image src="/twitter.png" alt="insta" width={56} height={56} className='w-10 h-10'/>
              <Image src="/facebook.png" alt="insta" width={56} height={56} className='w-10 h-10'/>
            </div>
            <div >
                <p className='text-[#FFA500] text-xs'>Made by Mayonity</p>
            </div>
            </div>
        </div>
    )
}

export default Footer
