import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import { Home } from './pages/home';
import { PackagePage } from './pages/packagePage';
import { DriverPage } from './pages/driverPage';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/packages",
      element: <PackagePage/>
    },
    {
      path: "/drivers",
      element: <DriverPage/>
    },
  
  ])

  return ( 
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App