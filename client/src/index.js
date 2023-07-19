import React from 'react'
import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, Route, BrowserRouter } from 'react-router-dom'
import { Home } from './pages/home'
import { PackagePage } from './pages/packagePage'
import { DriverPage } from './pages/driverPage'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
