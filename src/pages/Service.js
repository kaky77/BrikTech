import React from "react";
import "../App.css";
import image9 from "../images/video-game-.jpg";
import image10 from "../images/play.jpg";
import Image from 'react-bootstrap/Image';
import App_Store from "../images/App_Store.png";
import Google_Play_Store from "../images/Google_Play_Store.webp";
import Stack from "react-bootstrap/Stack";

function Service() {
  return (
    <div>
      <div className="container-fluid">
      <br /><br />
        <div className="row">
          <img
            src={image9}
            alt="Description"
            className="img-fluid"
            style={{ height: "600px" }}
          />
        </div>

        <br /><br />
        <div className="row">
          <div className="col-12 col-md-6 ">
            <div className="section">
              <h1>𝐊𝐚𝐫𝐦𝐚</h1>
              <p>
                In Karma, slide, jump, dodge, and race towards victory! Escape enemies embodying demons and negative emotions in an endless race of 
                fate. Ready to defy destiny and master the chaos? Your fate is in your hands!
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
                  href="/#"
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

          <div className="col-12 col-md-6 text-center">
            <Image 
              src={image10}
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

export default Service;
