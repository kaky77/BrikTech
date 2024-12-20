import React from "react";
import "../App.css"; // import du fichier CSS pour les styles globaux
import CarouselImages from "../composants/Carousel"; // import du composant carousel
import image4 from "../images/image4.png"; // import des images
import image5 from "../images/image5.png";
import Formulaire from "../composants/FormulaireMessage"; // import du formulaire sendMessage

function Home() {
  return (
    <div>
      {/* Conteneur principal pour les sections */}
      <div className="container mt-4">
        {/* Row 1 : Première section */}
        <div className="row gx-1 mb-4">
          <div className="col-12">
            <div className="section">
              <CarouselImages />
            </div>
          </div>
        </div>

        {/* Row 2 : Deuxième section de la page home */}
        <div className="row gx-1 mb-4">
          {/* Colonne pour le texte (centré) */}
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

          {/* Colonne pour l'image N°2 de la page home */}
          <div className="col-12 col-md-6">
            <img
              src={image4} // 4e image
              alt="Description de l'image"
              className="img-fluid"
            />
          </div>
        </div>

        {/* Row 3 : Troisième section */}
        <div className="row gx-1 mb-4">
          {/* Colonne pour l'image */}
          <div className="col-12 col-md-6">
            <img
              src={image5} // 5e image
              alt="Description de l'image"
              className="img-fluid"
            />
          </div>

          {/* Colonne pour le texte (centré) */}
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

        {/* Row 4 : Quatrième section */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="section">
              <h3>Contactez-nous</h3>
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
