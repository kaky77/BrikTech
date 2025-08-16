// Importation des modules nécessaires
import React from "react"; // Importation de React pour la création du composant.
import { Link } from "react-router-dom"; // Importation du composant `Link` pour la navigation avec React Router.
import Container from "react-bootstrap/Container"; // Conteneur de Bootstrap pour une mise en page responsive.
import Nav from "react-bootstrap/Nav"; // Composant `Nav` de Bootstrap pour gérer les liens de navigation.
import Navbar from "react-bootstrap/Navbar"; // Barre de navigation Bootstrap.
import logo from "../images/logo.png"; // Importation du fichier d'image pour le logo.
import "./styles/Navbar.css"; // Importation des styles personnalisés pour la barre de navigation.

function BarreNavig() {
  return (
    // Barre de navigation principale
    <Navbar
      expand="lg" // Barre de navigation extensible en grand écran (large).
      className="py-3 border-bottom shadow-sm fixed-top" // Classes CSS pour le padding, la bordure, l'ombre et un positionnement fixe en haut de la page.
    >
      <Container>
        {/* Logo et nom du site */}
        <Navbar.Brand
          as={Link} // Utilisation de `Link` pour que le logo redirige vers la page d'accueil sans recharger la page.
          to="/BrikTech/" // Lien vers la route racine "/".
          className="mx-auto d-flex justify-content-center align-items-center" // Centrage du logo et du texte horizontalement et verticalement.
        >
          <img
            src={logo} // Source de l'image pour le logo.
            alt="Logo" // Texte alternatif pour l'image (accessibilité).
          />
          <span className="marque">
            {/* Nom du site */}
            𝑩𝒓𝒊𝒌𝑻𝒆𝒄𝒉
          </span>
        </Navbar.Brand>

        {/* Bouton pour basculer le menu en petit écran */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />

        {/* Menus de navigation */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            {" "}
            {/* Centrage des liens du menu */}
            <Nav.Link as={Link} to="/" className="text-center px-3">
              {/* Lien vers la page d'accueil */}
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-center px-3">
              {/* Lien vers la page About */}
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/services" className="text-center px-3">
              {/* Lien vers la page Service */}
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="text-center px-3">
              {/* Lien vers la page Contact */}
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// Exportation du composant pour pouvoir l'utiliser dans d'autres fichiers.
export default BarreNavig;
