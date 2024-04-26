import React from "react";
import { useState } from "react";
import logo from "../asset/logo.jpeg";
import "./Navbar.css";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav
      style={{
        position: "fixed",
        backgroundColor: "white",
        padding: "1rem",
        zIndex: "999",
        width: "98vw",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <img src={logo} style={{ height: "60px", width: "60px" }}></img>
          <div style={{ marginLeft: "15px" }}>
            <h3 style={{ color: "#0A494F" }}>
              Thermal Engineers & Insulators Pvt. Ltd.
            </h3>
            <h2 style={{ color: "#0A494F", margin: "2px" }}></h2>
          </div>
        </div>
        <div
          className="option"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <h5 className="menuItem" style={{ padding: "0rem 1rem" }}>
            Home
          </h5>
          <h5 className="menuItem" style={{ padding: "0rem 1rem" }}>
            Service
          </h5>
          <h5 className="menuItem" style={{ padding: "0rem 1rem" }}>
            Project
          </h5>
          <h5 className="menuItem" style={{ padding: "0rem 1rem" }}>
            Contact
          </h5>
          <h5 className="menuItem" style={{ padding: "0rem 1rem" }}>
            About
          </h5>
        </div>

        <button
          className="btn"
          onClick={toggleNavbar}
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            color: "#0A494F",
            fontSize: "1.5rem",
          }}
        >
          &#9776;
        </button>
      </div>

      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            right: 0,
            backgroundColor: "rgb(44 214 135 / 17%)",
            backdropFilter: "blur(10px)",
            position: "absolute",
            zIndex: "999",
            minWidth: "200px",
            minHeight: "100vh",
          }}
        >
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li style={{ padding: "0.5rem 1rem", margin: "2rem" }}>
              <a
                className="hamoption"
                href="#home"
                style={{ color: "white", textDecoration: "none" }}
              >
                Home
              </a>
            </li>
            <li style={{ padding: "0.5rem 1rem", margin: "2rem" }}>
              <a
                className="hamoption"
                href="#About"
                style={{ color: "white", textDecoration: "none" }}
              >
                About
              </a>
            </li>
            <li style={{ padding: "0.5rem 1rem", margin: "2rem" }}>
              <a
                className="hamoption"
                href="#Services"
                style={{ color: "white", textDecoration: "none" }}
              >
                Services
              </a>
            </li>
            <li style={{ padding: "0.5rem 1rem", margin: "2rem" }}>
              <a
                className="hamoption"
                href="#Contact"
                style={{ color: "white", textDecoration: "none" }}
              >
                Contact
              </a>
            </li>
            <li style={{ padding: "0.5rem 1rem", margin: "2rem" }}>
              <a
                className="hamoption"
                href="#Project"
                style={{ color: "white", textDecoration: "none" }}
              >
                Project
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
