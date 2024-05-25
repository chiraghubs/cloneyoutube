import React from 'react'
import { imglink } from '../utils/constant';

const CommentData = [{
    name:"chirag",
    texts:"lorem ipsum",
    reply:[],
},
{
    name:"Riyan",
    texts:"lorem ipsum sky high",
    reply:[],
},
{
    name:"Somil",
    texts:"lorem ipsum",
    reply:[],
}]

const CommentOutput = ({data})=>{
    const {name,texts,reply} =data;
    return(
        <div className='my-2 bg-gray-200 shadow-lg flex'>
             <img  className='w-12 ' src={imglink} alt="user" />
        <div className='px-3'>
            <p className='font-bold'>{name}</p>
            <p>{texts}</p>
            
        </div>
        </div>
    )
}
const CommentList =({comments})=>{
    
    return comments.map((x,i)=>(
    <div key={i}>
        <CommentOutput key={i} data={x}/>
        <div className='pl-5 border border-l-black ml-5'>
            {console.log(x.reply)}
             {/* <CommentList comments={} /> */}
         </div>
     </div>
    ))
}
const Comments = () => {
   
  return (
    <div className='m-5 p-2 font-bold'>
        <CommentList comments={CommentData} />
    </div>
  )
}

export default Comments