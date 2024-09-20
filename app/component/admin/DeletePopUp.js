import React from 'react'
import { RxCross2 } from "react-icons/rx";
import Image from 'next/image';

const DeletePopUp = ({title,description,record,onDeleteRecord,onClose}) => {
   
    return (
        <div>
            <div className='flex flex-col justify-center bg-gray-700 bg-opacity-40 items-center h-screen absolute top-0 left-0 right-0 '>
                <div className='bg-white text-center lg:w-[500px] rounded-xl lg:p-5 p-3 w-[90%] shadow-xl '>
                    <div onClick={onClose} className='cursor-pointer bg-white rounded-full lg:w-10 lg:h-10 w-8 h-8 flex flex-col float-right justify-center items-center text-center shadow-xl'><RxCross2 className='text-[#F60606] lg:text-xl text-md' />
                    </div>
                    <Image src="/trash.png" alt="dustbin" width="30" height="50" className='lg:mx-auto mx-28 lg:mt-14 mt-5 my-3 ' />
                    <h1 className='text-[#313131] font-bold lg:text-xl text-sm'>{title}</h1>
                    <p className='text-[#787878] lg::text-xs text-[10px] my-3 mx-10'>{description}</p>
                    <div className='flex items-center mt-8 justify-center lg:gap-10 gap-5 mb-10'>
                        <button className='bg-[#F4F5F7] p-2 lg:w-32 w-20 lg:text-sm text-[10px] text-black rounded-md lg:h-12 h-8 ' onClick={onClose}>No, Keep it</button>
                        <button className='bg-[#F60606] p-2 lg:w-32 w-20 lg:text-sm text-[10px] rounded-md lg:h-12 h-8' onClick={()=>{onDeleteRecord(record)} }>Yes, Delete it</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeletePopUp
