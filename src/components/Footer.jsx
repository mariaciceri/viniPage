import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/footer.css";

export default function Footer() {
  const navigate = useNavigate();

  function handleContactClick() {
    navigate("/contact");
  }

  return (
    <>
      <footer>
        <p>Instagram</p>
        <p onClick={handleContactClick}>Contact Me</p>
        <p>&copy; 2024 Vini</p>
        <p>Created By Maria Ciceri</p>
      </footer>
    </>
  );
}
