import React from "react";
import Banner from "./components/Banner";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import Learn from "./components/Learn";
import Info from "./components/Info";
import Home from "./components/Home";

function App() {
  return (
    <div className="w-full h-screen bg-[#ECF0F1]">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dash" element={<Dashboard />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </div>
  );
}

export default App;
