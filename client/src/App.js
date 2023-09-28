import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/homePage';
import { PackagePage } from './pages/packagePage';
import { DriverPage } from './pages/driverPage';
import { LoginPage } from './pages/loginPage';

export function App() {

  return ( 
    <>
      <Routes>
        {/* <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<PackagePage />} />
        <Route path="/drivers" element={<DriverPage />} />
      </Routes>
    </>
  )
}

export default App