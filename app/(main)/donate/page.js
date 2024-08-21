import React from 'react'
import Image from "next/image"
import Navbar from '../../component/NavBarComponent'
import Footer from '../../component/FooterComponent'
const Donate = () => {
    return (
        <div>
            <Navbar />
            <h1 className="md:mb-10 mb-5 md:mt-40 mt-24 md:text-5xl text-xl font-bold text-center ">Donate Now</h1>
            <div className='2xl:w-[30%] md:w-[50%] w-[90%] shadow mx-auto md:p-14 p-8 mb-40'>
                <p className='md:text-xl text-lg'>Your Donation    </p>
                <div className='flex items-center mt-5 justify-center md:gap-5 gap-2'>
                    <button className='bg-[#FFA500] text-[#011344]  md:text-xl text-sm font-bold text-center p-3 md:w-44 w-40 rounded-lg'>SGD</button>
                    <button className='bg-white text-black text-center md:text-xl text-sm font-bold  p-3 md:w-44 w-40 rounded-lg'>$ 50 </button>
                    <button className='bg-white text-black text-center md:text-xl text-sm font-bold  p-3 md:w-44 w-40 rounded-lg'>$ 100</button>
                </div>
                <input placeholder='Enter other amount ' className='rounded-md h-10 w-full md:p-10 p-7 mt-5 bg-[#333333] text-sm shadow border border-[#808080]' />
                <div className='bg-[#FFA500] w-full p-4 md:h-20 h-14 mt-5'>
<Image src="/paypal.png" alt="paypal" width={179.64} height={52} className='mx-auto'/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Donate
