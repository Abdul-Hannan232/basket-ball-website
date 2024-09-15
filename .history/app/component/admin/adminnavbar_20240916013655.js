"use client"
import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
const Adminnavbar = () => {
    const [allUsers, setAllUsers] = useState([]);
    const [activeLink, setActiveLink] = useState('');
    const [dropDown, setDropDown] = useState(false)

    const dropdownOpen = () => {
        setDropDown(!dropDown)
    }
    const handleClick = (link) => {
        setActiveLink(link);
    };

    return (
        <>
            <div className=' z-40 bg-[#FFA500] flex items-center justify-between fixed top-0 right-0 left-0 pr-5  '>
                <div className=' p-4 lg:pl-7 pl-3 flex items-center text-white'>
                    <h1 className='lg:text-3xl text-lg font-bold'>Basketball</h1>
                    <div className='border-2 border-y-transparent border-r-transparent lg:mx-20 mx-2 lg:pl-5 pl-2 border-white'>
                        <h1 className='lg:text-lg text-xs'> User {allUsers.length}</h1>
                    </div>
                </div>
                <FiMenu className='text-black text-2xl lg:hidden block cursor-pointer ' onClick={dropdownOpen} />
            </div>
            {/* drop down */}
            {dropDown && (
                    <div className='bg-[#FFA500] mt-14 pb-10 absolute w-full z-40   '>
                        <div className='text-black text-sm font-semibold'>

                            <div className="h1-hover-effect">
                                <h1
                                    className={` p-3 flex items-center gap-1 ${activeLink === 'todo' ? 'border-4 border-l-black border-y-transparent border-r-transparent hover-design' : ''}`}
                                >
                                    <Image src="/todo.png" alt="todo" width="20" height="20" />
                                    <a href="#" onClick={() => handleClick('todo')}>To-Do</a>
                                </h1>
                            </div>

                            <div className="h1-hover-effect">
                                <h1
                                    className={` p-3 flex items-center gap-1 ${activeLink === 'users' ? 'border-4 border-l-black border-y-transparent border-r-transparent hover-design' : ''}`}
                                >
                                    <Image src="/profile.png" alt="users" width="20" height="20" />
                                    <a href='/admin/users' onClick={() => handleClick('users')}>Users</a>
                                </h1>
                            </div>

                            <div className="h1-hover-effect">
                                <h1
                                    className={` p-3 flex items-center gap-1 ${activeLink === 'courts' ? 'border-4 border-l-black border-y-transparent border-r-transparent hover-design' : ''}`}
                                >
                                    <Image src="/home.png" alt="courts" width="20" height="20" />
                                    <a href='/admin/courts' >Courts</a>
                                </h1>
                            </div>

                            <div className="h1-hover-effect">
                                <h1
                                    className={` p-3 flex items-center gap-1 ${activeLink === 'reviews' ? 'border-4 border-l-black border-y-transparent border-r-transparent hover-design' : ''}`}
                                >
                                    <Image src="/stars (1).png" alt="reviews" width="20" height="20" />
                                    <a href="#" onClick={() => handleClick('reviews')}>Reviews</a>
                                </h1>
                            </div>

                            <div className="h1-hover-effect">
                                <h1
                                    className={` p-3 flex items-center gap-1 ${activeLink === 'checkins' ? 'border-4 border-l-black border-y-transparent border-r-transparent hover-design' : ''}`}
                                >
                                    <Image src="/location-tick.png" alt="check-ins" width="20" height="20" />
                                    <a href="#" onClick={() => handleClick('checkins')}>Check-ins</a>
                                </h1>
                            </div>

                            <div className="h1-hover-effect">
                                <h1
                                    className={` p-3 flex items-center gap-1 ${activeLink === 'reports' ? 'border-4 border-l-black border-y-transparent border-r-transparent hover-design' : ''}`}
                                >
                                    <Image src="/book.png" alt="reports" width="20" height="20" />
                                    <a href="#" onClick={() => handleClick('reports')}>Reports</a>
                                </h1>
                            </div>

                            <div className="h1-hover-effect">
                                <h1
                                    className={` p-3 flex items-center gap-1 ${activeLink === 'catalog' ? 'border-4 border-l-black border-y-transparent border-r-transparent hover-design' : ''}`}
                                >
                                    <Image src="/bubble.png" alt="catalog" width="20" height="20" />
                                    <a href="#" onClick={() => handleClick('catalog')}>Catalog</a>
                                </h1>
                            </div>

                            <div className="h1-hover-effect">
                                <h1
                                    className={` p-3 flex items-center gap-1 ${activeLink === 'orders' ? 'border-4 border-l-black border-y-transparent border-r-transparent hover-design' : ''}`}
                                >
                                    <Image src="/shopping-cart.png" alt="orders" width="20" height="20" />
                                    <a href="#" onClick={() => handleClick('orders')}>Orders</a>
                                </h1>
                            </div>
                        </div>
                </div>
            )}

        </>
    )
}

export default Adminnavbar
