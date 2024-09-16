"use client";
import React, { useState } from 'react';
import Image from 'next/image'; 
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

const AdminSidebar = () => {
  const [activeLink, setActiveLink] = useState('');
  const router = useRouter("")


  const handleClick = (link) => {
    setActiveLink(link);
  };

  const handleLogout = () => {
    Cookies.remove('authToken');
    router.push("/signin");
  };

  return (
   <div className='lg:block hidden'>
     <div className='bg-[#FFF8B3]  w-64 flex flex-col fixed left-0 right-0 top-[68px] pt-5 2xl:h-[93vh] h-[89vh]'>
      <div className='text-black text-sm font-semibold'>
        
        <div className="h1-hover-effect">
          <h1
            className={`pl-10 p-3 flex items-center gap-1 ${activeLink === 'todo' ? 'border-4 border-l-black border-y-transparent border-r-transparent hover-design' : ''}`}
          >
            <Image src="/todo.png" alt="todo" width="20" height="20" />
            <a href="#" onClick={() => handleClick('todo')}>To-Do</a>
          </h1>
        </div>

        <div className="h1-hover-effect">
          <h1
            className={`pl-10 p-3 flex items-center gap-1 ${activeLink === 'users' ? 'border-4 border-l-black border-y-transparent border-r-transparent hover-design' : ''}`}
          >
            <Image src="/profile.png" alt="users" width="20" height="20" />
            <a href='/admin/users' onClick={() => handleClick('users')}>Users</a>
          </h1>
        </div>

        <div className="h1-hover-effect">
          <h1
            className={`pl-10 p-3 flex items-center gap-1 ${activeLink === 'courts' ? 'border-4 border-l-black border-y-transparent border-r-transparent hover-design' : ''}`}
          >
            <Image src="/home.png" alt="courts" width="20" height="20" />
            <a href='/admin/courts' >Courts</a>
          </h1>
        </div>

        <div className="h1-hover-effect">
          <h1
            className={`pl-10 p-3 flex items-center gap-1 ${activeLink === 'reviews' ? 'border-4 border-l-black border-y-transparent border-r-transparent hover-design' : ''}`}
          >
            <Image src="/stars (1).png" alt="reviews" width="20" height="20" />
            <a href="#" onClick={() => handleClick('reviews')}>Reviews</a>
          </h1>
        </div>

        <div className="h1-hover-effect">
          <h1
            className={`pl-10 p-3 flex items-center gap-1 ${activeLink === 'checkins' ? 'border-4 border-l-black border-y-transparent border-r-transparent hover-design' : ''}`}
          >
            <Image src="/location-tick.png" alt="check-ins" width="20" height="20" />
            <a href="#" onClick={() => handleClick('checkins')}>Check-ins</a>
          </h1>
        </div>

        <div className="h1-hover-effect">
          <h1
            className={`pl-10 p-3 flex items-center gap-1 ${activeLink === 'reports' ? 'border-4 border-l-black border-y-transparent border-r-transparent hover-design' : ''}`}
          >
            <Image src="/book.png" alt="reports" width="20" height="20" />
            <a href="#" onClick={() => handleClick('reports')}>Reports</a>
          </h1>
        </div>

        <div className="h1-hover-effect">
          <h1
            className={`pl-10 p-3 flex items-center gap-1 ${activeLink === 'catalog' ? 'border-4 border-l-black border-y-transparent border-r-transparent hover-design' : ''}`}
          >
            <Image src="/bubble.png" alt="catalog" width="20" height="20" />
            <a href="#" onClick={() => handleClick('catalog')}>Catalog</a>
          </h1>
        </div>

        <div className="h1-hover-effect">
          <h1
            className={`pl-10 p-3 flex items-center gap-1 ${activeLink === 'orders' ? 'border-4 border-l-black border-y-transparent border-r-transparent hover-design' : ''}`}
          >
            <Image src="/shopping-cart.png" alt="orders" width="20" height="20" />
            <a href="#" onClick={() => handleClick('orders')}>Orders</a>
          </h1>
        </div>
      </div>

      <div className='absolute bottom-0 left-2'>
        <button className='bg-[#FFA500] text-white rounded-md p-3 text-xl w-60 text-center'onClick={handleLogout} >Log Out</button>
        <p className='text-black mt-2 text-sm text-center'>Developed by <a href='#' className='text-black font-bold'>Mayonity</a></p>
      </div>
    </div>
   </div>
  );
}

export default AdminSidebar;
