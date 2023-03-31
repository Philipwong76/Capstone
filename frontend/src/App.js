// General Imports
import { Routes, Route } from "react-router-dom";
import React from 'react';
import "./App.css";

// Pages Imports
import Home from "./pages/Home/Home";

import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ProductPage from "./pages/Product/ProductPage";
import AboutPage from "./pages/About/AboutPage";

import ViewProductPage from "./components/ViewProductPage/ViewProductPage";

// Util Imports
//import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="Product" element={<ProductPage/>}/>
        <Route path="About" element={<AboutPage/>}/>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="product/:id" element={<ViewProductPage/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
