"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react'
import React from 'react'
import { ForgetPasswordUser } from '../../services/authServices'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "../LoadingBall"

const ForgetPass = () => {
    const router = useRouter();
    const [email, setEmail] = useState(" ")
    const [loader, setLoader] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoader(true)
        const body = {
            email: email
        }
        try {
            const responce = await ForgetPasswordUser(body)
            if (responce.status === 200) {
                toast.success(responce.data.message)
                router.push("/signin")
            } else {
                // toast.error(responce.data.message)
                toast.error("Email/Password is incorrect");
                // router.push('/second-page');
            }
        }
        catch (error) {
            toast.error("network error")
        } finally {
            setLoader(false)
        }
    }
    return (
        <>
        <ToastContainer />
        <div className='flex  justify-between md:mx-0 mx-5 items-center min-h-screen'>
            <form className=' md:w-[550px] w-full mx-auto space-y-4' onSubmit={handleSubmit}>
                <h1 className='text-center font-bold md:text-4xl text-2xl text-white'>
                    Forgot Password
                </h1>
                <p className='text-center md:text-[18px] text-[10px] font-[400px]'>Enter an email address to receive the recovery email. </p>
                <div className='flex flex-col md:w-[400px] mx-auto'>
                    <input type='email' placeholder='Enter new email ' value={email} onChange={((e) => setEmail(e.target.value))} className='mt-1  cursor-pointer shadow border-[#808080] border text-white rounded-lg bg-[#808080] md:p-4 p-3' />
                    <br />
                    {/* <Link href="/resetPassword"> */}
                    <button type='submit' className='border-[#FFA500] w-full md:text-xl text-sm border text-white rounded-lg bg-[#FFA500] md:p-4 p-3 shadow cursor-pointer'>Reset Password</button>
                    {/* </Link> */}
                </div>

            </form>

        </div>
        {loader ? <Loader /> : null}
        <div className='p-2 md:text-xl text-sm text-center md:hidden block flex justify-center items-center gap-1 text-black bg-[#FFA500] fixed bottom-0 w-full'>
    <p>Developed By</p>
    <a href="#" className='font-bold'>Mayonity</a>
</div>

    </>
    )
}

export default ForgetPass
