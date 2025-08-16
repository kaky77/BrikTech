import React from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import BarreNavig from "./composants/Navbar";
import Footer from "./composants/footer";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
//import Maintenance from "./pages/Maintenance";
//import "./App.css";

function App() {
  return (
    <Router>
      <BarreNavig />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
// set NODE_OPTIONS=--openssl-legacy-provider && react-scripts start