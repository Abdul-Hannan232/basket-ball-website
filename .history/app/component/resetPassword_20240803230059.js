"use client"
import React from 'react'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  useSearchParams } from 'next/navigation';
import { ResetPasswordApi } from '../../';
import Loader from "../../component/loader"
const ResetPassword = () => {
    const searchParams = useSearchParams();
    const user_id = searchParams.get('user_id')
    const token = searchParams.get('token')
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [loader, setLoader] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault()
        const body = {
            user_id: user_id,
            token: token,
            password: password,
            confirm_password: confirmPassword
        }
        try {
            const responce = await ResetPasswordApi(body)
            if (responce.status === 200) {
                toast.success(responce.data.message)
            } else {
                toast.error(responce.data.message)
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
                <form className=' md:w-[450px] w-full mx-auto space-y-4' onSubmit={handleSubmit}>
                    <h1 className='text-center font-bold text-2xl text-white'>
                        Reset Password
                    </h1>
                    <div className='flex flex-col'>
                        <label className='text-sm'>New Password</label>
                        <input type='password' placeholder='Enter new Password ' value={password} onChange={((e) => setPassword(e.target.value))} className='mt-1  cursor-pointer shadow border-[#808080] border text-white rounded-lg bg-[#808080] p-4' />
                        <br /> <label className='text-sm'>Confirm Password</label>
                        <input type='password' placeholder=' Confirm new Password ' value={confirmPassword} onChange={((e) => setConfirmPassword(e.target.value))} className='mt-1 cursor-pointer shadow border-[#808080] border text-white rounded-lg bg-[#808080] p-4' />
                    </div>
                    <br />
                    {/* <Link href="/Login"> */}
                    <button type='submit' className='border-[#FFA500] w-full text-xl border text-white rounded-lg bg-[#FFA500] p-4 shadow cursor-pointer'>Login</button>
                    {/* </Link> */}
                </form>

            </div>
            {loader?<Loader/>:null}
            <div className='p-3 text-center md:hidden block flex justify-center items-center gap-1 text-black bg-[#FFA500] absolute bottom-0 w-full'>
                <p>Developed By</p><a href="#">Mayonity</a>
            </div>
        </>
    )
}

export default ResetPassword
