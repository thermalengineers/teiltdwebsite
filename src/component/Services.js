import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Services.css'; // Assuming you have a CSS file named 'Services.css'
import img1 from '../asset/service1.png';
import img2 from '../asset/service2.jpg';
import img3 from '../asset/service3.jpg';

class Services extends React.Component {
  render() {
    return (
      <div className="services-container">
        <Carousel interval={3000} pause={false}>
          <Carousel.Item>
            <img
              className="d-block mx-auto"
              src={img1}
              alt="Service 1"
              style={{ width: '200px', height: '150px' }} // Adjust width and height as needed
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block mx-auto"
              src={img2}
              alt="Service 2"
              style={{ width: '200px', height: '150px' }} // Adjust width and height as needed
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block mx-auto"
              src={img3}
              alt="Service 3"
              style={{ width: '200px', height: '150px' }} // Adjust width and height as needed
            />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Services;
