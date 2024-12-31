import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import BarreNavig from "./composants/Navbar";
import Footer from "./composants/footer";
import "./App.css";

function App() {
  return (
    <Router>
      <BarreNavig />
      {/* Contenu dynamique selon la route */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      {/* Footer toujours visible */}
      <Footer />
    </Router>
  );
}

export default App;