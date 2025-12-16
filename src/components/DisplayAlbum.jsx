import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData } from '../assets/assets';
import { FaSpotify } from 'react-icons/fa';

const DisplayAlbum = () => {

    const {id} = useParams();
    const albumData = albumsData[id];
  return (
    <>
      <Navbar />
      <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
           <img className='w-48 rounded' src={albumData.image} alt="" />
           <div className='flex flex-col'>
            <p>Playlist</p>
          <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
          <h4>{albumData.desc}</h4>
          <p className='mt-1'>
            <FaSpotify size={25} color='green' className='inline-block'/>
            <b> Spotify </b>
            * 1,342,434 likes
            * <b>50 songs, </b>
            about  2hr 30 min

          </p>
           </div>

      </div>



      
    </>
  )
}

export default DisplayAlbum
