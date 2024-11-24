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
      <div className="collection-1" onClick={() => handleImageClick(1)}>
        <img
          src="/images/collection1/vini-saida11.jpeg"
          alt="Red painting"
          className="collection-preview img-1"
        />
        <h3>Saída</h3>
      </div>
      <div className="collection-2" onClick={() => handleImageClick(2)}>
        <img
          src="/images/collection1/vini-saida.jpeg"
          alt="Painting"
          className="collection-preview img-2"
        />
        <h3>Collection 2</h3>
      </div>
    </div>
  );
}
