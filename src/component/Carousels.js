import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

import img from "../asset/medanta.png";
import img1 from "../asset/Anand Vas.jpg";
import img2 from "../asset/vardhmannight.png";
//import img3 from "../asset/wp11175696.png";
//import img4 from "../asset/vhbuilding.webp";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      style={{ position: "relative", marginTop:"6rem"}}
      activeIndex={index}
      onSelect={handleSelect}
    >
      <Carousel.Item>
        <img
          style={{ width: "100vw", filter: "brightness(50%)" }}
          src={img}
        ></img>
        <Carousel.Caption>
          <h3>Medanta Hospital</h3>
          <p>Ganganagar</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img
          style={{ width: "100vw", filter: "brightness(50%)" }}
          src={img1}
        ></img>
        <Carousel.Caption>
          <h3>Basket Ball Indoor Stadium </h3>
          <p>Lok Vihar</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img
          style={{ width: "100vw", filter: "brightness(50%)" }}
          src={img2}
        ></img>
        <Carousel.Caption>
          <h3>Vardhman hospital </h3>
          <p>Muzaffarnagar</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
