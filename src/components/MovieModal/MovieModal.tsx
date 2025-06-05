import React, { useEffect } from "react";
import { type Movie } from "../../types/movie.ts";

interface MovieModalProps {
  movie: Movie;
  onClose: () => void;
}

const MovieModal: React.FC<MovieModalProps> = ({ movie, onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose(); // Close modal on Escape key
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc); // Clean up on unmount
    };
  }, [onClose]);

  return (
    <div className="backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="image"
        />
        <div className="content">
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <button className="closeButton" onClick={onClose}>
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
