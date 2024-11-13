import React from "react";
import "./MovieCard.style.css";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";
import { useNavigate } from "react-router-dom";
import {
  MovieGenreInfo,
  MoviePopularityInfo,
  MovieVoteInfo,
} from "../MovieInfo/MovieInfo";

const MovieCard = ({ movie }) => {
  const { data: genreData } = useMovieGenreQuery();
  const navigate = useNavigate();
  const findGenreName = (genreIds) => {
    if (!genreData) return [];
    const genreNameList = genreIds.map((id) => {
      return genreData.find((genre) => genre.id === id).name;
    });
    return genreNameList;
  };
  const goToDetailPage = () => {
    console.log("go detail", movie);
    navigate(`/movies/${movie.id}`);
  };

  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          `https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}` +
          ")",
      }}
      className="movie-card"
      onClick={goToDetailPage}
    >
      <div className="overlay">
        <h4>{movie.title}</h4>
        <h4>{`(${movie.release_date})`}</h4>
        <div>
          {findGenreName(movie.genre_ids).map((name, index) => (
            <MovieGenreInfo name={name} key={index} />
          ))}
        </div>
        <MovieVoteInfo vote={movie.vote_average} />
        <MoviePopularityInfo popularity={movie.popularity} />
      </div>
    </div>
  );
};

export default MovieCard;
