"use client"
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from '../../services/ProductService';
import Sidebar from "../../component/adminsidebar"
import Image from 'next/image';
export default function TemplateDemo() {
    const [products, setProducts] = useState([]);



    return (
        <>
            <div className='bg-[#FFA500] p-4 pl-7 fixed top-0 right-0 left-0 flex  items-center text-white'>

                <h1 className='text-3xl font-bold'>Basketball</h1>
                <div className='border-2 border-y-transparent border-r-transparent mx-20 pl-5 border-white'>
                    <h1 className='text-lg'> User (25)</h1>
                </div>
            </div>
            <div className='flex bg-white mt-16 w-[81.5%] h-screen float-right text-black'>
                <Sidebar />
                <div className='w-screen '>
                    <div className='pl-10 text-xl m-5 rounded-t-xl border-2 h-24 bg-[#F4F4F4] text-black font-bold  border-[#CACACA] gap-10 flex items-center'>
                        <h1>User  Details (Personal)</h1>

                    </div>
                    <div className='border-2 border-[#CACACA] w-[80%] mx-a rounded-xl'>
                        <div>
                            <Image src="" alt="image" />
                            <div>
                                <h1 className='text-2xl'>John Doe</h1>
                                <p className='text-sm text-[#636161]'>example123@gmail.com</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
