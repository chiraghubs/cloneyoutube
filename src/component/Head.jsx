import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { togglemenu } from '../utils/appslice';
import { youtube_search } from '../utils/constant';


const Head = () => {
  const [searchtext,setsearchtext]=useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [suggest,setsuggest] = useState([]);
  const [showlist,setshowlist] = useState(false);
  const dispatch = useDispatch();
  const changeMenu = ()=>{
    dispatch(togglemenu())
  }
  useEffect(()=>{
    // console.log(searchtext);
    // do api call after 200ms its called debouncing
    const timer=setTimeout(()=>getsearchsuggestion(),400);
    return ()=>{
      clearTimeout(timer)
    }
  },[searchtext]);

  const getsearchsuggestion = async()=>{
    const data = await fetch(youtube_search+searchtext);
    const json = await data.json();
    setsuggest(json[1])
  }
  const clearinput =()=>{
    
  }
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    console.log("dark");
    console.log("light");
  };

return (<div className={'grid grid-flow-col shadow-lg p-2 m-2 '+(darkMode && "bg-slate-900")} > 

    
<div className='flex border border-pink-600 col-span-1'>
 <img onClick={()=>changeMenu()} className='w-6 m-2 cursor-pointer' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png" alt="head" />
 <img className='w-8 m-2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="" />
</div>
<div className='col-span-10 border border-pink-600 ml-24 '>
 <input value={searchtext} onFocus={()=> setshowlist(true)} onBlur={()=>setshowlist(false)} onChange={(e)=>setsearchtext(e.target.value)} className='w-1/2 border border-gray-400 rounded-l-full' type='text'></input>
 <button  className=' border border-gray-400 rounded-r-full bg-gray-200 '>Search</button>
 <button onClick={clearinput}  className=' border border-gray-400 rounded-r-full bg-gray-200 '>Clear</button>
 <div>

 </div>
 {showlist && <div className='fixed bg-white py-2 px-2 w-[26rem] shadow-lg rounded-lg border border-gray-300'>
 <ul>
   {suggest.map((x)=>(<li key={x} className='px-4 pt-1 shadow-sm hover:bg-gray-100'>{x}</li>))}
  
 </ul>
</div>}
</div>

<div className='col-span-1'>
 <img className='h-8' src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="" />
</div>
<button onClick={toggleDarkMode}>
{darkMode ? <h1 className='text-white'>Welcome back!</h1> : <h1 className=''>Please sign in.</h1>}
 <img  className='w-8 ' src="data:image/png;base64,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" alt="" />
 </button>
</div>)
   
}

export default Head