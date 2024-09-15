"use client"
import { RxCross2 } from "react-icons/rx";
import Link from "next/link"
import { IoCartOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie';
import { signOut } from 'next-auth/react';
import { useAuthToken } from '../customHook/useAuthToken';
const NavBarComponent = () => {
    const { token, decodedToken } = useAuthToken();
    const router = useRouter("");
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
        router.push("/");
        signOut()
    };


    useEffect(() => {
        if (token) {
            console.log("decode", decodedToken)
            setloggedInUser(decodedToken)
        }

    }, [router, token])



    return (
        <div className='bg-[#FFA500] sticky top-0 left-0 right-0 p-4 flex z-40 items-center justify-between'>
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
                    <Image src="/Vector.png" alt="image" width={30} height={30} />
                    <Link href="/user-profile">

                    <Image
                        src={loggedInUser.image ? loggedInUser.image : '/user_placeholder.jpeg'} // Make sure this URL is correct
                        alt="user profile"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    </Link>
                    <Link href="/user-profile">
                        <h3 className="text-xl font-bold text-gray-800 ">
                            {loggedInUser.name}
                        </h3>
                    </Link>

                    {/* <button className='md:block hidden py-2 px-5 border-[#011344] bg-[#011344] border ml-4 text-sm rounded-md' onClick={handleLogout}>
                        Logout
                    </button> */}
                </div>
            ) : (
                <div className='flex gap-2 items-center'>
                    <Image src="/Vector.png" alt="image" width={30} height={30} />
                    <Link href="/signup">
                        <button className='md:block hidden py-2 px-5 border-[#011344] bg-[#011344] border ml-4 text-sm rounded-md'>
                            Sign Up
                        </button>
                    </Link>

                    <Link href="/signin">
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
                            <li><Link href="/home" className='focus:text-[#FFA500]' onClick={toClose}>Home</Link></li>
                            <li><Link href="/courts" className='focus:text-[#FFA500]' onClick={toClose}>Court</Link></li>
                            <li><Link href="/" className='focus:text-[#FFA500]' onClick={toClose}>Shop</Link></li>
                            <li><Link href="/donate" className='focus:text-[#FFA500]' onClick={toClose}>Donate</Link></li>
                            {loggedInUser ? (
                                <>
                                    <li onClick={handleLogout}><Link href="/signup" className='focus:text-[#FFA500]' onClick={toClose}>Logout</Link></li>
                                </>
                            ) : (
                                <>
                                    <li><Link href="/signin" className='focus:text-[#FFA500]' onClick={toClose}>Login</Link></li>
                                    <li><Link href="/signup" className='focus:text-[#FFA500]' onClick={toClose}>Signup</Link></li>
                                </>
                            )}
                        </ul>
                    </div>
                </>
            )}

        </div>

    )
}

export default NavBarComponent
