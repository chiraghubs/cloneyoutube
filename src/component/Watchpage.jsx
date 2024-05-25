import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closemenu } from '../utils/appslice';
import { useSearchParams } from 'react-router-dom';
import Comments from './Comments';
import Livechat from './Livechat';

const Watchpage = () => {
    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"));
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closemenu())
    },[])
  return (
   
    <div className='flex flex-col w-full'>
      <div className='flex '>
        <div>
      <iframe width="1000" height="600" src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
      
      <div className='w-full'>
        <Livechat/>
      </div>
      </div>
      <Comments/>
      </div>
      
      
    
    
  )
}

export default Watchpage