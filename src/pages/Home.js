import React from "react";
import "../App.css"; // import du fichier CSS pour les styles globaux
import CarouselImages from "../composants/Carousel"; // import du composant carousel
import image4 from "../images/image4.png"; // import des images
import image5 from "../images/image5.png";
import App_Store from "../images/App_Store.png";
import Google_Play_Store from "../images/Google_Play_Store.webp";
import Formulaire from "../composants/FormulaireMessage"; // import du formulaire sendMessage
import Stack from "react-bootstrap/Stack";

function Home() {
  return (
    <div>
      {/* Conteneur principal pour les sections */}
      <div className="container-fluid">
        {/* Row 1 : Première section */}
        <br /><br />
        <div className="row">
          <CarouselImages />
        </div>

        {/* Row 2 : Deuxième section de la page home */}
        <br />
        <br />
        <div className="row">
          {/* Colonne pour le texte (centré) */}
          <div className="col-12 col-md-6">
            <div className="section">
              <h3>Details Article 1</h3>
              <p>
                Ceci est un texte descriptif pour la deuxième section. Utilise
                cette colonne pour insérer des informations importantes, des
                explications, ou un contenu détaillé.
              </p>
              <Stack
                className="justify-content-center"
                direction="horizontal"
                gap={5}
              >
                <a
                  href="/#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={App_Store}
                    alt="app store"
                    style={{ width: "200px", height: "70px" }}
                  />
                </a>
                <a
                  href="/#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Google_Play_Store}
                    alt="google play store"
                    style={{ width: "200px", height: "70px" }}
                  />
                </a>
              </Stack>
            </div>
          </div>

          {/* Colonne pour l'image N°2 de la page home */}
          <div className="col-12 col-md-6 text-center">
            <img
              src={image4} // 4e image
              alt="Description de l'image"
              style={{ width: "500px", height: "600px" }}
            />
          </div>
        </div>

        {/* Row 3 : Troisième section */}
        <br />
        <br />
        <div className="row">
          {/* Colonne pour l'image */}
          <div className="col-12 col-md-6 text-center">
            <img
              src={image5} // 5e image
              alt="Description de l'image"
              style={{ width: "500px", height: "600px" }}
            />
          </div>

          {/* Colonne pour le texte (centré) */}
          <div className="col-12 col-md-6">
            <div className="section">
              <h3>Details Article 2</h3>
              <p>
                Ceci est un texte descriptif pour la troisième section. Utilise
                cette colonne pour insérer des informations importantes, des
                explications, ou un contenu détaillé.
              </p>
              <Stack
                className="justify-content-center"
                direction="horizontal"
                gap={5}
              >
                <a
                  href="/#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={App_Store}
                    alt="app store"
                    style={{ width: "200px", height: "70px" }}
                  />
                </a>
                <a
                  href="/#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Google_Play_Store}
                    alt="google play store"
                    style={{ width: "200px", height: "70px" }}
                  />
                </a>
              </Stack>
            </div>
          </div>
        </div>

        {/* Row 4 : Quatrième section */}
        <br />
        <br />
        <div className="row">
          <div className="col-12">
            <div className="section">
              {/* Insérer le composant FormulaireMessage */}
              <Formulaire />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
