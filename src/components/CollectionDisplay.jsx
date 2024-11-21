//showcase artwork in a collection interactively
//arrow buttons to navigate through artwork

import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import collections from "../collections.json";
import "../styles/collectionDisplay.css";

export default function CollectionDisplay() {
  const { id } = useParams();
  const navigate = useNavigate();
  //Find the collection with the ID that matches the ID in the URL
  const collection = collections.find((col) => col.id === parseInt(id));

  function handleClick() {
    navigate("/");
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div>
      <h2>{collection.title}</h2>
      <p>{collection.description}</p>
      <span
        style={{ fontSize: "3em", cursor: "pointer" }}
        onClick={handleClick}
      >
        &#10550;
      </span>
      <div className="paintings">
        {collection.imagePaths.map((artwork, index) => (
          <img
            key={index}
            src={artwork}
            alt={`Artwork ${index + 1}`}
            className="painting"
          />
        ))}
      </div>
      <span
        onClick={scrollToTop}
        style={{ fontSize: "5em", cursor: "pointer" }}
      >
        &#10548;
      </span>
    </div>
  );
}
