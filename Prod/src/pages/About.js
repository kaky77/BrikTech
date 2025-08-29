import React from "react";
import "../App.css";
import image6 from "../images/woman.jpg";
import image8 from "../images/Back_compagnie.jpg";
import Image from 'react-bootstrap/Image';

function About() {
  return (
    <div>
      <div className="container-fluid">
      <br /><br />
        <div className="row">
          <img
            src={image8}
            alt="Description"
            className="img-fluid"
            style={{ height: "600px" }}
          />
        </div>

        <br /><br />
        <div className="row">
          <div className="col-12 col-md-6 ">
            <div className="section">
              <h1>𝑩𝒓𝒊𝒌𝑻𝒆𝒄𝒉</h1>
              <p>
               BrikTech is a dynamic young Canadian company, born from the passion of creators, developers, engineers, and marketing specialists.
              Our mission is to push the boundaries of digital creativity by crafting immersive video games, innovative applications, and AI-powered solutions.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6 text-center">
            <Image 
              src={image6}
              alt="Description"
              className="img-fluid "
              rounded
              style={{ width: "400px", height: "500px" }}
            />
          </div>
        </div>
       
        <br /><br />
      </div>
    </div>
  );
}

export default About;
