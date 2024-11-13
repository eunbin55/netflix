import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchGetMovieById = (id) => {
  return api.get(`/movie/${id}`);
};

export const useGetMovieById = ({ id }) => {
  return useQuery({
    queryKey: ["movie-info"],
    queryFn: () => fetchGetMovieById(id),
    select: (result) => result.data,
  });
};
