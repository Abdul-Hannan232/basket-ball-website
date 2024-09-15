"use client";
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import UserForm from './UserForm'
import { useRouter } from 'next/navigation';
import Loader from "../LoadingBall";
import { updateUser, getUser } from "../../services/userServices";
import { ToastContainer, toast } from 'react-toastify';
import { useAuthToken } from "../../customHook/useAuthToken"
import Adminnavbar from './adminnavbar';
export default function UserDetail() {
    const router = useRouter();
    const [file, setFile] = useState(null);
    const { token } = useAuthToken();
    const [previewUrl, setPreviewUrl] = useState("");
    const [loader, setLoader] = useState(false);
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
    const emailDisable=true
    const searchParams = useSearchParams();
    const id = searchParams.get('id'); // Get the serialized data
    // const id = 25

    useEffect(() => {
        const fetchUser = async (id,token) => {
            try {
                const response = await getUser(id, token);
                setFormData(response.data)
            } catch (error) {
                console.log("useEffet error", error.message)
                toast.error(error.message);
            }
        };
        if (id) {
            fetchUser(id,token);
        }

    }, [id, token]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoader(true);
        if(formData.image)
        {
            formData.image="/"+formData.image.split('/').pop()
        }
       
        const updatedFormData = new FormData();
      
        for (const key in formData) {
            if (formData[key]) {
                updatedFormData.append(key, formData[key]);
            }
        }
        if (file) {
            if (formData.image) {
                updatedFormData.append('oldImage', formData.image.split('/').pop());
            }
            updatedFormData.append('image', file);
        }


        try {
            const response = await updateUser(updatedFormData, token);
            if (response.status === 200) {
               
                toast.success(response.data.message);
                setFile(null)
                setPreviewUrl("/user_placeholder.png")
                router.push("/admin/users")
            
               
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error("Network error: ");
        } finally {
            setLoader(false);
        }
    };
    return (
        // <Suspense fallback={<div> <Loader /> </div>}>
        <>
           <Adminnavbar/>
            <div className='flex bg-white lg:mt-16 mt-10 lg:w-[81.5%]  float-right text-black'>
                <ToastContainer />
                <UserForm
                    {...{ handleSubmit, formData, setFormData, setFile, previewUrl, setPreviewUrl, emailDisable }}
                />

            </div>
            {loader ? <Loader /> : null}
            {/* </Suspense> */}
        </>
    );
}
