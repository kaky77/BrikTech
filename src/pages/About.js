import React from "react";
import "../App.css";
import image6 from "../images/image6.png";
import image7 from "../images/image7.png";
import image8 from "../images/image8.png";

function About() {
  return (
    <div>
      <div className="container-fluid">
      <br /><br />
        <div className="row">
          <img
            src={image8}
            alt="Description de l'image"
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
              src={image6}
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
              src={image7}
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

export default About;
