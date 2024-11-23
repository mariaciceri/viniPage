import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/homePage.css";

export default function HomePage() {
  const navigate = useNavigate();

  const handleImageClick = (id) => {
    navigate(`/collection/${id}`);
  };

  function scrollToCollections() {
    document.getElementById("collections").scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <div>
      <p>Comtemporary artist from Balneario Camboriu - Brazil.</p>
      <span
        style={{ fontSize: "5em", cursor: "pointer" }}
        onClick={scrollToCollections}
      >
        &#8595;
      </span>
      <h2 id="collections">Collections</h2>
      <img
        src="/images/relaxing.jpeg"
        alt="Relaxing bunny"
        className="collection-preview"
        onClick={() => handleImageClick(1)}
      />
      <img
        src="/images/midsommar.jpeg"
        alt="Midsommar bunny"
        className="collection-preview"
        onClick={() => handleImageClick(2)}
      />
    </div>
  );
}
