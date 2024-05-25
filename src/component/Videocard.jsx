import React from 'react'


const Videocard = ({info}) => {
    // console.log(info);
    const {snippet,statistics} = info;
    const {channelTitle,thumbnails}= snippet
    // console.log(info);
  return (

    <div className='m-1 p-1 text w-52 shadow-lg hover:bg-gray-300'>
        <img className='rounded-lg ' src={thumbnails.medium.url} alt='video'/>
        <ul>
        <li className='font-bold py-2'>{channelTitle}</li>
        <li>{statistics.viewCount} Views</li>
        </ul>
        
    </div>
  
  )
}

export default Videocard