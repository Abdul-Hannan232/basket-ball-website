"use client"
import { RxCross2 } from "react-icons/rx";
import Link from "next/link"
import { IoCartOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { signOut, useSession } from 'next-auth/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const NavBarComponent = () => {
    const router = useRouter("");
    const { data: session, status } = useSession();
    const [open, setOpen] = useState(false)
    const [loggedInUser, setloggedInUser] = useState()
    const toOpen = () => {
        setOpen(true)
    }
    const toClose = () => {
        setOpen(false)
    }
    const handleLogout = () => {
        Cookies.remove('authToken');
        router.push("/login");
        signOut()

    };


    useEffect(() => {
        const token = session?.authToken || Cookies.get('authToken');
        if (token) {
            const decodedToken = jwtDecode(token);
            setloggedInUser(decodedToken)
        }

    }, [router, session])



    return (
        <div className='bg-[#FFA500] sticky top-0 left-0 right-0 p-4 flex z-40 items-center justify-between'>
            <ToastContainer />
            <div className='flex items-center gap-1'>
                <IoIosMenu className='text-black text-xl cursor-pointer md:hidden block' onClick={toOpen} />
                <Image src="/LOGO.png" width={60} height={60} alt='image' />
            </div>
            <div className='md:block hidden '>
                <ul className='flex  items-center   space-x-10'>
                    <li><Link className='font-medium text-lg  cursor-pointer hover:border-2 hover:border-b-black border-x-transparent border-t-transparent   text-black' href='/home'>Home </Link></li>
                    <li><Link className='font-medium text-lg cursor-pointer hover:border-2 hover:border-b-black border-x-transparent border-t-transparent text-black' href='/courts'>Court</Link></li>
                    <li><Link className='font-medium text-lg  cursor-pointer hover:border-2 hover:border-b-black border-x-transparent border-t-transparent text-black' href='#'>Shop</Link></li>
                    <li><Link className='font-medium text-lg  cursor-pointer hover:border-2 hover:border-b-black border-x-transparent border-t-transparent text-black' href='/donate'>Donate</Link></li>
                </ul>
            </div>



            {loggedInUser ? (
                <div className='flex gap-2 items-center'>

                    {/* <CgProfile className='text-2xl text-black font-medium' /> */}
                    <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 shadow-lg hover:text-blue-500 transition duration-300">
                        {loggedInUser.name}
                    </h3>
                    <button className='md:block hidden py-2 px-5 border-[#011344] bg-[#011344] border ml-4 text-sm rounded-md' onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            ) : (
                <div className='flex gap-2 items-center'>
                    {/* <CgProfile className='text-2xl text-black font-medium' /> */}
                    <Link href="/signup">
                        <button className='md:block hidden py-2 px-5 border-[#011344] bg-[#011344] border ml-4 text-sm rounded-md'>
                            Sign Up
                        </button>
                    </Link>

                    <Link href="/login">
                        <button className='md:block hidden py-2 px-6 border border-black text-black text-sm ml-1 rounded-md'>
                            Login
                        </button>
                    </Link>
                </div>
            )}


            {open && (
                <>
                    <div className='absolute top-0 bg-gray-600 w-full h-screen left-0 right-0 '>
                        <div className='flex justify-between bg-[#FFA500] items-center p-5'>
                            <h1 className=''>Logo</h1>
                            <div className='flex items-center gap-3'>
                                <IoCartOutline className=' text-2xl text-black font-light ' />
                                <RxCross2 className=' text-2xl text-black font-light cursor-pointer ' onClick={toClose} />
                            </div>
                        </div>
                        <ul className='space-y-3 text-sm mt-10 p-3 font-bold'>
                            <li><Link href="/home" className='focus:text-[#FFA500]'>Home</Link></li>
                            <li><Link href="/courts" className='focus:text-[#FFA500]'>Court</Link></li>
                            <li><Link href="/" className='focus:text-[#FFA500]'>Shop</Link></li>
                            <li><Link href="/donate" className='focus:text-[#FFA500]'>Donate</Link></li>
                            <li><Link href="/" className='focus:text-[#FFA500]'>Login | Signup</Link></li>
                        </ul>
                    </div>
                </>
            )}
        </div>

    )
}

export default NavBarComponent