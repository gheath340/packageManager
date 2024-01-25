import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/homePage";
import { PackagePage } from "./pages/packagePage";
import { DriverPage } from "./pages/driverPage";
import { LoginPage } from "./pages/loginPage";
import { CreateUserPage } from "./pages/createUserPage";

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<PackagePage />} />
        <Route path="/drivers" element={<DriverPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create" element={<CreateUserPage />} />
      </Routes>
    </>
  );
}

export default App;
