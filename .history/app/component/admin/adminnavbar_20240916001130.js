import React,{useState} from 'react'

const Adminnavbar = () => {
    const [allUsers, setAllUsers] = useState([]);

  return (
    <div>
        <div className='bg-[#FFA500] p-4 pl-7 fixed top-0 right-0 left-0 flex items-center text-white'>
        <h1 className='text-3xl font-bold'>Basketball</h1>
        <div className='border-2 border-y-transparent border-r-transparent mx-20 pl-5 border-white'>
          <h1 className='text-lg'> User {allUsers.length}</h1>
        </div>
      </div>
    </div>
  )
}

export default Adminnavbar
