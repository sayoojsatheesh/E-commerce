import "./App.css";
// Custom Component //
import Navbar from "./Components/Shared/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Shared/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
