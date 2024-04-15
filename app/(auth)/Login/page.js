"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FcGoogle } from "react-icons/fc";
import { loginUser } from "../../services/authServices"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "../../component/loader"
import { useRouter } from 'next/navigation';
const Login = () => {
    const router = useRouter("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loader, setLoader] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoader(true)
        const body = {
            email: email,
            password: password
        }
        try {
            const responce = await loginUser(body)
            if (responce.status === 200) {
                toast.success(responce.data.message)
                router.push('/home')
            } else {
                toast.error(responce.data.message)
            }
            // console.log("from try of contoller")

        }
        catch (error) {
            console.log(error, "error")
        // toast.error("Network Error")
        } finally {
            setLoader(false)
        }
        

    }
    return (
        <>
            <ToastContainer />
            <div className='flex  justify-between md:mx-0 mx-5 items-center min-h-screen'>
                <form className=' md:w-[450px] w-full mx-auto space-y-4' onSubmit={handleSubmit}>
                    <h1 className='text-center font-bold text-2xl text-white'>
                        Login
                    </h1>
                    <div className='flex flex-col'>
                        <label className='text-sm'>Email</label>
                        <input type='text' placeholder='Enter your email ' value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='mt-1  cursor-pointer shadow border-[#808080] border text-white rounded-lg bg-[#808080] p-4' />
                        <br /> <label className='text-sm'>Password</label>
                        <input type='password' placeholder='Enter your Password ' required onChange={(e) => setPassword(e.target.value)} value={password} className='mt-1 cursor-pointer shadow border-[#808080] border text-white rounded-lg bg-[#808080] p-4' />
                    </div>
                    <div className='text-sm flex items-center justify-between '>
                        <div className='flex items-center gap-2'>
                            <input type='checkbox' className='w-7 h-7 cursor-pointer bg-[#808080]' />
                            <a href="#" >Remember me</a>
                        </div>

                        <Link href="/forgetPassword" className='text-[#FFA500] underline undeline-offset-2'>forgot password?</Link>
                    </div>
                    <button type='submit' className='border-[#FFA500] w-full text-xl border text-white rounded-lg bg-[#FFA500] p-4 shadow cursor-pointer'>Login</button>
                    <Link href="/signup">
                        <button className='border bg-[#333333] w-full text-xl border text-white rounded-lg mt-4 p-4 cursor-pointer'>Sign Up</button>
                    </Link>

                    <div className='flex  items-center 2xl:my-5 my-2'>
                        <hr className='text-[#DCDCDC]  border-1 w-[259px]' />
                        <h1 className='2xl:text-[20px] text-[16px] px-5'>OR</h1>
                        <hr className='text-[#DCDCDC]  border-1 w-[259px]' />
                    </div>
                    <div className='border bg-[#333333] w-full text-xl border text-white rounded-lg cursor-pointer p-4  flex items-center justify-center gap-2'><FcGoogle className='text-3xl ' />Login with Google</div>

                </form>
                <div>
                    <Image src="/loginImage.png" priority alt="image" width={511} height={366} className='h-screen w-auto md:block hidden' />
                </div>
            </div>
            {loader ? <Loader /> : null}
            <div className='p-3 text-center md:hidden block flex justify-center items-center gap-1 text-black bg-[#FFA500] absolute bottom-0 w-full'>
                <p>Developed By</p><a href="#">Mayonity</a>
            </div>
        </>
    )
}

export default Login
