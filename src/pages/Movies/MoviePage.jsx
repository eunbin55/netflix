import React, { useState } from "react";
import { useSearchMovieQuery } from "../../hooks/useSearchMovies";
import { useSearchParams } from "react-router-dom";
import { Alert, Col, Container, Dropdown, Row } from "react-bootstrap";
import MovieCard from "../../common/MovieCard/MovieCard";
import Loading from "../../common/Loading";
import ReactPaginate from "react-paginate";
import "./MoviePage.style.css";
import { useSortMovies } from "../../hooks/useSortMovies";

const MoviePage = () => {
  const [query, _setQuery] = useSearchParams();
  const [page, setPage] = useState(1);
  const [sortKey, setSortKey] = useState(null);
  const keyword = query.get("q");
  const { data, isLoading, isError, error } = useSearchMovieQuery({
    keyword,
    page,
  });
  const { data: sortedData } = useSortMovies({ sortKey, page });
  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };
  const onSort = (e) => {
    setSortKey(e);
  };
  const MenuItems = [
    { key: "popularity.desc", value: "Popularity Descending" },
    { key: "popularity.asc", value: "Popularity Ascending" },
    { key: "primary_release_date.desc", value: "Release Date Descending" },
    { key: "primary_release_date.asc", value: "Release Date Ascending" },
  ];
  if (isLoading) return <Loading />;
  if (isError) return <Alert variant="danger">{error.message}</Alert>;
  return (
    <Container>
      <Row>
        <Col lg={4} xs={12}>
          <div className="sort-menu">
            <h3>Sort</h3>
            <Dropdown onSelect={(e) => onSort(e)}>
              <Dropdown.Toggle variant="secondary" className="sort-dropdown">
                Sort Results By
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {MenuItems.map((menu) => (
                  <Dropdown.Item
                    eventKey={menu.key}
                    active={sortKey === menu.key}
                  >
                    {menu.value}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Col>
        <Col lg={8} xs={12}>
          <Row>
            {(sortedData ?? data)?.results
              .filter((movie) => movie.poster_path !== null)
              .map((movie, index) => (
                <Col key={index} lg={4} xs={12}>
                  <MovieCard movie={movie} />
                </Col>
              ))}
          </Row>
          <ReactPaginate
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={data?.total_pages}
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
            forcePage={page - 1}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default MoviePage;
