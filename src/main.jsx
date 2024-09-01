import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import Menu from './components/Menu.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Cart from './components/Cart.jsx'
import { Provider } from 'react-redux'
import Store from './redux/Store.js'
import Login from './components/Login.jsx'
import Sign from './components/Sign.jsx'

import { ToastContainer} from 'react-toastify';




const router=createBrowserRouter([
      
      {
         path:'/',
         element:<Layout/>,
         children:[

          {
            path:"",
            element:<Home/>
          },
          {
            path:"Menu",
            element:<Menu/>
          },
          {
            path:"About",
            element:<About/>
          },
          {
            path:"Contact",
            element:<Contact/>
          },
          {
            path:"Cart",
            element:<Cart/>
          },
          {
            path:"Login",
            element:<Login/>
          },
          
          {
            path:"Sign",
            element:<Sign/>
          }

         ]

      }
])

ReactDOM.createRoot(document.getElementById('root')).render(
 <Provider store={Store}>
      <React.StrictMode>
        <RouterProvider router={router}/>
        <ToastContainer
              
         />
      </React.StrictMode>
 </Provider>
 
)
