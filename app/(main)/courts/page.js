import React from 'react'
import { CiFilter } from "react-icons/ci";
import Navbar from '../../component/NavBarComponent';
import Court from "../../component/CourtsSlider"
import Footer from '../../component/FooterComponent';
const CourtsPage = () => {
    return (
        <> 
            <Navbar />
            <div className='md:w-[80%] md:mx-auto mx-5 mt-10 flex items-center justify-between'>

                <div className=' flex items-center md:gap-4 gap-1'>
                    <h1 className='md:text-3xl text-md'>Basketballs Courts</h1>
                    <CiFilter className='text-[#FFA500] md:text-3xl text-xl' />
                </div>
                <button className='bg-[#FFA500]   rounded-md md:text-xl text-sm text-black md:px-16 px-3 py-2 shadow '>Add Court</button>
            </div>
            <Court slide={"box"}/>
            <div className='w-[80%] mx-auto mt-40 flex items-center gap-2'>
                <h1 className='text-[#FFA500] text-2xl font-bold'>Map</h1>
                <h1 className='text-white text-2xl font-bold'>View</h1>
            </div>
            <div className='mt-10 mb-40'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d57939.403949465006!2d67.15371090000001!3d24.8223971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1723305059891!5m2!1sen!2s"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <Footer />
        </>
    )
}

export default CourtsPage
