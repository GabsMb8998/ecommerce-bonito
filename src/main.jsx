import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import React from 'react'
import App from './App.jsx'
import { Cart } from './pages/Cart.jsx'
import './index.css'
import { Produto } from './pages/Produto.jsx'
import { Catalogo } from './pages/CAtalogo.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/cart",
    element: <Cart/>
  },
  {
    path: "/produto",
    element: <Produto/>
  },
  {
    path: "/catalogo",
    element: <Catalogo/>
  },
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)