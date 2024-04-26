import React from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import "./ProjectCarousels.css"; // Import custom CSS for styling

const imageUrls = [
  "https://wallpapercave.com/wp/wp2858551.jpg",
  "https://wallpapercave.com/wp/wp2858552.jpg",
  "https://wallpapercave.com/wp/wp2858553.jpg",
  "https://wallpapercave.com/wp/wp2858554.jpg"
];

const cardData = [
  {
    title: "Bagdola",
    text: "This is the text content for the Bagdola card."
  },
  {
    title: "Bindapur Extn",
    text: "This is the text content for the Bindapur Extn card."
  },
  {
    title: "Matiala Combind",
    text: "This is the text content for the Matiala Combind card."
  },
  {
    title: "Mohan Garden",
    text: "This is the text content for the Mohan Garden card."
  },
  // Add 10 more cards below
  {
    title: "jnndjn",
    text: "This is the text content for Card 5."
  },
  {
    title: "Card 6",
    text: "This is the text content for Card 6."
  },
  {
    title: "Card 7",
    text: "This is the text content for Card 7."
  },
  {
    title: "Card 8",
    text: "This is the text content for Card 8."
  },
  {
    title: "Card 9",
    text: "This is the text content for Card 9."
  },
  {
    title: "Card 10",
    text: "This is the text content for Card 10."
  }
];

function ProjectCarousels() {
  return (
    
    <Carousel controls={true} indicators={true} interval={3000} pause={false}>
      <div style={{ marginLeft: "15px" }}>
            <h2 style={{ color: "#06896c" }}>On Going Project</h2>
            {/* <p style={{ color: "#06896c" }}>Insultors Pvt Ltd</p> */}

          </div>
      {Array.from({ length: 14 }).map((_, idx) => (
        <Carousel.Item key={idx}>
          <div className="row">
            {Array.from({ length: 5 }).map((_, index) => (
              <div className="col-md-2" key={index}>
                <Card className="service-card">
                  <Card.Img
                    variant="top"
                    src={imageUrls[(idx * 5 + index) % imageUrls.length]}
                    className="zoom-image"
                  />
                  <Card.Body>
                    <h3>{cardData[(idx * 5 + index) % cardData.length].title}</h3>
                    <Card.Text>{cardData[(idx * 5 + index) % cardData.length].text}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ProjectCarousels;
