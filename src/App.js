import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import CoinPage from "./pages/CoinPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Trending from "./pages/Trending";
import AboutUs from "./pages/AboutUs";
import ComparePage from "./pages/Compare";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/coin" element={<CoinPage />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/compare" element={<ComparePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
