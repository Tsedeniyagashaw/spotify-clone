import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
// import { assets } from '../assets/assets'
import { GrHomeRounded } from 'react-icons/gr'
import { IoIosArrowRoundDown, IoIosArrowRoundForward, IoIosSearch, IoMdArrowForward } from 'react-icons/io'
import { MdLibraryMusic } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {

  const navigate  = useNavigate();

  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
      <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
    <div onClick={()=>navigate('/')} className='flex items-center gap-3 pl-8 cursor-pointer'>
       <GrHomeRounded  size={25}/>
     <p className='font-bold'>Home</p>
    </div>

      <div className='flex items-center gap-3 pl-8 cursor-pointer'>
       <IoIosSearch  size={25}/>
     <p className='font-bold'>Search</p>
    </div>
      </div>

<div className='bg-[#121212] h-[85%] rounded'>
    <div className='p-4 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
            <MdLibraryMusic size={25} />

            <p className='font'>Your Library</p>

        </div>

        <div className='flex items-center gap-3'> 

            <IoMdArrowForward size={30} />
            <AiOutlinePlus size={25}/>

        </div>

    </div>

    <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start 
    justify-start gap-1 pl-4'>
        <h1>Create Your Favorite playlist</h1>
        <p className='font-light'>it's easy we will help you</p>
                   <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Create PLayilst</button>
    </div>

       <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start 
    justify-start gap-1 pl-4 mt-4'>
        <h1>Let's Find some podcasts to follow</h1>
        <p className='font-light'>we'll keep you update on new episodes</p>
                   <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Browse Podcasts</button>
    </div>

</div>

    </div>
  )
}

export default Sidebar
