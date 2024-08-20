"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Navbar from "../../component/Navbar"
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import Footer from "../../component/Footer"

const UserProfile = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    const [oldPassword, setOldPassword] = useState(false);
    const [newPassword, setNewPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState(false);

    const togglePasswordVisibility1 = () => {
        setOldPassword(!oldPassword);
    };
    
    const togglePasswordVisibility2 = () => {
        setNewPassword(!newPassword);
    };
    
    const togglePasswordVisibility3 = () => {
        setConfirmPassword(!confirmPassword);
    };

    return (
        <div>
            <Navbar />

            <div className='w-[80%] mx-auto mt-20'>
                <div className="flex ">
                    <button
                        onClick={() => handleTabClick('tab1')}
                        className={`py-2 px-7 text-xl ${activeTab === 'tab1' ? 'border-b-2  border-[#FFA500] text-white' : 'text-gray-500'}`}
                    >
                        Personal Info                    </button>
                    <button
                        onClick={() => handleTabClick('tab2')}
                        className={`py-2 px-7 text-xl ${activeTab === 'tab2' ? 'border-b-2  border-[#FFA500] text-white' : 'text-gray-500'}`}
                    >
                        Team Info
                    </button>
                    <button
                        onClick={() => handleTabClick('tab3')}
                        className={`py-2 px-7 text-xl ${activeTab === 'tab3' ? 'border-b-2  border-[#FFA500] text-white' : 'text-gray-500'}`}
                    >
                        Password
                    </button>
                </div>

                <div className="p-4">
                    {activeTab === 'tab1' &&
                        <div>
                            <h1 className='text-4xl font-bold mt-14 text-center'>Welcome,Fred Kian</h1>
                            <div className=' my-20'>
                                <Image src="/usericon.png" alt="image" width={180} height={180} className='mx-auto' />
                                <div className='w-[80%] mx-auto grid grid-cols-2 gap-5 my-10'>
                                    <div >
                                        <label className='text-white font-bold text-md'> Name*</label><br />
                                        <input type='text' placeholder='Fred Khan' className='text-black p-3 border-2  bg-[#808080] border-[#808080] outline-none w-96 mt-3 rounded-xl' />
                                    </div>

                                    <div >
                                        <label className='text-white font-bold text-md'>Email  *</label><br />
                                        <input type='text' placeholder='info@centralparknyc.com' className='text-black bg-[#808080]  p-3 border-2 border-[#808080] outline-none w-96 mt-3 rounded-xl' />
                                    </div>
                                    <div >
                                        <label className='text-white font-bold text-md'>Contact*</label><br />
                                        <input type='text' placeholder='12345678' className='text-black p-3 border-2  bg-[#808080] border-[#808080] outline-none w-96 mt-3 rounded-xl' />
                                    </div>
                                    <div >
                                        <label className='text-white font-bold text-md'>Height*</label><br />
                                        <input type='text' placeholder='6 feet  ' className='text-black p-3 border-2 bg-[#808080]  border-[#808080] outline-none w-96 mt-3 rounded-xl' />
                                    </div>
                                    <div >
                                        <label className='text-white font-bold text-md'>Weight*</label><br />
                                        <input type='text' placeholder='180 lbs' className='text-black p-3 border-2 bg-[#808080]  border-[#808080] outline-none w-96 mt-3 rounded-xl' />
                                    </div>

                                    <div >
                                        <label className='text-white font-bold text-md'>Address</label><br />
                                        <input type='text' placeholder='123 street anytown' className='text-black p-3  bg-[#808080] border-2 border-[#808080] outline-none w-96 mt-3 rounded-xl' />
                                    </div>


                                </div>
                                <button className='bg-[#FFA500] p-3 w-[60%] rounded-md flex justify-center font-bold  mx-auto text-black mt-5'>Save Changes</button>
                            </div>
                        </div>}
                    {activeTab === 'tab2' && <div>
                        <div className='w-[40%]  mx-auto space-y-5 my-10'>
                            <div >
                                <label className='text-white  text-md'> Team*</label><br />
                                <input type='text' placeholder='City Hawks' className='shadow-xl text-black p-3 border-2  bg-[#808080] border-[#808080] outline-none w-96 mt-3 rounded-xl' />
                            </div>

                            <div >
                                <label className='text-white  text-md'>Jersey Number  *</label><br />
                                <input type='text' placeholder='23' className='text-black shadow-xl bg-[#808080]  p-3 border-2 border-[#808080] outline-none w-96 mt-3 rounded-xl' />
                            </div>
                            <div >
                                <label className='text-white  text-md'>Position*</label><br />
                                <input type='text' placeholder='Point Guard' className='text-black shadow-xl p-3 border-2  bg-[#808080] border-[#808080] outline-none w-96 mt-3 rounded-xl' />
                            </div>


                            <button className='bg-[#FFA500] p-3 w-96 rounded-md  font-bold shadow-xl mx-auto text-black '>Save Changes</button>

                        </div>
                    </div>}
                    {activeTab === 'tab3' && <div>
                        <div className='w-[40%]  mx-auto space-y-10 my-10'>
                            <div>
                                <label className='text-white text-md'>Old Password*</label><br />
                                <div className='shadow-xl w-96 mt-3 relative rounded-xl'>
                                    <input
                                        type={oldPassword ? 'text' : 'password'}
                                        placeholder='**********'
                                        className='text-black p-3 border-2 bg-[#808080] border-[#808080] outline-none w-96 rounded-xl'
                                    />
                                    <div
                                        onClick={togglePasswordVisibility1}
                                        className='absolute top-4 right-5 text-xl cursor-pointer'
                                    >
                                        {oldPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className='text-white text-md'>New Password*</label><br />
                                <div className='shadow-xl w-96 mt-3 relative rounded-xl'>
                                    <input
                                        type={newPassword ? 'text' : 'password'}
                                        placeholder='**********'
                                        className='text-black p-3 border-2 bg-[#808080] border-[#808080] outline-none w-96 rounded-xl'
                                    />
                                    <div
                                        onClick={togglePasswordVisibility2}
                                        className='absolute top-4 right-5 text-xl cursor-pointer'
                                    >
                                        {newPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className='text-white text-md'>Confirm new Password*</label><br />
                                <div className='shadow-xl w-96 mt-3 relative rounded-xl'>
                                    <input
                                        type={confirmPassword ? 'text' : 'password'}
                                        placeholder='**********'
                                        className='text-black p-3 border-2 bg-[#808080] border-[#808080] outline-none w-96 rounded-xl'
                                    />
                                    <div
                                        onClick={togglePasswordVisibility3}
                                        className='absolute top-4 right-5 text-xl cursor-pointer'
                                    >
                                        {confirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                                    </div>
                                </div>
                            </div>
                            <button className='bg-[#FFA500] p-3 w-60 flex justify-center rounded-md  font-bold shadow-xl mx-auto text-black '>Change Password</button>
                        </div>
                    </div>}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default UserProfile
