import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector((store)=>store.app.ismenuopen);
  if(!isMenuOpen)return null
  return (
    <div className='w-[150px] p-3 shadow-lg border border-black'>
      <ul>
          <li><Link to="/">Home</Link></li>
          <li>Short</li>
          <li>Videos</li>
        </ul>
      <h1 className='font-bold mb-1q'>Subscription </h1>
        <ul>
          <li>Music</li>
          <li>video</li>
          <li>subs</li>
        </ul>
      <h1 className='font-bold'>Watch later </h1>
        <ul>
          <li>Music</li>
          <li>video</li>
          <li>subs</li>
        </ul>
      
    </div>
  )
}

export default Sidebar