import React from 'react'
import Image from 'next/image'
const basketBall = () => {
    return (
        <div>
            <div className='text-3xl font-bold flex justify-center items-center gap-2'>
                <h1 className='text-[#FFA500]'>Best Rated </h1>
                <h1>Basketball Court</h1>
            </div>
            <div className='flex mt-10 justify-center gap-10'>
                <div className='bg-[#D9D9D9] shadow text-black rounded-md w-[330px]'>
                    <Image src="/basketBALL.png" alt="image" width={343} height={228} className='rounded-t-xl'/>
                    <div className='m-5'>
                        <div className='flex  items-center gap-10'>
                            <Image src="/star.png" alt="image" width={112} height={20} />
                            <p className='text-[10px] '>64 reviews</p>

                        </div>

                        <h1 className='text-xl font-bold mt-5'>Skyline Hoops Haven</h1>
                        <p className='text-md font-medium'>Location:</p>
                        <p className='w-32 text-xs font-medium mt-1'>123 Elm Street Cityville, State 56789 United States</p>
                        <button className='bg-[#FFA500] p-2  text-black font-bold text-sm w-full shadow'>View Court</button>

                        <button className='bg-gray-200  p-2 mt-2 text-black font-bold text-sm w-full shadow'>Add to Cart</button>
                    </div>
                </div>
                <div className='bg-[#D9D9D9] shadow text-black rounded-md w-[330px]'>
                    <Image src="/basketBALL.png" alt="image" width={343} height={228} className='rounded-t-xl'/>
                    <div className='m-5'>
                        <div className='flex  items-center gap-10'>
                            <Image src="/star.png" alt="image" width={112} height={20} />
                            <p className='text-[10px] '>64 reviews</p>

                        </div>

                        <h1 className='text-xl font-bold mt-5'>Skyline Hoops Haven</h1>
                        <p className='text-md font-medium'>Location:</p>
                        <p className='w-32 text-xs font-medium mt-1'>123 Elm Street Cityville, State 56789 United States</p>
                        <button className='bg-[#FFA500] p-2  text-black font-bold text-sm w-full shadow'>View Court</button>

                        <button className='bg-gray-200  p-2 mt-2 text-black font-bold text-sm w-full shadow'>Add to Cart</button>
                    </div>
                </div>
                <div className='bg-[#D9D9D9] shadow text-black rounded-md w-[330px]'>
                    <Image src="/basketBALL.png" alt="image" width={343} height={228} className='rounded-t-xl'/>
                    <div className='m-5'>
                        <div className='flex  items-center gap-10'>
                            <Image src="/star.png" alt="image" width={112} height={20} />
                            <p className='text-[10px] '>64 reviews</p>

                        </div>

                        <h1 className='text-xl font-bold mt-5'>Skyline Hoops Haven</h1>
                        <p className='text-md font-medium'>Location:</p>
                        <p className='w-32 text-xs font-medium mt-1'>123 Elm Street Cityville, State 56789 United States</p>
                        <button className='bg-[#FFA500] p-2  text-black font-bold text-sm w-full shadow'>View Court</button>

                        <button className='bg-gray-200  p-2 mt-2 text-black font-bold text-sm w-full shadow'>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default basketBall
