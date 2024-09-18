"use client"
import React, { useState, useEffect } from 'react';
import FileUpload from '../../component/FileUpload'
import Image from 'next/image';
import Link from 'next/link';
const MAX_FILES = 6;
const CourtForm = ({ handleSubmit, formData, setFormData, files, setFiles, previewUrls, setPreviewUrls }) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;

        // Update facilities array
        if (checked) {
            // Add checked option
            setFormData((prevData) => ({
                ...prevData,
                facilities: [...prevData.facilities, value],
            }));
        } else {
            // Remove unchecked option
            setFormData((prevData) => ({
                ...prevData,
                facilities: prevData.facilities.filter((option) => option !== value),
            }));
        }
    };
    const options = ['Showers', 'Seating', 'Parking']; // Available options for checkboxes

    return (
        <div>
            <div className='flex  lg:pt-16 pt-14 lg:w-[81.5%] bg-white w-full 2xl:w-[88.5%]  float-right text-[#4B4B4B] '>
                <div className='   w-[100%] lg:px-10  bg-white mx-auto '>
                    <div className='fixed  2xl:w-[85%] lg:w-[75.5%] w-full bg-white '>
                        <div className='lg:p-5 p-2 m-5 lg:rounded-xl rounded-md bg-white border-2 lg:h-24 border-[#CACACA] lg:gap-10 gap-2 flex items-center'>
                            <div className='w-full relative'>
                                <input
                                    type='text'
                                    placeholder='Search Courts'
                                    // onChange={handleFilter}
                                    className='border border-[#CACACA] lg:text-lg text-sm lg:rounded-xl rounded-md lg:p-4 p-2 bg-[#FFF8B3] relative w-full'
                                />
                                <Image src="/filter-search.png" alt="filter" width="5" height="5" className="absolute lg:w-[25px] lg:h-[25px] w-4 h-4 lg:top-4 top-4 right-3 lg:right-5" />
                            </div>
                            <button className='bg-[#269C55] text-white lg:rounded-xl rounded-md lg:p-4 p-2 lg:text-xl text-[10px] lg:w-60 w-28  text-center'>
                                <Link href="/admin/courts"> Save Court
                                </Link>
                            </button>
                        </div>
                    </div>
                    {/* idhar  add karna hy */}
                    <div className='border lg:mt-36 mt-28  border-[#CACACA] bg-white m-5  rounded-xl m-5'>
                        <div className=''>
                            <div className='lg:pl-10 pl-5  lg:text-2xl text-lg rounded-t-xl flex items-center gap-10 border-2 lg:h-24 h-14  bg-[#F4F4F4] text-black font-bold border-[#CACACA] gap-10 flex items-center'>
                                <h1 className='text-[#4B4B4B]'>Court Details</h1>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className=' lg:w-[80%] w-[90%] mx-auto lg:flex   gap-20 lg:my-12 mt-10'>
                                <div className='space-y-5 w-full'>
                                    <div >
                                        <label className='text-black font-bold text-md'>Court Name</label><br />
                                        <input type='text' name="name" required value={formData.name} onChange={handleChange} placeholder='Skyline Hoops' className='text-black p-4 border-2 border-[#CACAC]  w-full mt-3 rounded-xl' />
                                    </div>
                                    <div >
                                        <label className='text-black font-bold text-md'>Contact</label><br />
                                        <input type='text' name="name" required value={formData.name} onChange={handleChange} placeholder='444-666-777' className='text-black p-4 border-2 border-[#CACAC]  w-full mt-3 rounded-xl' />
                                    </div>
                                    <div >
                                        <label className='text-black font-bold text-md'>Description</label><br />
                                        <textarea type='text' name="description" required value={formData.description} onChange={handleChange} placeholder='Outdoor courts surrounded by greenery, ideal for casual games.' className='text-black p-4 border-2 border-[#CACAC] text-xs  w-full h-40 mt-3 rounded-xl' />
                                    </div>
                                    <div className='w-full  '>
                                        <label className='text-black font-bold text-lg'>Image</label><br />

                                        <div className='w-full  border-2 border-[#CACAC] rounded-md  mt-5  mx-auto'>

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
                                            <p className='md:text-sm text-xs text-center mt-7 text-black'>Drop your images here too</p>
                                            <FileUpload page={"court-form"} color={"#FFA500"} text={"Click here to browse"} fileControl={{ files, setFiles }} previewControl={{ previewUrls, setPreviewUrls }} type="multiple" /><br />
                                        </div>
                                    </div>
                                </div>
                                <div className='space-y-5 w-full'>
                                    <div >
                                        <label className='text-black font-bold text-md'>Location </label><br />
                                        <input type='text' name="location" required value={formData.location} onChange={handleChange} placeholder='Downtown Gym' className='text-black p-4 border-2 border-[#CACAC]  w-full mt-3 rounded-xl' />
                                    </div>

                                    <div >
                                        <label className='text-black font-bold text-md'>Pricing </label><br />
                                        <input type='text' name="location" required value={formData.cost} onChange={handleChange} placeholder='&30/h' className='text-black p-4 border-2 border-[#CACAC]  w-full mt-3 rounded-xl' />
                                    </div>

                                    <div >
                                        <label className='text-black font-bold text-md'>Availability</label><br />
                                        <textarea type='text' name="cost" required value={formData.operating_hours} placeholder='19 :00 H to 22 : 00 H' onChange={handleChange} className='text-black p-4 border-2 border-[#CACAC]  w-full h-28 mt-3 rounded-xl' />
                                    </div>

                                    <div className='border border-[#CACACA] rounded-xl h-48 '>
                                        <div className='pl-5 text-xl rounded-t-xl flex items-center mb-5 gap-10 border-2 h-14  bg-[#F4F4F4] text-black font-bold border-[#CACACA] '>
                                            <h1 className='text-[#4B4B4B]'>Facilities</h1>
                                        </div>
                                        {options.map((option) => (
                                            <div key={option} className='mx-5 mt-2   flex items-center gap-1 '>
                                                <input
                                                    type="checkbox"
                                                    value={option}
                                                    onChange={handleCheckboxChange}
                                                    className='w-4 h-4'
                                                    checked={formData.facilities.includes(option)} // Keep checkbox checked state
                                                />
                                                <label className='font-bold'>{option}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {/* <div className='flex justify-end w-[80%] mt-[-50px] mx-auto mb-20 items-center gap-5'>
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
                            </div> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourtForm
