import React from 'react'
import { FaArrowRight } from "react-icons/fa"
import Link from 'next/link'
import Image from "next/image"
const Footer = () => {
    return (
        <div className='shadow md:p-10 mt-10'>
            <div className='md:flex p-5 flex-wrap xl:justify-between 2xl:justify-evenly  md:mx-20'>
                <div>
                <Image src="/LOGO.png" width={60} height={60} alt='image'/>
                <p className='font-light 2xl:text-lg md:text-sm text-xs md:w-72 text-[#F8F8F8] mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.</p>
                    <div className='relative w-72 border  md:block hidden text-black shadow flex items-center p-3 rounded-full 2xl:mt-10 mt-7 '>
                        <input type='text' placeholder='Send email' className='text-black bg-[#333333]' />
                        <FaArrowRight className="absolute text-black w-11 h-11 rounded-full right-0 text-4xl border-2 2xl:p-2 p-3 font-light  bg-[#ABABAB]   top-[2px]" />
                    </div>
                </div>
                <hr className='my-10 block md:hidden' />
                <div className='flex flex-rap justify-between md:gap-40 md:mt-0 mt-10 gap-8'>
                    <div>
                        <ul className='2xl:space-y-3 md:space-y-2 md:w-44 w-28 '>
                            <li className='text-[#FFA500] 2xl:text-xl md:text-lg text-sm font-bold '> Company</li>
                            <li><Link href="#" className='md:!text-sm text-xs'>Court</Link></li>
                            <li><Link href="#" className='md:!text-sm text-xs'>Shop</Link></li>
                            <li><Link href="#" className='md:!text-sm text-xs'>FAQs</Link></li>
                            <li><Link href="#" className='md:!text-sm text-xs'>Contact Us</Link></li>

                            <li><Link href="#" className='md:!text-sm text-xs'>About Us</Link></li>
                            <li><Link href="#" className='md:!text-sm text-xs'>Privacy Policy</Link></li>
                            <li><Link href="#" className='md:!text-sm text-xs'>Terms & Conditions</Link></li>
                        </ul>

                    </div>
                    <div>
                        <h1 className='md:text-2xl text-sm text-[#FFA500]'>Become a Member</h1>
                        <p className='font-light 2xl:text-lg md:text-sm text-xs md:w-72 text-[#F8F8F8] mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore

                        </p>
                        <div className='relative 2xl:w-52 md:w-40 w-28 border md:mt-10 mt-5 text-black shadow text-center border-[#FFA500] 2xl:p-3 p-2 cursor-pointer rounded-full '>
                            <h1 className='text-[#FFA500] 2xl:text-2xl md:text-lg text-xs  text-center'> Sign Up</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative w-44 m-5  border  block md:hidden text-black shadow flex items-center p-[10px] rounded-full 2xl:mt-10 mt-7 '>
                <input type='text' placeholder='Send email' className='text-black  text-xs bg-[#333333]' />
                <FaArrowRight className="absolute text-black w-8 h-8 rounded-full right-0 text-4xl border-2  p-2 font-light  bg-[#ABABAB]   top-[2px]" />
            </div>
            <hr className='md:m-10  my-5' />
            <div className='flex p-5  justify-between items-center md:mx-20'>
                <div className='flex 2xl:gap-5 gap-3 items-center md:mx-0 mx-auto md:w-80'>
                    <Image src="/insta.png" alt="insta" width={56} height={56} className='md:w-10 w-8 md:h-10 h-8' />
                    <Image src="/twitter.png" alt="insta" width={56} height={56} className='md:w-10 w-8 md:h-10 h-8' />
                    <Image src="/facebook.png" alt="insta" width={56} height={56} className='md:w-10 w-8 md:h-10 h-8' />
                </div>
                <div >
                    <p className='text-[#FFA500] md:block hidden text-sm'>Made by Mayonity</p>
                </div>

            </div>
            <div>
                <p className='bg-[#FFA500] md:hidden block text-sm text-center p-3 font-bold w-full text-black'>Made by Mayonity</p>

            </div>
        </div>
    )
}

export default Footer
