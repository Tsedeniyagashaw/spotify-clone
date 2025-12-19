import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { PiQueue, PiShuffle } from 'react-icons/pi'
import { ImNext2, ImPrevious2 } from 'react-icons/im'
import { FaMicrophone, FaPause, FaPlay } from 'react-icons/fa'
import { RxLoop } from 'react-icons/rx'
import { AiTwotonePlaySquare } from 'react-icons/ai'
import { MdOutlineSpeaker } from 'react-icons/md'
import { IoVolumeMediumSharp } from 'react-icons/io5'
import { CgMiniPlayer } from 'react-icons/cg'
import { CiZoomIn } from 'react-icons/ci'
import { PlayerContext } from '../context/PlayerContext'

const Player = () => {

 const {track, seekBar ,seekBg ,playerStatus , play, pause, time, previous, next , seekSong } = useContext(PlayerContext)

  
  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
       <div className='hidden lg:flex items-center gap-4 '>
        <img className='w-12' src={track.image} />
        <div>
            <p>{track.name}</p>
            <p>{track.desc.slice(0,12)}</p>
        </div>
</div>

<div className='flex flex-col items-center gap-1 m-auto'>
  <div className='flex gap-4'>
    <PiShuffle className='cursor-pointer' size={25}/>
    <ImPrevious2 onClick={previous}  className='cursor-pointer' size={25}/>

    {playerStatus ? <FaPause onClick={pause}  className='cursor-pointer' size={25}/>
    : <FaPlay onClick={play}  className='cursor-pointer' size={25}/>
    
    }
   
    <ImNext2 onClick={next}  className='cursor-pointer' size={25}/>
    <RxLoop  className='cursor-pointer' size={25}/>
  </div>

  <div className='flex items-center gap-5'>
    <p>{time.currentTime.minute}:{time.currentTime.second}</p>
    <div ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
      <hr ref={seekBar} className='h-1 border-none w-0 bg-green-800 rounded-full'/>
    </div>
    <p>{time.totalTime.minute}:{time.totalTime.second}</p>

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


