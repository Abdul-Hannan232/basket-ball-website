"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { useAuthToken } from '../../customHook/useAuthToken';
import { getUser, updateUser } from "../../services/userServices"
import { ToastContainer, toast } from 'react-toastify';
import FileUpload from "../../component/FileUpload";
import Loader from "../../component/LoadingBall";

export default function UserProfile() {
    const [activeTab, setActiveTab] = useState('tab1');
    const { token, decodedToken } = useAuthToken();
    const handleTabClick = (tab) => { setActiveTab(tab); };
    const [oldPassword, setOldPassword] = useState(false);
    const [newPassword, setNewPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState(false);
    const togglePasswordVisibility1 = () => { setOldPassword(!oldPassword); };
    const togglePasswordVisibility2 = () => { setNewPassword(!newPassword); };
    const togglePasswordVisibility3 = () => { setConfirmPassword(!confirmPassword); };
    const [previewUrl, setPreviewUrl] = useState("");
    const [file, setFile] = useState(null);
    const [loader, setLoader] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        first_name: '',
        last_name: '',
        email: '',
        height: '',
        weight: '',
        address: '',
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



    useEffect(() => {
        const fetchUser = async (id, token) => {
            try {
                const response = await getUser(id, token);
                if (response.status === 200) {
                    return response.data;
                }
            } catch (error) {
                 toast.error(error.message);
            }
        };

        const getUserData = async () => {
            if (token) {
                const userData = await fetchUser(decodedToken.id, token);
                setFormData(userData || {});
            }
        };

        getUserData();
    }, [token]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };


    const handleSubmit = async (e) => {

        e.preventDefault();
        setLoader(true);
         const updatedFormData = new FormData();
        for (const key in formData) {
            if (formData[key]) {
                updatedFormData.append(key, formData[key]);
            }
        }
        if (file) {
            if (formData.image) {
                 console.log("before split",formData.image)
                 const test=formData.image.split('/').pop()
                 console.log("after split",test)
                updatedFormData.append('oldImage', formData.image.split('/').pop());
            }
            updatedFormData.append('image', file);
        }

        console.log("upde",updatedFormData.entries.image,updatedFormData.oldImage)
        try {
        
            const response = await updateUser(formData, token);
             if (response.status === 200) {
                setFile(null)
                setPreviewUrl(null)
                toast.success(response.data.message);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
             toast.error("Network error: ");
        } finally {
            setLoader(false);
        }
    };

    const ResetPassword = async (e) => {
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
        <div>
            <ToastContainer />
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
                            <h1 className='text-4xl font-bold mt-14 text-center'>Welcome, {formData.name}</h1>
                            <form onSubmit={handleSubmit}>
                                <div className=' my-20'>

                                    <Image
                                        src={previewUrl ? previewUrl : formData?.image ? `${formData.image}` : '/user_placeholder.jpeg'}
                                        alt="image"
                                        width={180}
                                        height={180}
                                        className='mx-auto'
                                        style={{ width: "auto", height: "180px" }}
                                    />
                                    <FileUpload color={"#000000"} fileControl={setFile} text={"Edit profile picture"} previewControl={setPreviewUrl} type="single" />
                                    <Image src="/edit.png" alt="image" width={20} height={20} />
                                    <div className='w-[80%] mx-auto grid grid-cols-2 gap-5 my-10'>
                                        <div >
                                            <label className='text-white font-bold text-md'> Name*</label><br />
                                            <input type='text' placeholder='Fred Khan' name="name" required value={formData.name} onChange={handleChange} className='text-black p-3 border-2  bg-[#808080] border-[#808080] outline-none w-96 mt-3 rounded-xl' />
                                        </div>

                                        <div >
                                            <label className='text-white font-bold text-md'>Email  *</label><br />
                                            <input type='text' placeholder='info@centralparknyc.com' disabled value={formData.email} className='text-black bg-[#808080]  p-3 border-2 border-[#808080] outline-none w-96 mt-3 rounded-xl' />
                                        </div>
                                        <div >
                                            <label className='text-white font-bold text-md'>Contact*</label><br />
                                            <input type='text' placeholder='12345678' name="phone_number" value={formData.phone_number} onChange={handleChange} className='text-black p-3 border-2  bg-[#808080] border-[#808080] outline-none w-96 mt-3 rounded-xl' />
                                        </div>
                                        <div >
                                            <label className='text-white font-bold text-md'>Height*</label><br />
                                            <input type='text' placeholder='6 feet' name="height" required value={formData.height} onChange={handleChange} className='text-black p-3 border-2 bg-[#808080]  border-[#808080] outline-none w-96 mt-3 rounded-xl' />
                                        </div>
                                        <div >
                                            <label className='text-white font-bold text-md'>Weight*</label><br />
                                            <input type='text' placeholder='180 lbs' name="weight" required value={formData.weight} onChange={handleChange} className='text-black p-3 border-2 bg-[#808080]  border-[#808080] outline-none w-96 mt-3 rounded-xl' />
                                        </div>

                                        <div >
                                            <label className='text-white font-bold text-md'>Address</label><br />
                                            <input type='text' placeholder='123 street anytown' name="address" required value={formData.address} onChange={handleChange} className='text-black p-3  bg-[#808080] border-2 border-[#808080] outline-none w-96 mt-3 rounded-xl' />
                                        </div>


                                    </div>
                                    <button type="submit" className='bg-[#FFA500] p-3 w-[60%] rounded-md flex justify-center font-bold  mx-auto text-black mt-5'>Save Changes</button>
                                </div>
                            </form>
                        </div>}
                    {activeTab === 'tab2' && <div>
                        <form onSubmit={handleSubmit}>
                            <div className='w-[40%]  mx-auto space-y-5 my-10'>
                                <div >
                                    <label className='text-white  text-md'> Team*</label><br />
                                    <input type='text' placeholder='City Hawks' name="team" value={formData.team} onChange={handleChange} className='shadow-xl text-black p-3 border-2  bg-[#808080] border-[#808080] outline-none w-96 mt-3 rounded-xl' />
                                </div>

                                <div >
                                    <label className='text-white  text-md'>Jersey Number  *</label><br />
                                    <input type='text' placeholder='23' name="jersey_number" value={formData.jersey_number} onChange={handleChange} className='text-black shadow-xl bg-[#808080]  p-3 border-2 border-[#808080] outline-none w-96 mt-3 rounded-xl' />
                                </div>
                                <div >
                                    <label className='text-white  text-md'>Position*</label><br />
                                    <input type='text' placeholder='Point Guard' name="position" value={formData.position} onChange={handleChange} className='text-black shadow-xl p-3 border-2  bg-[#808080] border-[#808080] outline-none w-96 mt-3 rounded-xl' />
                                </div>
                                <button type="submit" className='bg-[#FFA500] p-3 w-96 rounded-md  font-bold shadow-xl mx-auto text-black '>Save Changes</button>

                            </div>
                        </form>
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
                            <button type="submit" className='bg-[#FFA500] p-3 w-60 flex justify-center rounded-md  font-bold shadow-xl mx-auto text-black '>Change Password</button>
                        </div>
                    </div>}
                </div>
            </div>
            {loader ? <Loader /> : null}
        </div>
    )
}