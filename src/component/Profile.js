import React from "react";
import team1Image from "../asset/f.png";
import team2Image from "../asset/ankit.png";
import team3Image from "../asset/shilpi_gupta-.png";
import team4Image from "../asset/m3.png";
//import "./MyCard.css";
import "./Profile.css"
const TeamMember = ({ name, title, imgUrl, about,post }) => (
  <div className="col-12 col-sm-6 col-md-4 col-lg-3">
    <div className="our-team">
      <div className="picture">
        <div className="img-overlay"></div>
        <img className="img-fluid" src={imgUrl} alt={name} />
      </div>
      <div className="team-content">
        <p>{post}</p>
        <h3 className="name">{name}</h3>
        <p>{about}</p>
        <h4 className="title">{title}</h4>
      </div>
       {/* <ul className="social">
        <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-facebook" aria-hidden="true"></a></li>
        <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-twitter" aria-hidden="true"></a></li>
        <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-google-plus" aria-hidden="true"></a></li>
        <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-linkedin" aria-hidden="true"></a></li>
      </ul>  */}
    </div>
  </div>
);

const Profile = () => {
  const teamMembers = [
    {
      name: "Ankit Gupta",
      imgUrl: team2Image,
      team2Image,
      about: "",
      post: "CEO",
    },
    {
      name: "Mohit ",
      imgUrl: team2Image,
      team2Image,
      about: "",
      post: "COO",
    },
    {
      name: "Shilpi Gupta",
      imgUrl: team3Image,
      team2Image,
      about: "",
      post: "co-Director",
    },
    
    
     { name: "Sanjam Chaba", imgUrl: team2Image, about: "" ,post: "CFO", },
  ];

  return (
    <div className="container">
      <div style={{ margin: "2rem 0rem", textAlign: "center" ,display:'flex',justifyContent:'center'}} className="row">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
