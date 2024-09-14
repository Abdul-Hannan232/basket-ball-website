"use client";
import React, { useState } from 'react';
import { Button } from 'primereact/button';
import Image from 'next/image';
import 'react-toastify/dist/ReactToastify.css';
import FileUpload from "../FileUpload";
import {DateFormat} from "../../utils/formatData"

const UserForm = ({ handleSubmit, formData, setFormData, setFile, previewUrl, setPreviewUrl,emailDisable=false }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };



    return (
        <>
            <div className='w-screen'>
                <form onSubmit={handleSubmit}>
                    <div className='border border-[#CACACA] m-5 rounded-xl m-5'>
                        <div className='pl-10 text-xl rounded-t-xl border-2 h-24 bg-[#F4F4F4] text-black font-bold border-[#CACACA] gap-10 flex items-center'>
                            <h1>User Details (Personal)</h1>
                        </div>
                        <div className='border-2 border-[#CACACA] mx-auto mt-20 w-[80%] rounded-3xl'>
                            <div className='flex items-center justify-between gap-10 px-3'>
                                <div className='flex items-center gap-10 p-5'>
                                    <Image
                                        src={previewUrl ? previewUrl : formData?.image ? `${formData.image}` : '/user_placeholder.jpeg'}
                                        alt="user Image"
                                        width={140}
                                        height={140}
                                        className='w-40 h-40 rounded-full'
                                    />  
                                    <div>
                                        <h1 className='text-xl text-black font-bold'>{formData.name}</h1>
                                        <p className='text-sm text-[#636161]'>{formData.email}</p>
                                    </div>
                                </div>

                                <div className='p-4 rounded-xl flex items-center gap-6 border border-[#CACACA]'>
                                    <FileUpload color={"#000000"} fileControl={setFile} text={"Edit profile picture"} previewControl={setPreviewUrl} type="single" />
                                    <Image src="/edit.png" alt="image" width={20} height={20} />
                                </div>
                            </div>
                        </div>
                        <div className='w-[80%] mx-auto grid grid-cols-2 gap-5 my-20'>
                            <div >
                                <label className='text-black font-bold text-md'>Display Name*</label><br />
                                <input type='text' name="name" required value={formData.name} onChange={handleChange} placeholder='John Doe' className='text-black p-3 border-2 border-[#CACAC] w-96 mt-3 rounded-xl' />
                            </div>
                            <div >
                                <label className='text-black font-bold text-md'>First Name </label><br />
                                <input type='text' name="first_name" required value={formData.first_name} onChange={(e) => handleChange(e)} placeholder='John' className='text-black p-3 border-2 border-[#CACAC] w-96 mt-3 rounded-xl' />
                            </div>
                            <div >
                                <label className='text-black font-bold text-md'>Email  *</label><br />
                                <input type='text' name="email" disabled={emailDisable} required value={formData.email} onChange={handleChange} placeholder='info@centralparknyc.com' className='text-black p-3 border-2 border-[#CACAC] w-96 mt-3 rounded-xl' />
                            </div>
                            <div >
                                <label className='text-black font-bold text-md'>Last Name</label><br />
                                <input type='text' name="last_name" required value={formData.last_name} onChange={handleChange} placeholder='Doe' className='text-black p-3 border-2 border-[#CACAC] w-96 mt-3 rounded-xl' />
                            </div>
                            <div >
                                <label className='text-black font-bold text-md'>Height</label><br />
                                <input type='text' name="height" required value={formData.height} onChange={handleChange} placeholder='190 cm' className='text-black p-3 border-2 border-[#CACAC] w-96 mt-3 rounded-xl' />
                            </div>
                            <div >
                                <label className='text-black font-bold text-md'>Weight</label><br />
                                <input type='text' name="weight" required value={formData.weight} onChange={handleChange} placeholder='110 KG' className='text-black p-3 border-2 border-[#CACAC] w-96 mt-3 rounded-xl' />
                            </div>
                            <div >
                                <label className='text-black font-bold text-md'>Phone (optional)</label><br />
                                <input type='text' name="phone_number" value={formData.phone_number} onChange={handleChange} placeholder='555-123-4567' className='text-black p-3 border-2 border-[#CACAC] w-96 mt-3 rounded-xl' />
                            </div>
                            <div >
                                <label className='text-black font-bold text-md'>Joined Since</label><br />
                                <input type='date' name="joined_since" required value={DateFormat(formData.joined_since)} onChange={handleChange} placeholder='01/02/17' className='text-black p-3 border-2 border-[#CACAC] w-96 mt-3 rounded-xl' />
                            </div>
                            <div >
                                <label className='text-black font-bold text-md'>Country</label><br />
                                <input type='text' name="country" required value={formData.country} onChange={handleChange} placeholder='USA' className='text-black p-3 border-2 border-[#CACAC] w-96 mt-3 rounded-xl' />
                            </div>
                            <div >
                                <label className='text-black font-bold text-md'>Role</label><br />
                                <input type='text' name="role" required value={formData.role} onChange={handleChange} placeholder='Admin' className='text-black p-3 border-2 border-[#CACAC] w-96 mt-3 rounded-xl' />
                            </div>
                        </div>
                    </div>
                    <div className='border border-[#CACACA] m-5 rounded-xl mt-20'>
                        <div className='pl-10 text-xl rounded-t-xl border-2 h-24 bg-[#F4F4F4] text-black font-bold border-[#CACACA] gap-10 flex items-center'>
                            <h1>User Details (Team Info)</h1>
                        </div>
                        <div className='w-[80%] mx-auto grid grid-cols-2 justify-between gap-10 mt-10'>
                            <div >
                                <label className='text-black font-bold text-md'>Team Name</label><br />
                                <input type='text' name="team" value={formData.team} onChange={handleChange} placeholder='Hoop Dreamers' className='text-black p-3 border-2 border-[#CACAC] w-96 mt-3 rounded-xl' />
                            </div>
                            <div >
                                <label className='text-black font-bold text-md'>Jersey Number</label><br />
                                <input type='text' name="jersey_number" value={formData.jersey_number} onChange={handleChange} placeholder='23' className='text-black p-3 border-2 border-[#CACAC] w-96 mt-3 rounded-xl' />
                            </div>
                            <div >
                                <label className='text-black font-bold text-md'>Position</label><br />
                                <input type='text' name="position" value={formData.position} onChange={handleChange} placeholder='Point Guard' className='text-black p-3 border-2 border-[#CACAC] w-96 mt-3 rounded-xl' />
                            </div>
                        </div>
                        <div className='flex justify-end mb-10 w-[75%] mx-auto'>
                            <div className='flex items-center gap-5 w-[370px]'>
                                <Button label='Cancel' className='mt-10 text-[#6A6868] text-xl  p-4 w-20 border-2 border-[#9A9A9A] text-[#6A6868] bg-white rounded-xl w-full' />
                                <Button label='Save' type="submit" className='mt-10  text-xl text-white p-4 w-20 border-none text-white bg-[#269C55] rounded-xl w-full' />
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </>
    );
};

export default UserForm;
