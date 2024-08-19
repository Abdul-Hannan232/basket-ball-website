import React from 'react'
import { RxCross2 } from "react-icons/rx";
import Image from 'next/image';

const DeleteUser = ({ functions }) => {
    return (
        <div>
            <div className='flex flex-col justify-center bg-gray-700 bg-opacity-40 items-center h-screen absolute top-0 left-0 right-0 '>
                <div className='bg-white text-center w-[500px] rounded-xl p-5 shadow-xl '>
                    <div onClick={functions} className='cursor-pointer bg-white rounded-full w-10 h-10 flex flex-col float-right justify-center items-center text-center shadow-xl'><RxCross2 className='text-[#F60606] text-xl' />
                    </div>
                    <Image src="/trash.png" alt="dustbin" width="30" height="50" className='mx-auto mt-14 my-3' />
                    <h1 className='text-[#313131] font-bold text-xl'>Are you want to delete this user? </h1>
                    <p className='text-[#787878] text-xs my-3 mx-10'>Do you really want to delete this user? Deleting them will limit their access.</p>
                    <div className='flex items-center mt-8 justify-center gap-10 mb-10'>
                        <button className='bg-[#F4F5F7] p-2 w-32 text-sm text-black rounded-md h-12 '>No, Keep it</button>
                        <button className='bg-[#F60606] p-2 w-32 text-sm rounded-md h-12' onClick={functions}>Yes, Delete it</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteUser
