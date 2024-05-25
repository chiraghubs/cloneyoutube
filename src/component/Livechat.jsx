import React, { useEffect, useState } from 'react'
import Chatmsg from './Chatmsg'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatslice'
import { generateName, makeMessage } from '../utils/Helper'

const Livechat = () => {
  const [livemsg,setlivemsg]= useState('')
  const dispatch = useDispatch();
  const chatMessage = useSelector((store)=>(store.chat.message))
  useEffect(()=>{
    const i = setInterval(()=>{
      console.log("api polling");
      dispatch(addMessage({
        name:generateName(),
        message:makeMessage(15)
      }))
    },700)
    return ()=> clearInterval(i)
    
  },[])
  return (
    <>
    <div className='mx-2 h-[600px] border border-black bg-slate-200 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        {chatMessage.map((c,i)=>(<Chatmsg key={i} name={c.name} message={c.message} />))}
      
    </div>

<form className='border w-full ml  -2 p-2 border-black' 
onSubmit={(e)=>{e.preventDefault()
 dispatch(
  addMessage({
    name:"rohan gupta",
    message: livemsg,
  })
  
);
setlivemsg("")}}>
<input className='w-72' type='text' value={livemsg} onChange={(e)=>{setlivemsg(e.target.value)}}/>
<button className='px-2 mx-2 bg-green-500 rounded-md'>Send</button>
</form>
</>
  )
}

export default Livechat