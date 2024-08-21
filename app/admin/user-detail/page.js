import React from 'react';
import AddNewUser from '../../component/admin/AddNewUser'
export default function UserDetail() {
    return (
        <>
            {/* <div className='bg-[#FFA500] p-4 pl-7 fixed top-0 right-0 left-0 flex  items-center text-white'>
                <h1 className='text-3xl font-bold'>Basketball</h1>
                <div className='border-2 border-y-transparent border-r-transparent mx-20 pl-5 border-white'>
                    <h1 className='text-lg'> User (25)</h1>
                </div>
            </div>
            <div className='flex bg-white  mt-16 w-[81.5%] float-right text-black'>
                <div className='w-screen '>
                    <div className='border border-[#CACACA] m-5 rounded-xl m-5'>
                        <div className='pl-10 md:text-xl text-md rounded-t-xl border-2 h-24 bg-[#F4F4F4] text-black font-bold  border-[#CACACA] gap-10 flex items-center'>
                            <h1>User  Details (Personal)</h1>
                        </div>
                        <div className='border-2 border-[#CACACA] mx-auto mt-20 w-[80%]  rounded-3xl'>
                            <div className='md:flex items-center justify-between gap-10 px-3'>
                                <div className='flex items-center  gap-10 p-5'>
                                    <Image src="/usericon.png" alt="image" width={140} height={140} />
                                    <div>
                                        <h1 className='text-xl  text-black font-bold'>John Doe</h1>
                                        <p className='text-sm text-[#636161]'>example123@gmail.com</p>
                                    </div>
                                </div>
                                <div className='p-3 rounded-xl flex items-center gap-2 border border-[#CACACA]'>
                                    <h1 className='text-xs  '>Edit profile picture</h1>
                                    <Image src="/edit.png" alt="image" width={20} height={20} />
                                </div>
                            </div>
                        </div>
                        <div className='w-[80%] mx-auto grid grid-cols-2 gap-5 my-20'>
                            <div >
                                <label className='text-black font-bold text-md'>Display Name*</label><br />
                                <input type='text' placeholder='John Doe' className='text-black p-3 border-2 border-[#CACAC] w-96 mt-3 rounded-xl' />
                            </div>
                            <div >
                                <label className='text-black font-bold text-md'>First Name  *</label><br />
                                <input type='text' placeholder='John' className='text-black p-3 border-2 border-[#CACAC] w-96 mt-3 rounded-xl' />
                            </div>
                            <div >
                                <label className='text-black font-bold text-md'>Email  *</label><br />
                                <input type='text' placeholder='info@centralparknyc.com' className='text-black p-3 border-2 border-[#CACAC] w-96 mt-3 rounded-xl' />
                            </div>
                            <div >
                                <label className='text-black font-bold text-md'>Last Name*</label><br />
                                <input type='text' placeholder='Doe' className='text-black p-3 border-2 border-[#CACAC] w-96 mt-3 rounded-xl' />
                            </div>
                            <div >
                                <label className='text-black font-bold text-md'>Height*</label><br />
                                <input type='text' placeholder='190 cm' className='text-black p-3 border-2 border-[#CACAC] w-96 mt-3 rounded-xl' />
                            </div>
                            <div >
                                <label className='text-black font-bold text-md'>Weight*</label><br />
                                <input type='text' placeholder='110 KG' className='text-black p-3 border-2 border-[#CACAC] w-96 mt-3 rounded-xl' />
                            </div>
                            <div >
                                <label className='text-black font-bold text-md'>Phone (optional)*</label><br />
                                <input type='text' placeholder='555-123-4567' className='text-black p-3 border-2 border-[#CACAC] w-96 mt-3 rounded-xl' />
                            </div>
                            <div >
                                <label className='text-black font-bold text-md'>Joined Since*</label><br />
                                <input type='text' placeholder='01/02/17' className='text-black p-3 border-2 border-[#CACAC] w-96 mt-3 rounded-xl' />
                            </div>
                            <div >
                                <label className='text-black font-bold text-md'>Country*</label><br />
                                <input type='text' placeholder='USA' className='text-black p-3 border-2 border-[#CACAC] w-96 mt-3 rounded-xl' />
                            </div>
                            <div >
                                <label className='text-black font-bold text-md'>Role*</label><br />
                                <input type='text' placeholder='Admin' className='text-black p-3 border-2 border-[#CACAC] w-96 mt-3 rounded-xl' />
                            </div>

                        </div>
                    </div>
                    <div className='border border-[#CACACA] m-5 rounded-xl mt-20'>
                        <div className='pl-10 text-xl  rounded-t-xl border-2 h-24 bg-[#F4F4F4] text-black font-bold  border-[#CACACA] gap-10 flex items-center'>
                            <h1>User  Details (Team Info)</h1>

                        </div>
                        <div className='w-[80%] mx-auto grid grid-cols-2 justify-between gap-10 mt-10'>
                            <div >
                                <label className='text-black font-bold text-md'>Team Name</label><br />
                                <input type='text' placeholder='Hoop Dreamers' className='text-black p-3 border-2 border-[#CACAC] w-96 mt-3 rounded-xl' />
                            </div>
                            <div >
                                <label className='text-black font-bold text-md'>Jersey Number</label><br />
                                <input type='text' placeholder='23' className='text-black p-3 border-2 border-[#CACAC] w-96 mt-3 rounded-xl' />
                            </div>
                            <div >
                                <label className='text-black font-bold text-md'>Position</label><br />
                                <input type='text' placeholder='Point Guard' className='text-black p-3 border-2 border-[#CACAC] w-96 mt-3 rounded-xl' />
                            </div>
                        </div>
                        <div className='flex justify-end mb-10 w-[75%] mx-auto '>
                            <div className='flex items-center  gap-5 w-[370px]  '>
                                <Button label='Cancel' className='mt-10 text-white p-4 w-20 border-2 border-[#9A9A9A] text-[#9A9A9A] bg-white rounded-xl w-full' />
                                <Button label='Save' className='mt-10 text-white p-4 w-20 border-none text-white bg-[#269C55] rounded-xl w-full' />
                            </div>
                        </div>
                    </div>
                </div>

            </div> */}

            <AddNewUser />
        </>
    );
}
