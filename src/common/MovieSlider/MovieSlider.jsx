import React from "react";
import "./MovieSlider.style.css";
import MovieCard from "../MovieCard/MovieCard";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

const MovieSlider = ({ title, movies, responsive }) => {
  return (
    <div className="movie-slider">
      <h3>{title}</h3>
      <Carousel
        infinite={true}
        centerMode={true}
        itemClass="carousel-container"
        responsive={responsive}
        draggable={false}
      >
        {movies.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </Carousel>
    </div>
  );
};

export default MovieSlider;
