import React from "react";
import "../App.css";
import image6 from "../images/image6.png";
import image7 from "../images/image7.png";
import image8 from "../images/image8.png";
import Formulaire from "../composants/FormulaireMessage";

function About() {
  return (
    <div>
      <div className="container mt-4">
        <div className="row mb-4">
          <div className="col-12">
            <div className="section">
              <div className="card shadow-sm">
                <img
                  src={image8}
                  alt="Description de l'image"
                  className="card-img-top rounded"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
            <div className="section">
              <h3>Details Article 1</h3>
              <p>
                Ceci est un texte descriptif pour la deuxième section. Utilise
                cette colonne pour insérer des informations importantes, des
                explications, ou un contenu détaillé.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <img
              src={image6}
              alt="Description de l'image"
              className="img-fluid image-hover-effect"
            />
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-12 col-md-6">
            <img
              src={image7}
              alt="Description de l'image"
              className="img-fluid image-hover-effect"
            />
          </div>

          <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
            <div className="section">
              <h3>Details Article 2</h3>
              <p>
                Ceci est un texte descriptif pour la troisième section. Utilise
                cette colonne pour insérer des informations importantes, des
                explications, ou un contenu détaillé.
              </p>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-12">
            <div className="section">
              <Formulaire />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
