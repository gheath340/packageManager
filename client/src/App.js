import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import { Home } from './pages/home';
import { Package } from './pages/package';
import { Driver } from './pages/driver';
import { useState, useEffect } from 'react'

const API_BASE = "http://localhost:3001"

function App() {
  //const [todos, setTodos] = useState([])
  //const [newTodo, setNewTodo] = useState("")

  useEffect(() => {
    //GetTodos()
  }, [])
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/packages",
      element: <Package/>
    },
    {
      path: "/drivers",
      element: <Driver/>
    },
  
  ])

  return ( 
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App