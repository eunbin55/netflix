import React, { useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useGetMovieById } from "../../hooks/useGetMovieById";
import Loading from "../../common/Loading";
import "./MovieDetailPage.style.css";
import {
  MovieGenreInfo,
  MoviePopularityInfo,
  MovieVoteInfo,
} from "../../common/MovieInfo/MovieInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import YouTubeModal from "./components/YouTubeModal";
import { useGetVideoById } from "../../hooks/useGetVideoKeyById";

const MovieDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useGetMovieById({ id });
  const { data: videoData } = useGetVideoById(id);
  const [modalVisible, setModalVisible] = useState(false);
  if (isLoading) return <Loading />;
  if (isError) return <Alert>{error}</Alert>;
  if (data)
    return (
      <Container className="movie-detail-wrap">
        <Row>
          <Col lg={6} xs={12}>
            <div
              style={{
                backgroundImage:
                  "url(" +
                  `https://media.themoviedb.org/t/p/w600_and_h900_bestv2${data.poster_path}` +
                  ")",
              }}
              className="movie-poster"
            ></div>
          </Col>
          <Col lg={6}>
            <div>
              {data.genres.map((genre) => (
                <MovieGenreInfo name={genre.name} />
              ))}
            </div>
            <h1>{data.original_title}</h1>
            <MovieVoteInfo vote={data.vote_average} />
            <MoviePopularityInfo popularity={data.popularity} />
            <div>
              <div className="movie-detail-info">
                <h4>Overview</h4>
                <div>{data.overview}</div>
              </div>
              <div className="movie-detail-info">
                <h4>Release Date</h4>
                <div>{data.release_date}</div>
              </div>
            </div>
            {!!videoData && (
              <div
                className="play-button"
                onClick={() => setModalVisible(true)}
              >
                <FontAwesomeIcon icon={faCirclePlay} size="xl" />
                <span>Play Trailer</span>
              </div>
            )}
            {modalVisible && (
              <YouTubeModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                videoData={videoData}
              />
            )}
          </Col>
        </Row>
      </Container>
    );
};

export default MovieDetailPage;
