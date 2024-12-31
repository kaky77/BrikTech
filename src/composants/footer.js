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
            <h5>À propos</h5>
            <p>
              Mon Site Web est dédié à fournir les meilleurs services dans le
              domaine X. Nous nous engageons à offrir une qualité supérieure et
              une satisfaction client garantie.
            </p>
          </div>

          {/* Section 2 : Liens rapides */}
          <div className="col-12 col-md-4">
            <h5>Liens rapides</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/">Accueil</Link>
              </li>
              <li>
                <Link to="/about">À propos</Link>
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
            <h5>Suivez-nous</h5>
            <p>Retrouvez-nous sur nos réseaux sociaux :</p>
            <div className="social-links">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <hr />
        <div className="text-center">
          <p>&copy; 2024 Mon Site Web. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
