import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import { Home } from './pages/home';
import { PackagePage } from './pages/packagePage';
import { DriverPage } from './pages/driverPage';
import { AddPackagePage } from './pages/addPackagePage'

const API_BASE = "http://localhost:3001"

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
    {
      path: "/package/add",
      element: <AddPackagePage/>
    },
  
  ])

  return ( 
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App