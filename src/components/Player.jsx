import React from 'react'
import { songsData } from '../assets/assets'
import { PiQueue, PiShuffle } from 'react-icons/pi'
import { ImNext2, ImPrevious2 } from 'react-icons/im'
import { FaMicrophone, FaPlay } from 'react-icons/fa'
import { RxLoop } from 'react-icons/rx'
import { AiTwotonePlaySquare } from 'react-icons/ai'
import { MdOutlineSpeaker } from 'react-icons/md'
import { IoVolumeMediumSharp } from 'react-icons/io5'
import { CgMiniPlayer } from 'react-icons/cg'
import { CiZoomIn } from 'react-icons/ci'

const Player = () => {
  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
       <div className='hidden lg:flex items-center gap-4 '>
        <img className='w-12' src={songsData[0].image} />
        <div>
            <p>{songsData[0].name}</p>
            <p>{songsData[0].desc.slice(0,12)}</p>
        </div>
</div>

<div className='flex flex-col items-center gap-1 m-auto'>
  <div className='flex gap-4'>
    <PiShuffle className='cursor-pointer' size={25}/>
    <ImPrevious2  className='cursor-pointer' size={25}/>
    <FaPlay  className='cursor-pointer' size={25}/>
    <ImNext2  className='cursor-pointer' size={25}/>
    <RxLoop  className='cursor-pointer' size={25}/>
  </div>

  <div className='flex items-center gap-5'>
    <p>1:03</p>
    <div className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
      <hr className='h-1 border-none w-25 bg-green-800 rounded-full'/>
    </div>
    <p>3:50</p>

  </div>
</div>

<div className='hidden lg:flex items-center gap-2 opacity-75'>
<AiTwotonePlaySquare />
<FaMicrophone />
<PiQueue />
<MdOutlineSpeaker />
<IoVolumeMediumSharp /><div className='w-20 bg-slate-50 h-1'></div>
<CgMiniPlayer />
<CiZoomIn />





</div>

    </div>
  )
}

export default Player
