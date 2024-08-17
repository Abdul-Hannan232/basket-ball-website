import React from 'react'
import Image from 'next/image'
const Adminsidebar = () => {
  return (
    <div className='bg-[#FFF8B3] w-64 flex flex-col fixed left-0 right-0 top-[68px]   pt-5 items- h-[89vh]'>
      <div className=' text-black text-sm  font-semibold '>
        <div className="h1-hover-effect ">
          <h1 className='pl-10 p-3 flex items-center gap-1'>
            <Image src="/todo.png" alt="todo" width="20" height="20" />
            <a href='#'>To-Do</a>
          </h1>
        </div>
        <div className="h1-hover-effect ">
          <h1 className='pl-10 p-3 flex items-center gap-1'>
            <Image src="/profile.png" alt="todo" width="20" height="20" />

            <a href='/admin/users'>Users</a>
          </h1>
        </div>

        <div className="h1-hover-effect ">
          <h1 className='pl-10 p-3 flex items-center gap-1'>
            <Image src="/home.png" alt="todo" width="20" height="20" />

            <a href='/admin/usersDetail'>Courts</a>
          </h1>
        </div>
        <div className="h1-hover-effect ">
          <h1 className='pl-10 p-3 flex items-center gap-1'>
            <Image src="/stars (1).png" alt="todo" width="20" height="20" />

            <a href='#'>Reviews</a>
          </h1>
        </div>
        <div className="h1-hover-effect ">
          <h1 className='pl-10 p-3 flex items-center gap-1'>
            <Image src="/location-tick.png" alt="todo" width="20" height="20" />

            <a href='#'>Check-ins</a>
          </h1>
        </div>
        <div className="h1-hover-effect ">
          <h1 className='pl-10 p-3 flex items-center gap-1'>
            <Image src="/book.png" alt="todo" width="20" height="20" />

            <a href='#'>Reports</a>
          </h1>
        </div>
        <div className="h1-hover-effect ">
          <h1 className='pl-10 p-3 flex items-center gap-1 '>
            <Image src="/bubble.png" alt="todo" width="20" height="20" />

            <a href='#'>Catalog</a>
          </h1>     </div>
        <div className="h1-hover-effect ">
          <h1 className='pl-10 p-3 flex items-center gap-1'>
            <Image src="/shopping-cart.png" alt="todo" width="20" height="20" />

            <a href='#'>Orders</a>
          </h1>
        </div>
      </div>
      <div className='absolute bottom-0 left-2'>
        <button className='bg-[#FFA500] text-white  rounded-md p-3 text-xl  w-60 text-center'>Log Out</button>
        <p className='text-black mt-2 text-sm text-center '>Developed by <a href='#' className='text-black font-bold'>Mayonity</a></p>
      </div>
    </div>
  )
}

export default Adminsidebar
