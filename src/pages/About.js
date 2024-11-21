import React from "react";
import "../App.css";
import image6 from "../images/image6.png";
import image7 from "../images/image7.png";
import image8 from "../images/image8.png";
import Formulaire from "../composants/FormulaireMessage";

function About() {
  return (
    <div>
      <div>
        {/* Conteneur principal pour les sections */}
        <div className="container mt-4">
          {/* Row 1 : Première section */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="section">
                {/* Image avec cadre, ombre et bordures arrondies */}
                <div className="card shadow-sm">
                  <img
                    src={image8}
                    alt="Description de l'image"
                    className="card-img-top image-hover-effect rounded"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 : Deuxième section */}
          <div className="row mb-4">
            {/* Colonne pour l'image */}
            <div className="col-12 col-md-6">
              <img
                src={image6}
                alt="Description de l'image"
                className="img-fluid image-hover-effect"
              />
            </div>

            {/* Colonne pour le texte */}
            <div className="col-12 col-md-6">
              <div className="section">
                <h3>Details Article 1</h3>
                <p>
                  Ceci est un texte descriptif pour la deuxième section. Utilise
                  cette colonne pour insérer des informations importantes, des
                  explications, ou un contenu détaillé.
                </p>
              </div>
            </div>
          </div>

          {/* Row 3 : Troisième section */}
          <div className="row mb-4">
            {/* Colonne pour l'image */}
            <div className="col-12 col-md-6">
              <img
                src={image7}
                alt="Description de l'image"
                className="img-fluid image-hover-effect"
              />
            </div>

            {/* Colonne pour le texte */}
            <div className="col-12 col-md-6">
              <div className="section">
                <h3>Details Article 2</h3>
                <p>
                  Ceci est un texte descriptif pour la deuxième section. Utilise
                  cette colonne pour insérer des informations importantes, des
                  explications, ou un contenu détaillé.
                </p>
              </div>
            </div>
          </div>

          {/* Row 4 : Quatrième section */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="section">
                {/* Insérer le composant FormulaireMessage */}
                <Formulaire />
              </div>
            </div>
          </div>
          {/* Row 5 : Footer */}
          <div className="row">
            <div className="col-12"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
