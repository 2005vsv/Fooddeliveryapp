import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home";
import About from "./Pages/Home/About";
import Contact from "./Pages/Home/Contact";
import Foodpage from "./Pages/Home/Foodpage";
import Cart from "./Pages/Home/cart";
import Authlogin from "./authlogin";
import Authsignup from "./authsignup";
import ProtectedRoute from "./components/Navbar/protectedroute/protectedRoute"; // ✅ Import ProtectedRoute
import OtpVerify from "./Pages/Home/auth/OtpVerify";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        
        {/* ✅ Protecting this route */}
        <Route
          path="/foodpage"
          element={
            <ProtectedRoute>
              <Foodpage />
            </ProtectedRoute>
          }
        />

        <Route path="/cart" element={<Cart />} />
        <Route path="/auth/login" element={<Authlogin />} />
        <Route path="/auth/signup" element={<Authsignup />} />
        <Route path="/auth/verify-otp" element={<OtpVerify />} />

      </Routes>
    </>
  );
}

export default App;
