import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faUsers } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Badge } from "react-bootstrap";
import "./MovieInfo.style.css";

export const MovieGenreInfo = ({ name }) => {
  return (
    <Badge bg="danger" className="genre">
      {name}
    </Badge>
  );
};

export const MovieVoteInfo = ({ vote }) => {
  return (
    <div className="movie-vote">
      <FontAwesomeIcon
        icon={faStar}
        className="icon-star"
        color="#FFD43B"
        size="xs"
      />
      <span>{vote}</span>
    </div>
  );
};

export const MoviePopularityInfo = ({ popularity }) => {
  return (
    <div className="movie-popularity">
      <FontAwesomeIcon
        icon={faUsers}
        className="icon-users"
        color="#ccc"
        size="xs"
      />
      <span>{popularity}</span>
    </div>
  );
};
