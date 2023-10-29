// React //
import { useEffect } from "react";
// Other //
import { Routes, Route } from "react-router-dom";

// CSS //
import "./App.css";
// Custom Component //
import Navbar from "./Components/Shared/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Shared/Footer/Footer";
import DisplayProducts from "./Pages/DisplayProducts/DisplayProducts";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import CartPage from "./Components/CartPage/CartPage";
import ScrollToTop from "./Components/Shared/ScrollToTop/ScrollToTop";

function App() {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/products/all" element={<DisplayProducts />} />
        <Route path="/products/men" element={<DisplayProducts />} />
        <Route path="/products/women" element={<DisplayProducts />} />
        <Route path="/products/kids" element={<DisplayProducts />} />
        <Route path="/products/cart" element={<CartPage />} />
        <Route path="/products/favourites" element={<CartPage />} />
        <Route path="/products/:productId" element={<SingleProduct />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
