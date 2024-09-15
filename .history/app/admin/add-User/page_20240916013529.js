"use client"
import React, { useState } from 'react';
import UserForm from '../../component/admin/UserForm'
import Loader from "../../component/LoadingBall";
import { addUser as addNewUser } from "../../services/userServices";
import { ToastContainer, toast } from 'react-toastify';
import Adminnavbar from '../../component/admin/adminnavbar';
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
         <Adminnavbar/>
            <div className='flex bg-white lg:mt-16 lg:w-[81.5%]  float-right text-black'>
                <ToastContainer />
                <UserForm
                    {...{ handleSubmit, formData, setFormData, setFile, previewUrl, setPreviewUrl }}
                />            </div>
            {loader ? <Loader /> : null}
        </>
    );
}
