import React from "react";
import Vdo from "../asset/Animation.mp4";
import "./MyCard.css";

function MyCard() {
  return (
    <div
      className="row"
      style={{
        width: "100%",
        height: "auto",
        display: "flex",
        justifyContent: "space-between",
        margin: "3rem 0rem",
        border: "1px solid #dfdfdf",
        borderRadius: "12px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="description-container col-lg-5 col-sm-12"
        style={{ padding: "3rem" }}
      >
        <h1 style={{ fontWeight: "700", fontSize: "2em", color: "#0a494f" }}>
          Welcome to Thermal Engineers Insulators Pvt Ltd!
        </h1>
        {/* <h3>Keep growing in reatState falana dhimkana and all. </h3> */}
        <p>
          At Thermal Engineers Insulators Pvt Ltd, we are committed to
          excellence in construction and insulation services. With years of
          experience and a dedicated team of professionals, we specialize in
          providing high-quality solutions tailored to meet the unique needs of
          each project.
          <h6 style={{ color: "#0a494f" }}>Our Services:</h6>
          From concept to completion, we manage every aspect of construction
          projects with precision and expertise. Whether it's residential,
          commercial, or industrial, we deliver outstanding results on time and
          within budget. We offer a wide range of insulation solutions to
          enhance energy efficiency, reduce environmental impact, and create
          comfortable indoor environments. Our insulation services include
          thermal insulation, acoustic insulation, and fireproofing solutions.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          overflow: "hidden",
        }}
        className="col-lg-6 col-sm-12 videoClass"
      >
        <video className="vid" autoPlay loop muted controls={false}>
          <source src={Vdo}></source>
        </video>
      </div>
      {/* <img style={{ zIndex: "-1", width: "50%" }} src={img}></img> */}
    </div>
  );
}

export default MyCard;
