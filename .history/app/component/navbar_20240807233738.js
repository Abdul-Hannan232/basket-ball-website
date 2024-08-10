"use client"
import React from 'react'
import { CgProfile } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link"
import { IoCartOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { useState } from 'react';
const Navbar = () => {
    const [open, setOpen] = useState(false)
    const toOpen = () => {
        setOpen(true)
    }
    const toClose = () => {
        setOpen(false)
    }
    return (
        <div className='bg-[#FFA500] fixed top-0 left-0 right-0 p-4 flex z-40 items-center justify-between'>
            <div className='flex items-center gap-1'>
                <IoIosMenu className='text-black text-xl cursor-pointer md:hidden block' onClick={toOpen}/>
              <IMG SRC>
            </div>
            <div className='md:block hidden  '>
                <ul className='flex  items-center   space-x-10'>
                    <li><a className='font-medium text-lg  cursor-pointer hover:border-2 hover:border-b-black border-x-transparent border-t-transparent   text-black' href='/home'>Home </a></li>
                    <li><a className='font-medium text-lg cursor-pointer hover:border-2 hover:border-b-black border-x-transparent border-t-transparent text-black' href='#'>Court</a></li>
                    <li><a className='font-medium text-lg  cursor-pointer hover:border-2 hover:border-b-black border-x-transparent border-t-transparent text-black' href='#'>Shop</a></li>
                    <li><a className='font-medium text-lg  cursor-pointer hover:border-2 hover:border-b-black border-x-transparent border-t-transparent text-black' href='#'>Donate</a></li>
                </ul>
            </div>
            <div className='flex gap-2   items-center'>

                <IoCartOutline className=' text-3xl text-black font-medium ' />
                {/* <CgProfile className=' text-2xl text-black font-medium ' /> */}
                <button className='md:block hidden  py-2 px-5 border-[#011344] bg-[#011344] border ml-4 text-sm  rounded-md'>Sign Up</button>
                <button className='md:block hidden  py-2 px-6 border border-black text-black text-sm  ml-1 rounded-md'>Login</button>
            </div>
            {open && (
                <>
                    <div className='absolute top-0 bg-gray-600 w-full h-screen left-0 right-0 '>
                        <div className='flex justify-between bg-[#FFA500] items-center p-5'>
                            <h1 className=''>Logo</h1>
                            <div className='flex items-center gap-3'>
                                <IoCartOutline className=' text-2xl text-black font-light ' />
                                <RxCross2 className=' text-2xl text-black font-light cursor-pointer ' onClick={toClose}/>
                            </div>
                        </div>
                        <ul className='space-y-3 text-sm mt-10 p-3 font-bold'>
                            <li><Link href="/" className='focus:text-[#FFA500]'>Home</Link></li>
                            <li><Link href="/" className='focus:text-[#FFA500]'>Court</Link></li>
                            <li><Link href="/" className='focus:text-[#FFA500]'>Shop</Link></li>
                            <li><Link href="/" className='focus:text-[#FFA500]'>Donate</Link></li>
                            <li><Link href="/" className='focus:text-[#FFA500]'>Login/Signup</Link></li>


                        </ul>
                    </div>
                </>
            )}
        </div>
    )
}

export default Navbar
