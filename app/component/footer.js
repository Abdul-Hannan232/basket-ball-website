import React from 'react'
import { FaArrowRight } from "react-icons/fa"
import Link from 'next/link'
const Footer = () => {
    return (
        <div>
            <div>
                <div>
                    <h1>LOGO</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.</p>
                    <div className='relative mx-10 border  text-black shadow flex items-center p-5 rounded-full '>
                        <input type='text' placeholder='Send email' className='text-black bg-[#333333]' />
                        <FaArrowRight className="absolute text-black w-12 h-12 rounded-full right-0 text-4xl border-2 p-3 bg-[#ABABAB]   top-2" />
                    </div>
                </div>
                <div>
                    <ul>
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
                    <h1>Become a Member</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 

</p>
                    <div className='relative mx-10 border  text-black shadow flex items-center p-5 rounded-full '>
                        <input type='text' placeholder='Send email' className='text-black bg-[#333333]' />
                        <FaArrowRight className="absolute text-black w-12 h-12 rounded-full right-0 text-4xl border-2 p-3 bg-[#ABABAB]   top-2" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
