"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FcGoogle } from "react-icons/fc";
import { loginUser, validateToken } from "../../services/authServices"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "../LoadingBall"
import { useRouter } from 'next/navigation';
import roleBased from "../../utils/roleBased"
import Cookies from 'js-cookie';
import { signIn, useSession } from 'next-auth/react';
import { FiEye, FiEyeOff } from 'react-icons/fi'; // These are icons from react-icons package, you can use any icon library


const Login = () => {
    const router = useRouter("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loader, setLoader] = useState(false)
    const [rememberMe, setRememberMe] = useState(false);
    const { data: session, status } = useSession();
    let token = session?.authToken || Cookies.get('authToken')
    const [passwords, setPasswords] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // login functionality
    // useEffect(() => {
    //     if (!token) {
    //         toast.warn("Login to Proceed")
    //     }
    // }, [])
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoader(true);

        const body = { email, password };
        try {
            const response = await loginUser(body);
            if (response.status === 200) {
                const token = response.data.data.token;
                const options = { secure: true, sameSite: 'strict' };
                if (rememberMe) {
                    options.expires = 7; // Set for 7 days if "Remember Me" is checked
                }
                Cookies.set('authToken', token, options);
                toast.success("Login Successfully")
                roleBased(token, router);
            } else {
                toast.error("Email/Password is incorrect");
                // toast.error(response.data.message);
            }
        } catch (error) {
            toast.error("Network Error");
        } finally {
            setLoader(false);
        }
    };

    return (
        <div className=' min-h-screen overflow-hiden'>
            <ToastContainer />
            <title>HoopSquad - Login </title>
            <div className='flex  justify-between md:mx-0 mx-5 items-center h-screen'>
                <form className=' md:w-[450px] w-full mx-auto space-y-4' onSubmit={handleSubmit}>
                    <h1 className='text-center font-bold text-3xl text-white'>
                        Login
                    </h1>
                    <div className='flex flex-col'>
                        <label className='text-sm'>Email</label>
                        <input type='text' placeholder='Enter your email ' value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='mt-1  cursor-pointer shadow-xl outline-none border-[#808080] border text-white rounded-lg bg-[#808080] md:p-4 p-2' />
                        <label className='text-sm md:mt-5 mt-3'>Password</label>
                        <div className='relative'>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder='Enter your password'
                                required
                                onChange={(e) => setPasswords(e.target.value)}
                                value={passwords}
                                className='mt-1 cursor-pointer shadow-xl outline-none border-[#808080] border text-white rounded-lg bg-[#808080] md:p-4 p-2 w-full'
                            />
                            <div
                                className='absolute inset-y-0 right-3 flex items-center cursor-pointer'
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <FiEye size={20} /> : <FiEyeOff size={20} />}
                            </div>
                        </div>                    </div>
                    <div className='text-sm flex items-center justify-between '>
                        <div className='flex items-center gap-2'>
                            <input type='checkbox' className='md:w-5 md:h-5 w-4 h-4 cursor-pointer bg-[#808080]' checked={rememberMe}
                                onChange={() => setRememberMe(!rememberMe)} />
                            <a href="#" className='text-xs md:text-sm' >Remember me</a>
                        </div>

                        <Link href="/forget-password" className='text-[#FFA500] text-xs md:text-sm underline undeline-offset-2'>Forgot Password?</Link>
                    </div>
                    <button type='submit' className='border-[#FFA500] w-full md:text-xl text-md border text-white rounded-lg bg-[#FFA500] md:p-4 p-2 shadow-xl cursor-pointer'>Login</button>
                    <Link href="/signup">
                        <button className='border bg-[#333333] w-full md:text-xl text-md border shadow-xl text-white rounded-lg mt-4 md:p-4 p-2 cursor-pointer'>Sign Up</button>
                    </Link>
                    <div className='flex  items-center 2xl:my-5 md:my-2 my-1'>
                        <hr className='text-[#DCDCDC]  border-1 w-[259px]' />
                        <h1 className='2xl:text-[20px] md:text-[16px] text-[12px] px-5'>OR</h1>
                        <hr className='text-[#DCDCDC]  border-1 w-[259px]' />
                    </div>
                    <div className='border bg-[#333333] w-full md:text-xl text-md border text-white rounded-lg cursor-pointer md:p-4 p-2  flex items-center justify-center shadow-xl gap-2' onClick={() => signIn("google")}><FcGoogle className='md:text-3xl text-lg ' />Login with Google</div>

                </form>
                <div>
                    <Image src="/loginImage.png" priority alt="image" width={511} height={366} className='h-screen w-auto lg:block hidden' />
                </div>
            </div>
            {loader ? <Loader /> : null}
            <div className='p-2 md:text-xl text-sm text-center md:hidden block flex justify-center items-center gap-1 text-black bg-[#FFA500] fixed bottom-0 w-full'>
                <p>Developed By</p>
                <a href="#" className='font-bold'>Mayonity</a>
            </div>
        </div>
    )
}

export default Login