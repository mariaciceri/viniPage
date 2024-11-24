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
      <h1 className="title">Vini Fernandes</h1>
      <p className="introduction">
        Comtemporary artist from Balneario Camboriu - Brazil.
      </p>
      <span onClick={scrollToCollections} className="arrow-down">
        &#8594;
      </span>
      <h2 id="collections" className="collections">
        Collections
      </h2>
      <div className="collection-1">
        <img
          src="/images/relaxing.jpeg"
          alt="Relaxing bunny"
          className="collection-preview"
          onClick={() => handleImageClick(1)}
        />
        <h3>Saida</h3>
      </div>
      <div className="collection-2">
        <img
          src="/images/midsommar.jpeg"
          alt="Midsommar bunny"
          className="collection-preview"
          onClick={() => handleImageClick(2)}
        />
        <h3>Collection 3</h3>
      </div>
    </div>
  );
}
