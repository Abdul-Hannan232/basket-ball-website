import React from 'react'
import Navbar from '../../component/navbar'
import Image from 'next/image'
import { CiSearch } from "react-icons/ci"
import  Footer from "../../component/footer"
import BasketBall from "../../component/basketBall"
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='mt-12 banner  h-[100vh]'  >
        <div className='relative  flex flex-col justify-center items-center h-[90vh] '>
          <div className='bg-white absolute w-[55%] mx-auto h-80 flex flex-col justify-center it-center  bg-opacity-60 rounded-xl  right-0 left-0'>
            <div className='relative mx-10 border bg-white text-black flex items-center p-7 rounded-full '>
              <input type='text' placeholder='Search Here' className='text-black' />
              <CiSearch className="absolute text-black w-20 right-0 text-4xl border-2 border-[#808080] border-t-transparent border-r-transparent border-b-transparent  top-6" />
            </div>
            <div className='flex justify-center gap-3 mt-7 '>
              <div className='bg-[#011344] text-center text-[#FFA500] flex flex-col justify-center items-cente rounded-[20px] p-4 w-24 '>

                <Image src="/basket.png" alt="basket" width={100} height={50} className='w-12 mx-auto h-12 ' />
                <p className='text-[10px]'>X Courts</p>
              </div>
              <div className='bg-[#011344] text-center text-[#FFA500] rounded-[20px] p-4 w-24 '>

                <Image src="/user.png" alt="basket" width={100} height={50} className='w-10 mx-auto h-14 ' />
                <p className='text-[10px]'>X users</p>
              </div>
              <div className='bg-[#011344] text-center flex flex-col justify-center items-center text-[#FFA500] rounded-[20px] p-4 w-24 '>

                <Image src="/thumb.png" alt="basket" width={100} height={50} className='w-12 mx-auto h-12 ' />
                <p className='text-[10px]'>X reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BasketBall />
      <Footer/>
    </div>
  )
}

export default Home
