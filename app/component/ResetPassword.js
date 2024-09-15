"use client"
import React from 'react'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSearchParams } from 'next/navigation';
import { ResetPasswordApi } from '../services/authServices';
import Loader from "./LoadingBall"
import { useRouter } from 'next/navigation';
import { FiEye, FiEyeOff } from 'react-icons/fi';
const ResetPassword = () => {
    const searchParams = useSearchParams();
    const user_id = searchParams.get('user_id')
    const token = searchParams.get('token')
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [loader, setLoader] = useState(false)
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
    const [isConfirmNewPasswordVisible, setIsConfirmNewPasswordVisible] = useState(false);

    const toggleNewPasswordVisibility = () => {
        setIsNewPasswordVisible(!isNewPasswordVisible);
    };

    const toggleConfirmNewPasswordVisibility = () => {
        setIsConfirmNewPasswordVisible(!isConfirmNewPasswordVisible);
    };
    const router = useRouter("")
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
                router.replace('/');
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
                        <div className='relative'>
                            <input
                                type={isNewPasswordVisible ? 'text' : 'password'}
                                placeholder='Enter new password'
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className='mt-1 cursor-pointer outline-none shadow border-[#808080] border text-white rounded-lg bg-[#808080] md:p-4 p-3 w-full'
                            />
                            <div
                                className='absolute inset-y-0 right-3 flex items-center cursor-pointer'
                                onClick={toggleNewPasswordVisibility}
                            >
                                {isNewPasswordVisible ? <FiEye size={20} /> : <FiEyeOff size={20} />}
                            </div>
                        </div>

                        <br />

                        <label className='text-sm'>Confirm Password</label>
                        <div className='relative'>
                            <input
                                type={isConfirmNewPasswordVisible ? 'text' : 'password'}
                                placeholder='Confirm new password'
                                value={confirmNewPassword}
                                onChange={(e) => setConfirmNewPassword(e.target.value)}
                                className='mt-1 cursor-pointer outline-none shadow border-[#808080] border text-white rounded-lg bg-[#808080] md:p-4 p-3 w-full'
                            />
                            <div
                                className='absolute inset-y-0 right-3 flex items-center cursor-pointer'
                                onClick={toggleConfirmNewPasswordVisibility}
                            >
                                {isConfirmNewPasswordVisible ? <FiEye size={20} /> : <FiEyeOff size={20} />}
                            </div>
                        </div>
                    </div>
                    <br />
                    {/* <Link href="/Login"> */}
                    <button type='submit' className='border-[#FFA500]  w-full md:text-xl text-lg border text-white rounded-lg bg-[#FFA500] md:p-4 p-3 shadow cursor-pointer'>Change</button>
                    {/* </Link> */}
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

export default ResetPassword
