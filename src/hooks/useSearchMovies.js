import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchSearchMovie = ({ keyword, page, sortKey }) => {
  return keyword
    ? api.get(`/search/movie?query=${keyword}&page=${page}`)
    : sortKey
    ? api.get(`/discover/movie?sort_by=${sortKey}&page=${page}`)
    : api.get(`/movie/popular?page=${page}`);
};
export const useSearchMovieQuery = ({ keyword, page, sortKey }) => {
  return useQuery({
    queryKey: ["movie-search", { keyword, page, sortKey }],
    queryFn: () => fetchSearchMovie({ keyword, page, sortKey }),
    select: (result) => result.data,
  });
};
