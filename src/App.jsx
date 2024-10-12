import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSadCry } from "@fortawesome/free-solid-svg-icons";
import Header from "./pages/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./components/Products";
import Footer from "./pages/Footer";
import Dashboard from "./pages/Dashboard";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
