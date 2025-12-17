import React from 'react'
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {


  const navigate = useNavigate();
  return (
    <>  
    <div className='w-full flex justify-between text-center font-semibold'>
      <div className='flex items-center gap-2'>
        <MdOutlineKeyboardArrowLeft onClick={()=>navigate(-1)} className='bg-black p-2 rounded-2xl cursor-pointer' size={35}/>
        <MdOutlineKeyboardArrowRight onClick={()=>navigate(+1)} className='bg-black p-2 rounded-2xl cursor-pointer' size={35}/>

      </div>

<div className='flex items-center gap-4'>
    <p className='bg-white text-black text-[15px] px-4 
    py-1 rounded-2xl hidden md:block cursor-pointer'>Explore Premium</p>
    <p className='bg-black py-1 px-4 rounded-2xl text-[15px] cursor-pointer'>Install App</p>
    <p className='bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center '>T</p>
</div>
</div>

<div className='flex items-center gap-2 mt-4'>
    <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>
     <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
     <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Podcasts</p>
</div>


    
    </>
  
  )
}

export default Navbar
