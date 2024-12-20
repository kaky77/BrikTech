import React from "react";
import { Carousel } from "react-bootstrap";
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import "./styles/Navbar.css";

function CarouselImages() {
  return (
    <Carousel interval={2000}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1} // 1ère image
          alt="Premiere images"
        />
        <Carousel.Caption>
          <h3> description du 1er article</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2} // 2ème image
          alt="Deuxieme images"
        />
        <Carousel.Caption>
          <h3>Description de l'article 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3} //  3ème image
          alt="Troisieme images"
        />
        <Carousel.Caption>
          <h3>Description de l'article 3</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselImages;
