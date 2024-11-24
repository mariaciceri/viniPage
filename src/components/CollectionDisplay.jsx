import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import collections from "../collections.json";
import "../styles/collectionDisplay.css";
import "../styles/global.css";

export default function CollectionDisplay() {
  const { id } = useParams();
  const navigate = useNavigate();
  const collection = collections.find((col) => col.id === parseInt(id));

  // State for modal
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Open modal and set current image
  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setModalOpen(false);
  };

  // Navigate to previous image
  const prevImage = () => {
    setCurrentImageIndex((imageIndex) =>
      imageIndex === 0 ? collection.imagePaths.length - 1 : imageIndex - 1
    );
  };

  // Navigate to next image
  const nextImage = () => {
    setCurrentImageIndex((imageIndex) =>
      imageIndex === collection.imagePaths.length - 1 ? 0 : imageIndex + 1
    );
  };

  const handleModalClick = (e) => {
    if (
      e.target.className === "modal" &&
      e.target.className !== "modal-image" &&
      e.target.className !== "prev" &&
      e.target.className !== "next"
    ) {
      closeModal();
    }
  };

  return (
    <div>
      <h2>{collection.title}</h2>
      <p>{collection.description}</p>
      <span
        style={{ fontSize: "3em", cursor: "pointer" }}
        onClick={() => navigate("/")}
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
            onClick={() => openModal(index)} // Open modal on click
          />
        ))}
      </div>

      {/* Modal for zoomed image */}
      {isModalOpen && (
        <div className="modal" onClick={handleModalClick}>
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <button className="prev" onClick={prevImage}>
            &#8249;
          </button>
          <img
            src={collection.imagePaths[currentImageIndex]}
            alt={`Artwork ${currentImageIndex + 1}`}
            className="modal-image"
          />
          <button className="next" onClick={nextImage}>
            &#8250;
          </button>
        </div>
      )}

      <span
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        style={{ fontSize: "5em", cursor: "pointer" }}
      >
        &#10548;
      </span>
    </div>
  );
}
