// React //
import React, { useState, Suspense } from "react";
// Other //
import { Routes, Route } from "react-router-dom";
// CSS //
import "./App.css";
// Custom Component //
import Navbar from "./Components/Shared/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Shared/Footer/Footer";
import ScrollToTop from "./Components/Shared/ScrollToTop/ScrollToTop";

const DisplayProducts = React.lazy(() =>
  import("./Pages/DisplayProducts/DisplayProducts")
);
const SingleProduct = React.lazy(() =>
  import("./Pages/SingleProduct/SingleProduct")
);
const CartPage = React.lazy(() => import("./Components/CartPage/CartPage"));
const SearchPage = React.lazy(() =>
  import("./Components/SearchPage/SearchPage")
);

function App() {
  const [showSearchPage, setshowSearchPage] = useState(false);

  return (
    <Suspense >
      <div>
        <Navbar
          showSearchPage={showSearchPage}
          setshowSearchPage={setshowSearchPage}
        />
        <ScrollToTop />
        <SearchPage
          showSearchPage={showSearchPage}
          setshowSearchPage={setshowSearchPage}
        />
        <Routes>
          <Route path="/products/all" element={<DisplayProducts />} />
          <Route path="/products/men" element={<DisplayProducts />} />
          <Route path="/products/women" element={<DisplayProducts />} />
          <Route path="/products/kids" element={<DisplayProducts />} />
          <Route path="/products/cart" element={<CartPage />} />
          <Route path="/products/favourites" element={<CartPage />} />
          <Route path="/products/searchpage" element={<SearchPage />} />
          <Route path="/products/:productId" element={<SingleProduct />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
