// Other //
import { Routes, Route } from "react-router-dom";


// CSS //
import "./App.css";
// Custom Component //
import Navbar from "./Components/Shared/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Shared/Footer/Footer";
import DisplayProducts from "./Pages/DisplayProducts/DisplayProducts";

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/products/all" element={<DisplayProducts />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
