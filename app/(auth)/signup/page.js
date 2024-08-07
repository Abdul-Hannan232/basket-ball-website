"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { FcGoogle } from "react-icons/fc";
import { SignupUser } from '../../services/authServices';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "../../component/loader"
import { useRouter } from 'next/navigation';
const Signup = () => {
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
                toast.success(responce.data.message)
                router.push('/home')
            } else {
                toast.error(responce.data.message)
                // console.log(responce.data.message, "status")
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
        <>
            <ToastContainer />
            <div className='flex  justify-between md:mx-0 mx-5 items-center min-h-screen'>
                <form className=' md:w-[450px] w-full mx-auto space-y-4' onSubmit={handleSubmit}>
                    <h1 className='text-center font-bold text-2xl text-white'>
                        Signup                </h1>

                    <div className='flex flex-col'>
                        <label className='text-sm'>Name</label>
                        <input type='text' placeholder='Enter your Name ' value={name} onChange={(e) => setName(e.target.value)}
                            className='mt-1 cursor-pointershadow border-[#808080] border text-white rounded-lg bg-[#808080] p-3' />
                        <br />
                        <label className='text-sm'>Email</label>
                        <input type='text' placeholder='Enter your email ' value={email} onChange={(e) => setEmail(e.target.value)} className='mt-1  cursor-pointershadow border-[#808080] border text-white rounded-lg bg-[#808080] p-3' />
                        <br /> <label className='text-sm'>Password</label>
                        <input type='password' placeholder='Enter your Password ' value={password} onChange={(e) => setPassword(e.target.value)}
                            className='mt-1 cursor-pointershadow border-[#808080] border text-white rounded-lg bg-[#808080] p-3' />
                    </div>
                    <div className='text-sm flex items-center justify-between '>
                        <div className='flex items-center gap-2'>
                            <input type='checkbox' className='w-7 h-7 cursor-pointer bg-[#808080]' />
                            <a href="#" >Remember me</a>
                        </div>

                    </div>
                    {/* <Link href="/resetPassword"> */}
                    <button type="submit" className='border-[#FFA500] w-full text-xl mt-4 border text-white rounded-lg bg-[#FFA500] p-3 shadow cursor-pointer'>Signup</button>
                    {/* </Link> */}
                    <div className='flex  items-center 2xl:my-5 my-2'>
                        <hr className='text-[#DCDCDC]  border-1 w-[259px]' />
                        <h1 className='2xl:text-[20px] text-[16px] px-5'>OR</h1>
                        <hr className='text-[#DCDCDC]  border-1 w-[259px]' />
                    </div>
                    <div className='border bg-[#333333] w-full md:text-xl text-md border text-white rounded-lg cursor-pointer p-3  flex items-center justify-center gap-2'><FcGoogle className='md:text-3xl text-xl ' />Login with Google</div>
                    <p className='flex item-center justify-center gap-2 font-medium text-sm'>Already have an account? <a href="/Login" className='text-[#FFA500]'>Login?</a></p>
                </form>
                <div>
                    <Image src="/signup.png" priority alt="image" width={511} height={366} className='h-screen w-auto md:block hidden' />
                </div>

            </div>
            {loader ? <Loader /> : null}
            <div className='p-3 text-center md:hidden block flex justify-center items-center gap-1 text-black bg-[#FFA500] absolute bottom-0 w-full'>
                <p>Developed By</p><a href="#">Mayonity</a>
            </div>
        </>
    )
}

export default Signup
