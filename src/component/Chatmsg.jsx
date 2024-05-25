import React from 'react'

const Chatmsg = ({name,message}) => {
  return (
    <div className='flex items-center shadow-sm'>
        <img className='w-8 border border-black rounded-full' src='https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png' alt='user'/>
    <span className='font-bold px-2'>{name}</span>
    <span>{message}</span>
    </div>
  )
}

export default Chatmsg