"use client"
import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";

const Adminnavbar = () => {
    const [allUsers, setAllUsers] = useState([]);

    return (
        <div className='bg-[#FFA500] flex items-center justify-between fixed top-0 right-0 left-0 pr-5  '>
            <div className=' p-4 lg:pl-7 pl-3 flex items-center text-white'>
                <h1 className='lg:text-3xl text-lg font-bold'>Basketball</h1>
                <div className='border-2 border-y-transparent border-r-transparent lg:mx-20 mx-2 lg:pl-5 pl-2 border-white'>
                    <h1 className='lg:text-lg text-xs'> User {allUsers.length}</h1>
                </div>
            </div>
            <FiMenu className='text-black text-2xl lg:hidden block '/>
        </div>
    )
}

export default Adminnavbar
