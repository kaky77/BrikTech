import React from "react";
import "../App.css";
import image9 from "../images/image9.jpg";
import image10 from "../images/image10.jpg";
import image11 from "../images/image11.jpg";

function Service() {
  return (
    <div>
      <div className="container-fluid">
      <br /><br />
        <div className="row">
          <img
            src={image9}
            alt="Description de l'image"
            className="img-fluid"
            style={{ height: "600px" }}
          />
        </div>

        <br /><br />
        <div className="row">
          <div className="col-12 col-md-6 ">
            <div className="section">
              <h3>Details Article 1</h3>
              <p>
                Ceci est un texte descriptif pour la deuxième section. Utilise
                cette colonne pour insérer des informations importantes, des
                explications, ou un contenu détaillé.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6 text-center">
            <img
              src={image10}
              alt="Description de l'image"
              className="img-fluid image-hover-effect"
              style={{ width: "500px", height: "600px" }}
            />
          </div>
        </div>

        <br /><br />
        <div className="row">
          <div className="col-12 col-md-6 text-center">
            <img
              src={image11}
              alt="Description de l'image"
              className="img-fluid image-hover-effect"
              style={{ width: "500px", height: "600px" }}
            />
          </div>

          <div className="col-12 col-md-6 ">
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
        <br /><br />
      </div>
    </div>
  );
}

export default Service;
