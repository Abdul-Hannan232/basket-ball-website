"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import { FcGoogle } from "react-icons/fc";
import { SignupUser } from '../../services/authServices';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBall from "../LoadingBall"
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const Signup = () => {
    const [passwords, setPasswords] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loader, setLoader] = useState(false)
    const router = useRouter("")
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoader(true)
        const body = {
            name: name,
            email: email,
            password: password,
            confirm_password: password,
            role: "User"
        }
        try {
            const responce = await SignupUser(body)
            if (responce.status === 201) {
                 toast.success("Account created successful, please proceed to login")
                router.replace('/signin')
            } else {
                toast.error(responce.data.message)
            }
        }
        catch (error) {
            toast.error("network error")

        }

        finally {
            setLoader(false)
        }
    }
    return (
        <div className=' '>
            <ToastContainer />
            <div className='flex  justify-between md:mx-0 mx-5 items-center min-h-screen'>
                <form className=' md:w-[450px] w-full mx-auto md:space-y-4 space-y-2' onSubmit={handleSubmit}>
                    <h1 className='text-center font-bold text-3xl text-white'>
                        Signup                </h1>

                    <div className='flex flex-col'>
                        <label className='text-sm'>Name</label>
                        <input type='text' placeholder='Enter your name ' value={name} onChange={(e) => setName(e.target.value)}
                            className='mt-1 cursor-pointershadow border-[#808080] outline-none border text-white rounded-lg bg-[#808080] md:p-3 p-2' />

                        <label className='text-sm md:mt-5 mt-4'>Email</label>
                        <input type='text' placeholder='Enter your email ' value={email} onChange={(e) => setEmail(e.target.value)} className='mt-1 outline-none cursor-pointershadow border-[#808080] border text-white rounded-lg bg-[#808080] md:p-3 p-2' />
                        <label className='text-sm md:mt-5 mt-4'>Password</label>
                        <div className='relative'>
                            <input
                                type={isPasswordVisible ? 'text' : 'password'}
                                placeholder='Enter your password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='mt-1 cursor-pointer shadow border-[#808080] outline-none border text-white rounded-lg bg-[#808080] md:p-3 p-2 w-full'
                            />
                            <div
                                className='absolute inset-y-0 right-3  flex items-center cursor-pointer'
                                onClick={togglePasswordVisibility}
                            >
                                {isPasswordVisible ? <FiEye size={20} /> : <FiEyeOff size={20} />}
                            </div>
                        </div>
                    </div>
                    <div className='text-sm flex items-center justify-between '>
                        <div className='flex items-center gap-2'>
                            <input type='checkbox' className='md:w-5 md:h-5 h-4 w-4 cursor-pointer bg-[#808080]' />
                            <a href="#" className='text-xs md:text-sm' >Remember me</a>
                        </div>

                    </div>
                    {/* <Link href="/resetPassword"> */}
                    <button type="submit" className='border-[#FFA500] w-full md:text-xl text-sm mt-4 border text-white rounded-lg bg-[#FFA500] md:p-3 p-2 shadow-xl cursor-pointer'>Signup</button>
                    {/* </Link> */}
                    <div className='flex  items-center 2xl:my-5 md:my-2 my-1'>
                        <hr className='text-[#DCDCDC]  border-1 w-[259px]' />
                        <h1 className='2xl:text-[20px] md:text-[16px] text-[12px] px-5'>OR</h1>
                        <hr className='text-[#DCDCDC]  border-1 w-[259px]' />
                    </div>
                    <div className='border bg-[#333333] w-full md:text-xl text-md border text-white rounded-lg cursor-pointer md:p-3 p-2  flex items-center justify-center gap-2' onClick={() => signIn("google")} ><FcGoogle className='md:text-3xl text-xl ' />Login with Google</div>
                    <p className='flex item-center justify-center gap-2 font-medium md:text-sm text-[10px]'>Already have an account? <Link href="/signin" className='text-[#FFA500]'>Login?</Link></p>
                </form>
                <div>
                    <Image src="/signup.png" priority alt="image" width={511} height={366} className='h-screen w-auto md:block hidden' />
                </div>

            </div>
            {loader ? <LoadingBall /> : null}
            <div className='p-2 md:text-xl text-sm text-center md:hidden block flex justify-center items-center gap-1 text-black bg-[#FFA500] fixed bottom-0 w-full'>
                <p>Developed By</p>
                <a href="#" className='font-bold'>Mayonity</a>
            </div>

        </div>
    )
}

export default Signup
