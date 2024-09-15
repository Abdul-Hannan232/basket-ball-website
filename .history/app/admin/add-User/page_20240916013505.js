"use client"
import React, { useState } from 'react';
import UserForm from '../../component/admin/UserForm'
import Loader from "../../component/LoadingBall";
import { addUser as addNewUser } from "../../services/userServices";
import { ToastContainer, toast } from 'react-toastify';
export default function UserDetail() {
    const [file, setFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState("/user_placeholder.jpeg");
    const [formData, setFormData] = useState({
        name: '',
        first_name: '',
        last_name: '',
        email: '',
        height: '',
        weight: '',
        joined_since: '',
        phone_number: '',
        country: '',
        role: '',
        team: '',
        jersey_number: '',
        position: '',
        password: '12345678',
        image: ''
    });
    const [loader, setLoader] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoader(true);

        // Create a FormData instance
        const updatedFormData = new FormData();
        // Append form fields to FormData
        for (const key in formData) {
            if (formData[key]) {
                updatedFormData.append(key, formData[key]);
            }
        }
        if (file) {
            updatedFormData.append('image', file);
        }
        try {
            const response = await addNewUser(updatedFormData);
            if (response.status === 201) {
                setFormData({
                    name: '',
                    first_name: '',
                    last_name: '',
                    email: '',
                    height: '',
                    weight: '',
                    joined_since: '',
                    phone_number: '',
                    country: '',
                    role: '',
                    team: '',
                    jersey_number: '',
                    position: '',
                    password: '12345678',
                    image: ''
                })
                setFile(null)
                setPreviewUrl("/user_placeholder.png")
                toast.success(response.data.message);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log("errrr", error.message)
            toast.error("Network error: ");
        } finally {
            setLoader(false);
        }
    };
    return (
        <>
            <div className='flex'>
                <div className='bg-[#FFA500] p-4 pl-7 fixed top-0 right-0 left-0 flex items-center text-white'>
                    <h1 className='text-3xl font-bold'>Basketball</h1>
                    <div className='border-2 border-y-transparent border-r-transparent mx-20 pl-5 border-white'>
                        <h1 className='text-lg font-bold'>Add User</h1>
                    </div>
                </div>
            </div>
            <div className='flex bg-white lg:mt-16 lg:w-[81.5%]  float-right text-black'>
                <ToastContainer />
                <UserForm
                    {...{ handleSubmit, formData, setFormData, setFile, previewUrl, setPreviewUrl }}
                />            </div>
            {loader ? <Loader /> : null}
        </>
    );
}
