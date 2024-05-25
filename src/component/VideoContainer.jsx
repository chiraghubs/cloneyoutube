import React, { useEffect, useState } from 'react'
import { youtube_api } from '../utils/constant'
import Videocard from './Videocard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos,setvideos] = useState([]);
  useEffect(()=>{
    getVideos()
  },[])
  const getVideos= async ()=>{
    const data = await fetch (youtube_api);
    const json = await data.json();
    console.log(json.items);
    setvideos(json.items)

  }
  return (
    <div className='flex flex-wrap'>{videos.map((x)=>(
    <Link to={"/watch?v="+x.id}><Videocard key={videos.id} info={x}/></Link>))}</div>
  )
}

export default VideoContainer