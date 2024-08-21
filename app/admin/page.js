"use client"
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { useRouter } from 'next/navigation';


export default function AdminDashboard  () {
  const [username, setUsername] = useState('');
  const router = useRouter("")

  const handleLogout = () => {
    Cookies.remove('authToken');
    router.push("/");
  };
  useEffect(() => {
    const token = Cookies.get('authToken');
    if (token) {
      const decodedToken = jwtDecode(token);
      setUsername(decodedToken.name); // Assuming 'name' is the key for the username in the token
    }
  }, []);

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className='text-2xl font-bold text-center'>Welcome to Your Dashboard, {username}</h1>
      <p className='text-lg text-gray-600 mt-2 text-center'>This dashboard is currently under development and will be ready for use soon.</p>
      <br />
      <button className='w-40 text-center p-3 rounded-md bg-black shadow-xl text-white' onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}