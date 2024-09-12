import React from 'react'
import CourtForm from "../../component/admin/CourtForm"
const CourtDetail = () => {
  return (
    <div>
         <div className='bg-[#FFA500] p-4 pl-7 fixed top-0 right-0 left-0 flex items-center z-40 text-white'>
                <h1 className='text-3xl font-bold'>Basketball</h1>
                <div className='border-2 border-y-transparent border-r-transparent mx-20 pl-5 border-white'>
                    <p className='text-xs'>Courts</p>
                    <h1 className='text-lg'>Add Courts</h1>

                </div>
            </div>
      <CourtForm/>
    </div>
  )
}

export default CourtDetail
