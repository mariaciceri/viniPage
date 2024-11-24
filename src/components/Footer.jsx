import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/global.css";

export default function Footer() {
  const navigate = useNavigate();

  function handleContactClick() {
    navigate("/contact");
  }

  return (
    <>
      <footer className="footer mt-auto py-3 bg-body-tertiary">
        <div className="container">
          <span className="text-body-secondary">
            <p>Instagram</p>
            <p onClick={handleContactClick}>Contact Me</p>
            <p>2024 Vini</p>
            <p className="created">&copy;By Maria Ciceri</p>
          </span>
        </div>
      </footer>
    </>
  );
}
