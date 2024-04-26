import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css"; // Import custom CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3" style={{ padding: "2rem" }}>
            <h5>About Us</h5>
            <h7>
               Thermal Engineers and 
               Insulator Pvt. Ltd.
               
               <p>C-57, 4th Floor, TEI Tower Wazirpur Industrial Area,
               <br></br>New Delhi-110052
             </p>
                
            </h7>
          </div>
          <div className="col-md-3" style={{ padding: "2rem" }}>
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Email: thermal.office@gmail.com</li>
              <li>Phone: 011-41084606</li>
            </ul>
          </div>
          <div className="col-md-3" style={{ padding: "2rem" }}>
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://www.facebook.com/" style={{fontSize:'18px'}}>Facebook</a>
                
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
               <a href="https://twitter.com/?lang=en" style={{fontSize:'18px'}}>Twitter</a> 
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://www.instagram.com/" style={{fontSize:'18px'}}>Instagram</a> 
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://in.linkedin.com/" style={{fontSize:'18px'}}>Linkedin</a> 
                
              </li>
            </ul>
          </div>
          <div className="col-md-3" style={{ padding: "2rem" }}>
            <h2>Location</h2>
            <div className="col">
              {/* Paste the Google Maps embed code here */}
              <iframe
                title="Google Map Location"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3499.6303120135867!2d77.17082427550326!3d28.700703375627665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDQyJzAyLjUiTiA3N8KwMTAnMjQuMiJF!5e0!3m2!1sen!2sin!4v1713514322046!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                frameBorder="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
