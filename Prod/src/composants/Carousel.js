import React from "react";
import { Carousel} from "react-bootstrap";
import image1 from "../images/Back_compagnie.jpg";
import image2 from "../images/Back_jeux.jpg";
import image3 from "../images/Back_equipe.jpg";

function CarouselImages() {
  return (
    <Carousel fade pause = {false} controls={false} interval={3000}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1} // 1ère image
          alt="BrikTech"
        />
        <Carousel.Caption style={{ backgroundColor: "rgba(108,117,125,0.5)" }}>
          <h1>𝑩𝒓𝒊𝒌𝑻𝒆𝒄𝒉</h1>
          <p>
            Based in the heart of Canada, BrikTech blends technology, design, and storytelling to craft games that leave a lasting impact.
            Our mission is to bring unique worlds to life, spark imagination, and establish ourselves as a key player in the gaming industry.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2} // 2ème image
          alt="Karma"
        />
        <Carousel.Caption style={{ backgroundColor: "rgba(108,117,125,0.5)" }}>
          <h1>𝐊𝐚𝐫𝐦𝐚</h1>
          <p>
            Explore a mysterious world, face the consequences of your choices, and uncover multiple endings.
            Follow your instincts… but remember: karma never forgets.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3} //  3ème image
          alt="Teams"
        />
        <Carousel.Caption style={{ backgroundColor: "rgba(108,117,125,0.5)" }}>
          <h1>𝐓𝐞𝐚𝐦</h1>
          <p>
            Behind BrikTech is a young, passionate, and bold team.
            Creators, coders, engineers, marketers, dreamers — we push boundaries to transform every idea into an unforgettable experience.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselImages;
