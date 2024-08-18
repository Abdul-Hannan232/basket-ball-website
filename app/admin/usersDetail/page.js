import React from 'react';
import Sidebar from "../../component/adminsidebar"
import AddUser from '../../component/addUser'
export default function TemplateDemo() {
    return (
        <>
            <div className='bg-[#FFA500] p-4 pl-7 fixed top-0 right-0 left-0 flex  items-center text-white'>

                <h1 className='text-3xl font-bold'>Basketball</h1>
                <div className='border-2 border-y-transparent border-r-transparent mx-20 pl-5 border-white'>
                    <h1 className='text-lg'> User (25)</h1>
                </div>
            </div>
            <div className='flex bg-white  mt-16 w-[81.5%] float-right text-black'>
                <Sidebar />
                 <AddUser />

            </div>
        </>
    );
}
