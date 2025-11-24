import React from "react";
import "./styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* Section 1 : Informations sur l'entreprise */}
          <div className="col-12 col-md-4">
            <h1>𝑩𝒓𝒊𝒌𝑻𝒆𝒄𝒉</h1>
            <p>
              BrikTech is a dynamic young Canadian company, born from the passion of creators, developers, engineers, and marketing specialists.
              Our mission is to push the boundaries of digital creativity by developing immersive video games, innovative applications, and AI-driven solutions.
            </p>
          </div>

          {/* Section 2 : Liens rapides */}
          <div className="col-12 col-md-4">
            <h5>Useful Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Section 3 : Réseaux sociaux */}
          <div className="col-12 col-md-4">
            <h5>Follow us</h5>
            <div className="social-links">
             
              <a
                href="https://www.linkedin.com/company/108552457/admin/dashboard/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <hr />
        <div className="text-center">
          <p>COPYRIGHT © 2025 𝑩𝒓𝒊𝒌𝑻𝒆𝒄𝒉, all rights reserved.</p>
          <h5>Legal</h5>
          <p>
            <Link to="/privacy">Privacy Policy</Link>
          </p>
          <p>
            <Link to="/terms">Terms and Conditions</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
