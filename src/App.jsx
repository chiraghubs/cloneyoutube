import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Head from './component/Head'
import Body from './component/Body'
import {Provider} from 'react-redux'
import store from './utils/store'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainContainer from './component/MainContainer'
import Watchpage from './component/Watchpage'

const approuter = createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<MainContainer/>
    },
    {
      path:"watch",
      element:<Watchpage/>
    }
  ]
}])
function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
    
     <Head/>
   <RouterProvider router={approuter}/>
    </Provider>
    
    
  )
}

export default App
