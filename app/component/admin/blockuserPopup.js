import React from 'react'
import { RxCross2 } from "react-icons/rx";
import Image from 'next/image';

const BlockuserPopup = ({popup}) => {
  return (
    <div>
       <div>
          <div className='flex flex-col justify-center bg-gray-700 bg-opacity-40 items-center h-screen absolute top-0 left-0 right-0 '>
            <div className='bg-white w-[450px] rounded-xl p-5 shadow-xl '>
              <div className='cursor-pointer bg-white rounded-full w-10 h-10 flex flex-col float-right justify-center items-center text-center shadow-xl'onClick={popup}><RxCross2 className='text-[#F60606] text-xl' />
              </div>
              <h1 className='text-black text-center font-bold mt-5 text-2xl'>Block User </h1>
              <p className='text-[#787878] text-xs my-3 mx-5'>Blocking the user will restrict their access to the admin panel and associated functionalities.</p>
              <div className='flex my-5 gap-4 mx-5'>
                <h1 className='text-black'>Remarks</h1>
                <textarea className='w-80 h-16 border border-[#B6B6B6] rounded-md'></textarea>
              </div>
              <div className='flex items-center mt-8 justify-center gap-10 mb-5'>
                <button className='bg-[#F4F5F7] p-2 w-32 text-sm text-black rounded-md h-12 'onClick={popup}>Cancel</button>
                <button className='bg-[#F60606] p-2 w-32 text-sm rounded-md h-12' >Block</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default BlockuserPopup
