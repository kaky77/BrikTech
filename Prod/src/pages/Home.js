import React from "react";
import CarouselImages from "../composants/Carousel"; // import du composant carousel
import image4 from "../images/karma1.jpg"; // import des images
import img_Logo_Karma from "../images/Logo_karma.png";
import App_Store from "../images/App_Store.png";
import Google_Play_Store from "../images/Google_Play_Store.webp";
import Formulaire from "../composants/FormulaireMessage"; // import du formulaire sendMessage
import Stack from "react-bootstrap/Stack";
import "../composants/styles/Style.css";
import Image from "react-bootstrap/Image";

function Home() {
  return (
    <div>
      {/* Conteneur principal pour les sections */}
      <div className="container-fluid">
        {/* Row 1 : Première section */}
        <br />
        <br />
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={img_Logo_Karma}
                  alt="𝐊𝐚𝐫𝐦𝐚"
                  className="img-fluid"
                  style={{
                    width: "100px",
                    height: "100px",
                    transform: "scale(2.5)", 
                    transformOrigin: "center",
                  }}
                />
              </div>

              <p>
                In Karma, slide, jump, dodge, and race toward victory!
                Escape enemies embodying demons and negative emotions in an endless race against fate.
                Are you ready to defy destiny and master the chaos? Your fate is in your hands!
              </p>
              <Stack
                className="justify-content-center"
                direction="horizontal"
                gap={5}
              >
                <a
                  href="https://apps.apple.com/ca/app/karma-game/id6754995646"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center flex-fill"
                >
                  <img
                    src={App_Store}
                    alt="app store"
                    className="img-fluid"
                    style={{ width: "200px", height: "70px" }}
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.Briktech.Karma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center flex-fill"
                >
                  <img
                    src={Google_Play_Store}
                    alt="google play store"
                    className="img-fluid"
                    style={{ width: "200px", height: "70px" }}
                  />
                </a>
              </Stack>
            </div>
          </div>

          {/* Colonne pour l'image N°2 de la page home */}
          <div className="col-12 col-md-6 text-center ">
            <Image
              src={image4}
              alt="Description"
              className="img-fluid"
              rounded
              style={{ width: "400px", height: "500px" }}
            />
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
