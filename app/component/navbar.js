import React from 'react'
import { IoCartOutline } from "react-icons/io5";
const Navbar = () => {
    return (
        <div className='bg-[#FFA500] fixed top-0 left-0 right-0 p-4 flex  items-center justify-between'>
            <div className=''>
                <h1 className=''>Logo</h1>
            </div>
            <div className='md:block hidden  '>
                <ul className='flex  items-center   space-x-10'>
                    <li><a className='font-medium text-lg  cursor-pointer   text-black' href='#'>Home </a></li>
                    <li><a className='font-medium text-lg cursor-pointer  text-black' href='#'>Court</a></li>
                    <li><a className='font-medium text-lg  cursor-pointer  text-black' href='#'>Shop</a></li>
                    <li><a className='font-medium text-lg  cursor-pointer text-black' href='#'>Donate</a></li>
                </ul>
            </div>
            <div className='flex   items-center'>
                <IoCartOutline className=' text-3xl text-black font-medium ' />
                <button className='md:block hidden  py-2 px-5 border-[#011344] bg-[#011344] border ml-4 text-sm  rounded-md'>Sign Up</button>
                <button className='md:block hidden  py-2 px-6 border border-black text-black text-sm  ml-1 rounded-md'>Login</button>
            </div>
        </div>
    )
}

export default Navbar
