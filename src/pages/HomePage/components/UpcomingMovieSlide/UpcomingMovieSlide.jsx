import React from "react";
import { useUpcomingMoviesQuery } from "../../../../hooks/useUpcomingMovies";
import Loading from "../../../../common/Loading";
import { Alert } from "react-bootstrap";
import { responsive } from "../../../../constants/responsive";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";

const UpcomingMovieSlide = () => {
  const { data, isLoading, isError, error } = useUpcomingMoviesQuery();
  const filterMovies = data?.results.filter(
    (movie) => new Date(movie.release_date) > new Date()
  );
  if (isLoading || !filterMovies) {
    return <Loading />;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <MovieSlider
      title="Upcoming Movies"
      movies={filterMovies}
      responsive={responsive}
    />
  );
};

export default UpcomingMovieSlide;
