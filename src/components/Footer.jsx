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
            <p>
              <a
                href="https://www.instagram.com/vini.fernandes_art/"
                className="instagram"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </p>
            <p onClick={handleContactClick} className="contact-me">
              Contact Me
            </p>
            <p>2024 Vini</p>
            <p className="created">&copy;By Maria Ciceri</p>
          </span>
        </div>
      </footer>
    </>
  );
}
