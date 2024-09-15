"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { useAuthToken } from '../../customHook/useAuthToken';
import { getUser, updateUser } from "../../services/userServices"
import { changePassword } from "../../services/authServices"
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
    const [passwordFormData, setPasswordFormData] = useState({
        id: decodedToken?.id,
        old_password: '',
        password: '',
        confirm_password: ''
    })


    useEffect(() => {
        const fetchUser = async (id, token) => {
            try {
                const response = await getUser(id, token);
                setFormData(response.data);
            } catch (error) {
                console.log('Error fetching user:', error.message);
                toast.error(error.message);
            }
        };

        if (decodedToken?.id) {
            fetchUser(decodedToken.id, token);
        }
    }, [decodedToken?.id, token]);



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
        if (formData.image) {
            formData.image = "/" + formData.image.split('/').pop()
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
                setFormData(response.data.user)
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




    const handleChangePassword = (e) => {
        const { name, value } = e.target;
        setPasswordFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleUpdatePassword = async (e) => {
        setLoader(true)
        e.preventDefault()
        try {
            const response = await changePassword(passwordFormData, token)
            if (response.status === 200) {
                toast.success(response.data.message)
                setPasswordFormData({ id: '', old_password: '', password: '', confirm_password: '' })
            } else {
                toast.error(response.data.message)
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
            <h1 className='text-5xl font-bold mt-14 text-center'>Welcome, {formData.name}</h1>

                <div className="flex mt-32 gap-10">
                    <button
                        onClick={() => handleTabClick('tab1')}
                        className={`py-2 px-1 font-bold text-2xl ${activeTab === 'tab1' ? 'border-b-2  border-[#FFA500] text-white' : 'text-gray-500'}`}
                    >
                        Personal Info                    </button>
                    <button
                        onClick={() => handleTabClick('tab2')}
                        className={`py-2 px-1 font-bold text-2xl ${activeTab === 'tab2' ? 'border-b-2  border-[#FFA500] text-white' : 'text-gray-500'}`}
                    >
                        Team Info
                    </button>
                    <button
                        onClick={() => handleTabClick('tab3')}
                        className={`py-2 px-1 font-bold text-2xl ${activeTab === 'tab3' ? 'border-b-2  border-[#FFA500] text-white' : 'text-gray-500'}`}
                    >
                        Password
                    </button>
                </div>

                <div className="p-4">
                    {activeTab === 'tab1' &&
                        <div>
                            <form onSubmit={handleSubmit}>
                                <div className=' my-10'>

                                    <Image
                                        src={previewUrl ? previewUrl : formData?.image ? `${formData.image}` : '/user_placeholder.jpeg'}
                                        alt="image"
                                        width={180}
                                        height={140}
                                        className='mx-auto rounded-full shadow-xl'
                                        style={{ width: "auto", height: "180px",width:"180px" }}
                                    />
                                    <FileUpload color={"#000000"} fileControl={setFile} text={"Edit profile picture"} previewControl={setPreviewUrl} type="single" />
                                    <Image src="/edit.png" alt="image" width={20} height={20} />
                                    <div className='w-[100%] mx-auto grid grid-cols-2 gap-5 my-10'>
                                        <div >
                                            <label className='text-white font-bold text-md'> Name*</label><br />
                                            <input type='text' placeholder='Fred Khan' name="name" required value={formData.name} onChange={handleChange} className='text-black p-3 4order-2  shadow-xl bg-[#808080] border-[#808080] outline-none w-[100%] mt-3 rounded-md' />
                                        </div>

                                        <div >
                                            <label className='text-white font-bold text-md'>Email  *</label><br />
                                            <input type='text' placeholder='info@centralparknyc.com' disabled value={formData.email} className='text-black bg4[#808080] shadow-xl  p-3 border-2 border-[#808080] outline-none w-full mt-3 rounded-md' />
                                        </div>
                                        <div >
                                            <label className='text-white font-bold text-md'>Contact*</label><br />
                                            <input type='text' placeholder='12345678' name="phone_number" value={formData.phone_number} onChange={handleChange} className='text-black p-4 border-2 shadow-xl  bg-[#808080] border-[#808080] outline-none w-full mt-3 rounded-md' />
                                        </div>
                                        <div >
                                            <label className='text-white font-bold text-md'>Height*</label><br />
                                            <input type='text' placeholder='6 feet' name="height" required value={formData.height} onChange={handleChange} className='text-black p-4 border-2 shadow-xl bg-[#808080]  border-[#808080] outline-none w-full mt-3 rounded-md' />
                                        </div>
                                        <div >
                                            <label className='text-white font-bold text-md'>Weight</label><br />
                                            <input type='text' placeholder='180 lbs' name="weight" required value={formData.weight} onChange={handleChange} className='text-black p-4 border-2 shadow-xl bg-[#808080]  border-[#808080] outline-none w-full mt-3 rounded-md' />
                                        </div>

                                        <div >
                                            <label className='text-white font-bold text-md'>Address</label><br />
                                            <input type='text' placeholder='123 street anytown' name="address" required value={formData.address} onChange={handleChange} className='text-black p-4  shadow-xl  bg-[#808080] border-2 border-[#808080] outline-none w-full mt-3 rounded-md' />
                                        </div>


                                    </div>
                                    <button type="submit" className='bg-[#FFA500] p-4 text-xl shadow-xl w-[70%] rounded-md flex justify-center font-bold  mx-auto text-black mt-5'>Save Changes</button>
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
                            <form onSubmit={handleUpdatePassword} >
                                <div>
                                    <label className='text-white text-md'>Old Password*</label><br />
                                    <div className='shadow-xl w-96 mt-3 relative rounded-xl'>
                                        <input
                                            type={oldPassword ? 'text' : 'password'}
                                            placeholder='**********'
                                            name='old_password'
                                            required
                                            value={passwordFormData.old_password} onChange={handleChangePassword}
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
                                            name='password'
                                            required
                                            value={passwordFormData.password} onChange={handleChangePassword}
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
                                            name='confirm_password'
                                            required
                                            value={passwordFormData.confirm_password} onChange={handleChangePassword}
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
                            </form> </div>

                    </div>}
                </div>
            </div>
            {loader ? <Loader /> : null}
        </div>
    )
}