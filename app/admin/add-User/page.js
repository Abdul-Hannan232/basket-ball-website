import React from 'react';
import AddNewUser from '../../component/admin/AddNewUser'
import Sidebar from '../../component/adminsidebar';
export default function UserDetail() {

    return (
        <>
            <div className='flex'>
                <div className='bg-[#FFA500] p-4 pl-7 fixed top-0 right-0 left-0 flex items-center text-white'>
                    <h1 className='text-3xl font    -bold'>Basketball</h1>
                    <div className='border-2 border-y-transparent border-r-transparent mx-20 pl-5 border-white'>
                        <h1 className='text-sm'> User </h1>
                        <h1 className='text-lg font-bold'>Add User</h1>
                    </div>
                </div>
            </div>
            <div className='flex bg-white mt-20 w-[81.5%]  float-right text-black'>
                <AddNewUser />
            </div>
        </>
    );
}