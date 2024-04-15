import React from 'react'
import { FaArrowRight } from "react-icons/fa"
import Link from 'next/link'
const Footer = () => {
    return (
        <div className='shadow p-5 mt-10'>
            <div className='flex justify-between mx-20'>
                <div> 
                    <h1 className='text-4xl font-bold text-[#FFA500]'>Logo</h1>
                    <p className='font-light text-lg w-72 text-[#F8F8F8] mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.</p>
                    <div className='relative w-72 border  text-black shadow flex items-center p-3 rounded-full mt-10 '>
                        <input type='text' placeholder='Send email' className='text-black bg-[#333333]' />
                        <FaArrowRight className="absolute text-black w-11 h-11 rounded-full right-0 text-4xl border-2 p-2 font-light  bg-[#ABABAB]   top-[2px]" />
                    </div>
                </div>
                <div>
                    <ul className='space-y-3'>
                        <li className='text-[#FFA500] text-xl font-bold '> Company</li>
                        <li><Link href="#">Court</Link></li>
                        <li><Link href="#">Shop</Link></li>
                        <li><Link href="#">FAQs</Link></li>
                        <li><Link href="#">Contact Us</Link></li>
                        <li><Link href="#">Terms & Conditions</Link></li>
                        <li><Link href="#">About Us</Link></li>
                        <li><Link href="#">Privacy Policy</Link></li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-2xl text-[#FFA500]'>Become a Member</h1>
                    <p className='font-light text-lg w-72 text-[#F8F8F8] mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore

                    </p>
                    <div className='relative w-52 border mt-10 text-black shadow text-center border-[#FFA500] p-3 cursor-pointer rounded-full '>
                     <h1 className='text-[#FFA500] text-2xl text-center'> Sign Up</h1>
                    </div>
                </div>
            </div>
            <hr className='m-20'/>
            <div>
                <div></div>
            </div>
            <div >
                <p className='text-[#FFA500] text-xs'>Made by Mayonity</p>
            </div>
        </div>
    )
}

export default Footer
