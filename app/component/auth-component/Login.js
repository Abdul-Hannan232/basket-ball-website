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
const Login = () => {
    const router = useRouter("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loader, setLoader] = useState(false)
    const [rememberMe, setRememberMe] = useState(false);
    useEffect(() => {
        const token = Cookies.get('authToken')
        if (!token) {
            toast.warn("Please log in to proceed.");
            return;
        }

        const verifyToken = async () => {
            setLoader(true)
            try {
                const response = await validateToken();
                if (response.status === 200) {
                    toast.success("Redirecting . . .");
                    roleBased(token, router)
                } else {
                    Cookies.remove('authToken');
                }
            } catch (error) {
                Cookies.remove('authToken');
            } finally{
                setLoader(false)
            }
        };

        verifyToken();
    }, [router]);



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
                toast.success(response.data.message);
                roleBased(token, router);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error("Network Error");
        } finally {
            setLoader(false);
        }
    };

    return (
        <>
            <ToastContainer />
            <title>HoopSquad - Login </title>
            <div className='flex   justify-between md:mx-0 mx-5 items-center min-h-screen'>
                <form className=' md:w-[450px] w-full mx-auto space-y-4' onSubmit={handleSubmit}>
                    <h1 className='text-center font-bold text-2xl text-white'>
                        Login
                    </h1>
                    <div className='flex flex-col'>
                        <label className='text-sm'>Email</label>
                        <input type='text' placeholder='Enter your email ' value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='mt-1 outline-none cursor-pointer shadow border-[#808080] border text-white rounded-lg bg-[#808080] md:p-4 p-3' />
                        <br /> <label className='text-sm'>Password</label>
                        <input type='password' placeholder='Enter your Password ' required onChange={(e) => setPassword(e.target.value)} value={password} className='mt-1 cursor-pointer outline-none shadow border-[#808080] border text-white rounded-lg bg-[#808080] md:p-4 p-3' />
                    </div>
                    <div className='text-sm flex items-center justify-between '>
                        <div className='flex items-center gap-2'>
                            <input type='checkbox' className='w-6 h-6 outline-none cursor-pointer rounded-xl bg-[#808080]' checked={rememberMe}
                                onChange={() => setRememberMe(!rememberMe)} />
                            <a href="#" >Remember me</a>
                        </div>

                        <Link href="/forget-password" className='text-[#FFA500] underline undeline-offset-2'>forgot password?</Link>
                    </div>
                    <button type='submit' className='border-[#FFA500] w-full text-xl border text-white rounded-lg bg-[#FFA500] md:p-4 p-3 shadow cursor-pointer'>Login</button>
                    <Link href="/signup">
                        <button className='border bg-[#333333] w-full text-xl border text-white rounded-lg mt-4 md:p-4 p-3 cursor-pointer'>Sign Up</button>
                    </Link>

                    <div className='flex  items-center 2xl:my-5 md:my-2'>
                        <hr className='text-[#DCDCDC]  border-1 w-[259px]' />
                        <h1 className='2xl:text-[20px] text-[16px] px-5'>OR</h1>
                        <hr className='text-[#DCDCDC]  border-1 w-[259px]' />
                    </div>
                    <div className='border bg-[#333333] w-full text-xl border text-white rounded-lg cursor-pointer md:p-4 p-3  flex items-center justify-center gap-2'><FcGoogle className='text-3xl ' />Login with Google</div>

                </form>
                <div className='lg:w-[40%]'>
                    <Image src="/loginImage.png" priority alt="image" width={711} height={366} className='h-screen w-[100%] lg:block hidden' />
                </div>
            </div>
            {loader ? <Loader /> : null}
            <div className='p-3 text-center lg:hidden block flex justify-center items-center gap-1 text-black bg-[#FFA500] absolute bottom-0 w-full'>
                <p>Developed By</p><a href="#">Mayonity</a>
            </div>
        </>
    )
}

export default Login
