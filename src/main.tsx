import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import './index.css'


import RootLayout from './routes/RootLayout'
import Home from './routes/Home'
import Todo from './routes/Todo'
import Favorite from './routes/Favorite'



const  router  = createBrowserRouter([
  { path: '/', element: <RootLayout/>,
    children: [
      {path: '/', element: <Home />},
      {path: '/todo', element: <Todo />},
      {path: '/favorite', element: <Favorite />},
      {path: '/contact'}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
