import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchSortMovies = ({ sortKey, page }) => {
  return api.get(`/discover/movie?sort_by=${sortKey}&page=${page}`);
};

export const useSortMovies = ({ sortKey, page }) => {
  return useQuery({
    queryKey: ["movie-sort", { sortKey, page }],
    queryFn: () => fetchSortMovies({ sortKey, page }),
    select: (result) => result.data,
  });
};
