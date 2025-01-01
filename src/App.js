import React from "react";
import { BrowserRouter as Router, Route, Routes,Navigate } from "react-router-dom";
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
          <Route path="/BrikTech/" element={<Home />} />
          <Route path="/BrikTech/about" element={<About />} />
          <Route path="/BrikTech/services" element={<Service />} />
          <Route path="/BrikTech/contact" element={<Contact />} />

          {/* Rediriger toute route inconnue vers Home */}
          <Route path="*" element={<Navigate to="/BrikTech/" />} />
        </Routes>
      </div>

      {/* Footer toujours visible */}
      <Footer />
    </Router>
  );
}

export default App;