"use client"
import React, { useState, useEffect } from 'react';
import FileUpload from '../../component/FileUpload'
import Image from 'next/image';
const MAX_FILES = 6;
const CourtForm = ({handleSubmit, formData, setFormData, setFiles, previewUrls, setPreviewUrls}) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };


    return (
        <div>
           

            <div className='flex bg-white pt-40 w-[81.5%]  float-right text-[#4B4B4B] '>
                <div className='w-screen'>
                  
                        <div className='border border-[#CACACA] m-5 rounded-xl m-5'>
                            <div className='pl-10 text-2xl rounded-t-xl flex items-center gap-10 border-2 h-24  bg-[#F4F4F4] text-black font-bold border-[#CACACA] gap-10 flex items-center'>
                                <h1 className='text-[#4B4B4B]'>Court Details</h1>
                                <h1 className='text-[#4B4B4B]'>Submitted by</h1>

                            </div>
                            <form onSubmit={handleSubmit}>
                            <div className='w-[80%] mx-auto grid grid-cols-2 gap-5 mt-20'>
                                <div >
                                    <label className='text-black font-bold text-md'>Court Name</label><br />
                                    <input type='text' name="name" required value={formData.name} onChange={handleChange} placeholder='Skyline Hoops' className='text-black p-3 border-2 border-[#CACAC] w-96 mt-3 rounded-xl' />
                                </div>
                                <div >
                                    <label className='text-black font-bold text-md'>Location </label><br />
                                    <input type='text' name="location" required value={formData.location} onChange={handleChange} placeholder='Downtown Gym' className='text-black p-3 border-2 border-[#CACAC] w-96 mt-3 rounded-xl' />
                                </div>
                                <div >
                                    <label className='text-black font-bold text-md'>Description</label><br />
                                    <textarea type='text' name="description" required value={formData.description} onChange={handleChange}  placeholder='Outdoor courts surrounded by greenery, ideal for casual games.' className='text-black p-3 border-2 border-[#CACAC] text-xs w-96 h-40 mt-3 rounded-xl' />
                                </div>
                                <div >
                                    <label className='text-black font-bold text-md'>Pricing</label><br />
                                    <input type='text' name="cost" required value={formData.cost} placeholder='$30/h'onChange={handleChange} className='text-black p-3 border-2 border-[#CACAC] w-96 mt-3 rounded-xl' />
                                </div>
                                <label className='text-black font-bold text-lg'>Image</label><br />

                                <div className='w-full  border-2 border-[#CACAC] rounded-md    mx-auto'>

                                    {/* seting image */}
                                    <div  >

                                        <div style={{ display: 'grid', gap: '10px', marginTop: '10px' }}>
                                            {/* First row with one image */}
                                            <div style={{ display: 'flex', justifyContent: 'center', marginLeft: "-1px" }}>
                                                {previewUrls.length > 0 && (
                                                    <div key={0} style={{ textAlign: 'center' }} className='w-[95%] mx-auto rounded-md'>
                                                        <Image
                                                            src={previewUrls[0] || '/courts_placeholder.jpg'} // Default placeholder image if no image is selected
                                                            alt={`Preview 1`}
                                                            style={{ width: '100%', borderRadius: "7px", height: '200px', objectFit: 'cover' }}
                                                            unoptimized
                                                            width={500}
                                                            height={500}
                                                        />
                                                    </div>
                                                )}
                                            </div>

                                            {/* Second row with up to four images */}
                                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)' }}>
                                                {previewUrls.slice(1, 6).map((preview, index) => (
                                                    <div key={index + 1} style={{ textAlign: 'center' }} className='w-[80%] rounded-md mx-auto '>
                                                        <Image
                                                            src={preview || '/courts_placeholder.jpg'} // Default placeholder image if no image is selected
                                                            alt={`Preview ${index + 2}`}
                                                            style={{ width: '100px', borderRadius: "7px", height: '70px', objectFit: 'cover' }}
                                                            unoptimized
                                                            width={500}
                                                            height={500}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* end setting mage */}
                                    <p className='md:text-sm text-xs text-center mt-7 text-black'>Drop your images here too</p>
                                    {/* <FileUpload color={"#FFA500"} text={"Click here to browse"} fileControl={{  setFiles }} previewControl={{ previewUrls, setPreviewUrls }} type="multiple" /><br /> */}
                                </div>
                                <div className='mt-[-140px]'>
                                    <label className='text-black font-bold text-md'>Availability</label><br />
                                    <input type='text' name="operating_hours" required value={formData.operating_hours} onChange={handleChange} placeholder='9:00 H - 12:00' className='text-black p-3 border-2 border-[#CACAC] w-96 mt-3 rounded-xl' />
                                </div>
                            </div>
                            <div className='flex justify-end w-[80%] mt-[-50px] mx-auto mb-20 items-center gap-5'>
                                <button
                                    className='bg-red-700 rounded-md md:text-xl text-sm text-white md:px-16 px-3 py-2 shadow'
                                >
                                    Reject
                                </button>
                                <button type='submit'
                                    className='bg-green-700 rounded-md md:text-xl text-sm text-white md:px-16 px-3 py-2 shadow'
                                >
                                    Accept
                                </button>
                            </div>

                            </form>
                        </div>


                  
                </div>

            </div>

        </div>
    )
}

export default CourtForm
