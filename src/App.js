import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Policy from "./pages/Policy";
import Footer from "./components/Footer";
import { DarkThemeToggle, Flowbite } from "flowbite-react";

function App() {
  return (
    <Flowbite>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Policy />} />
        </Routes>
      </BrowserRouter>
    </Flowbite>
  );
}

export default App;
