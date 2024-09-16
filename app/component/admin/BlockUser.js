import React from 'react'
import { RxCross2 } from "react-icons/rx";
import Image from 'next/image';

const BlockUser = ({ onClose, onBlockUser, user, onSetRemarks,remarks }) => {
  return (
    <div>
       <div>
          <div className='flex flex-col justify-center bg-gray-700 bg-opacity-40 items-center h-screen absolute top-0 left-0 right-0 '>
            <div className='bg-white lg:w-[450px] rounded-xl lg:p-5 p-3 w-[90%] shadow-xl '>
              <div className='cursor-pointer bg-white rounded-full lg:w-10 lg:h-10 w-8 h-8 flex flex-col float-right justify-center items-center text-center shadow-xl'onClick={onClose}><RxCross2 className='text-[#F60606] lg:text-xl text-lg' />
              </div>
              <h1 className='text-black text-center font-bold lg:mt-5 mt-4 lg:text-2xl text-xl  '>Block User </h1>
              <p className='text-[#787878] lg:text-xs text-[10px] lg:text-start text-center my-3 mx-5'>Blocking the user will restrict their access to the admin panel and associated functionalities.</p>
              <div className='flex my-5 gap-4 mx-5'>
                <h1 className='lg:text-lg text-sm text-black'>Remarks</h1>
                <textarea className='lg:w-80 lg:h-16 h-12 border border-[#B6B6B6] rounded-md text-black' 
                required 
                onChange={(e) => onSetRemarks(e.target.value)}
                value={remarks}
                ></textarea>
              </div>
              <div className='flex items-center mt-8 justify-center lg:gap-10 gap-5 mb-5'>
                <button className='bg-[#F4F5F7] p-2 lg:w-32 w-20 text-sm text-black rounded-md lg:h-12 h-10 '   onClick={onClose}>Cancel</button>
                <button className='bg-[#F60606] p-2 lg:w-32 w-20 text-sm rounded-md lg:h-12 h-10' onClick={()=>{onBlockUser(user)} }>Block</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default BlockUser
