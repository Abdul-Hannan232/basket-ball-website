"use client";
import React from 'react';
import { Button } from 'primereact/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import 'react-toastify/dist/ReactToastify.css';
import FileUpload from "../FileUpload";
import { DateFormat } from "../../utils/formatData"

const UserForm = ({ handleSubmit, formData, setFormData, setFile, previewUrl, setPreviewUrl, emailDisable = false }) => {
    const router = useRouter();
    const handleChange = (e) => {
        const { name, value } = e.target;
     setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
   };

   return (
        <>
            <div className='w-screen lg:mt-5 lg:mx-10  mt-10'>
                <form onSubmit={handleSubmit}>
                    <div className='border border-[#CACACA] m-5 rounded-xl '>
                        <div className='pl-10 lg:text-xl text-md rounded-t-xl border-2 h-24 bg-[#F4F4F4] text-black font-bold border-[#CACACA] gap-10 flex items-center'>
                            <h1>User Details (Personal)</h1>
                        </div>
                        <div className='border-2 border-[#CACACA] mx-auto lg:mt-20 mt-10 w-[85%] lg:rounded-3xl rounded-xl'>
                            <div className='lg:flex items-center justify-between gap-10 px-3'>
                                <div className='lg:flex items-center gap-10 p-5'>
                                    <Image
                                        src={previewUrl ? previewUrl : formData?.image ? `${formData.image}` : '/user_placeholder.jpeg'}
                                        alt="user Image"
                                        width={140}
                                        height={140}
                                        className='w-40 h-40 rounded-full lg:mx-0 mx-auto shadow-xl'
                                    />
                                    <div>
                                        <h1 className='text-xl text-black lg:text-start text-center font-bold'>{formData.name}</h1>
                                        <p className='lg:text-sm text-xs lg:text-start text-center text-[#636161]'>{formData.email}</p>
                                    </div>
                                </div>

                                <div className='lg:p-3 p-2 lg:rounded-lg rounded-md gap-3 justify-center lg:mb-0 mb-2 flex items-center  border border-[#CACACA]'>
                                    <FileUpload page={"user-form"} color={"#000000"} fileControl={setFile} text={"Edit profile picture"} previewControl={setPreviewUrl} type="single" />
                                    <Image src="/edit.png" alt="image" width={20} height={20} />
                                </div>
                            </div>
                        </div>
                        <div className='lg:w-[85%] w-[90%] flex items-center gap-32 mx-auto grid lg:grid-cols-2 grid-cols-1  gap-5 my-20'>
                            <div className='space-y-5'>
                                <div >
                                    <label className='text-black font-bold text-md'>Display Name<label className='text-[#FB1A1A]'>*</label></label><br />
                                    <input type='text' name="name" required value={formData.name} onChange={handleChange} placeholder='John Doe' className='text-black p-4 border-2 w-full border-[#CACAC]  mt-3 rounded-xl' />
                                </div>
                                <div >
                                    <label className='text-black font-bold text-md'>Email  <label className='text-[#FB1A1A]'>*</label></label><br />
                                    <input type='text' name="email" disabled={emailDisable} required value={formData.email} onChange={handleChange} placeholder='info@centralparknyc.com' className='text-black w-full p-4 border-2 border-[#CACAC]  mt-3 rounded-xl' />
                                </div>
                                <div >
                                    <label className='text-black font-bold text-md'>Height</label><br />
                                    <input type='text' name="height" required value={formData.height} onChange={handleChange} placeholder='190 cm' className='text-black p-4 border-2 border-[#CACAC] w-full  mt-3 rounded-xl' />
                                </div>
                                <div >
                                    <label className='text-black font-bold text-md'>Phone (optional)</label><br />
                                    <input type='text' name="phone_number" value={formData.phone_number} onChange={handleChange} placeholder='555-123-4567' className='text-black p-4 border-2 border-[#CACAC] w-full  mt-3 rounded-xl' />
                                </div>
                                <div >
                                    <label className='text-black font-bold text-md'>Country</label><br />
                                    <input type='text' name="country" required value={formData.country} onChange={handleChange} placeholder='USA' className='text-black p-4 border-2 border-[#CACAC] w-full  mt-3 rounded-xl' />
                                </div>
                            </div>
                            <div className='space-y-5'>

                                <div >
                                    <label className='text-black font-bold text-md'>First Name </label><br />
                                    <input type='text' name="first_name" required value={formData.first_name} onChange={(e) => handleChange(e)} placeholder='John' className='text-black p-4 w-full border-2 border-[#CACAC]  mt-3 rounded-xl' />
                                </div>

                                <div >
                                    <label className='text-black font-bold text-md'>Last Name</label><br />
                                    <input type='text' name="last_name" required value={formData.last_name} onChange={handleChange} placeholder='Doe' className='text-black p-4 border-2 border-[#CACAC] w-full  mt-3 rounded-xl' />
                                </div>

                                <div >
                                    <label className='text-black font-bold text-md'>Weight</label><br />
                                    <input type='text' name="weight" required value={formData.weight} onChange={handleChange} placeholder='110 KG' className='text-black p-4 border-2 border-[#CACAC] w-full  mt-3 rounded-xl' />
                                </div>

                                <div >
                                    <label className='text-black font-bold text-md'>Joined Since</label><br />
                                    <input type='date' name="joined_since" required value={DateFormat(formData.joined_since)} onChange={handleChange} placeholder='01/02/17' className='text-black p-4 border-2 w-full border-[#CACAC]  w-full mt-3 rounded-xl' />
                                </div>

                                <div >
                                    <label className='text-black font-bold text-md'>Role</label><br />
                                    <div className="relative w-full mt-3">
                                        <select
                                            className="text-black cursor-pointer p-4 border-2 border-[#CACACA] w-full rounded-xl appearance-none text-lg"
                                            onChange={handleChange}
                                            name="role"
                                            value={formData.role}  // Controlled value
                                        >
                                            {/* Placeholder option */}
                                            <option value="" disabled>Select Role</option>
                                            <option value="admin" className="text-black">Admin</option>
                                            <option value="user" className="text-black">User</option>
                                        </select>

                                        {/* Custom dropdown icon */}
                                        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                                            <svg
                                                className="w-6 h-6 text-black"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                                            </svg>
                                        </div>
                                    </div>

                                    {/* <input type='text' name="role" required value={formData.role}  placeholder='Admin' className='text-black p-4 border-2 border-[#CACAC] w-full  mt-3 rounded-xl' /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border border-[#CACACA] m-5 rounded-xl mt-20'>
                        <div className='pl-10 lg:text-xl text-md rounded-t-xl border-2 h-24 bg-[#F4F4F4] text-black font-bold border-[#CACACA] gap-10 flex items-center'>
                            <h1>User Details (Team Info)</h1>
                        </div>
                        <div className='lg:w-[85%] w-[90%] mx-auto flex  justify-between gap-32    mt-10'>
                            <div className='space-y-5 w-full'>
                                <div >
                                    <label className='text-black font-bold text-md'>Team Name</label><br />
                                    <input type='text' name="team" value={formData.team} onChange={handleChange} placeholder='Hoop Dreamers' className='text-black p-4 border-2 border-[#CACAC] w-full  mt-3 rounded-xl' />
                                </div>

                                <div >
                                    <label className='text-black font-bold text-md'>Position</label><br />
                                    <input type='text' name="position" value={formData.position} onChange={handleChange} placeholder='Point Guard' className='text-black p-4 border-2 border-[#CACAC] w-full  mt-3 rounded-xl' />
                                </div>
                            </div>
                            <div className='w-full'>
                                <label className='text-black font-bold text-md'>Jersey Number</label><br />
                                <input type='text' name="jersey_number" value={formData.jersey_number} onChange={handleChange} placeholder='23' className='text-black p-4 border-2 border-[#CACAC] w-full  mt-3 rounded-xl' />
                            </div>
                        </div>
                        <div className='flex justify-end mb-10 w-[85%] mx-auto'>
                            <div className='flex items-center gap-3 w-[340px] '>
                                <Button label='Cancel' onClick={()=>router.push("/admin/users")} className='mt-10 text-[#6A6868] lg:text-xl text-sm   p-3 w-20 border border-[#9A9A9A] text-[#6A6868] bg-white rounded-md w-full' />
                                <Button label='Save'  type="submit" className='mt-10  lg:text-xl text-sm text-white  p-3 w-20 border-none text-white bg-[#269C55] rounded-md w-full' />
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </>
    );
};

export default UserForm;
