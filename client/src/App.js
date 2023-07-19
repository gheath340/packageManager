import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home';
import { PackagePage } from './pages/packagePage';
import { DriverPage } from './pages/driverPage';

const API_BASE = "http://localhost:3001"

export function App() {
  
  return ( 
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<PackagePage />} />
        <Route path="/drivers" element={<DriverPage />} />
      </Routes>
    </>
  )
}

export default App