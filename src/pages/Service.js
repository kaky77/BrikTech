import React from "react";
import "../App.css";
import image9 from "../images/image9.jpg";
import image10 from "../images/image10.jpg";
import image11 from "../images/image11.jpg";
import Formulaire from "../composants/FormulaireMessage";

function Service() {
  return (
    <div>
      {/* Conteneur principal pour les sections */}
      <div className="container mt-4">
        {/* Row 1 : Première section */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="section">
              {/* Image avec effet hover */}
              <div className="card shadow-sm">
                <img
                  src={image9}
                  alt="Description de l'image"
                  className="card-img-top rounded  w-100"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Row 2 : Deuxième section */}
        <div className="row gx-1 mb-4">
          {/* Colonne pour le texte */}
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
            <div className="section">
              <h3>Details Article 1</h3>
              <p>
                Ceci est un texte descriptif pour la deuxième section. Utilise
                cette colonne pour insérer des informations importantes, des
                explications, ou un contenu détaillé.
              </p>
            </div>
          </div>

          {/* Colonne pour l'image */}
          <div className="col-12 col-md-6">
            <img
              src={image10}
              alt="Description de l'image"
              className="img-fluid rounded image-hover-effect w-100" // Image remplissant la colonne
            />
          </div>
        </div>

        {/* Row 3 : Troisième section */}
        <div className="row gx-1 mb-4">
          {/* Colonne pour l'image */}
          <div className="col-12 col-md-6">
            <img
              src={image11}
              alt="Description de l'image"
              className="img-fluid rounded image-hover-effect w-100" // Image remplissant la colonne
            />
          </div>

          {/* Colonne pour le texte */}
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
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
      </div>
    </div>
  );
}

export default Service;
