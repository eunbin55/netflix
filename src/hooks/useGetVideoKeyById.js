import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchGetVideoById = (id) => {
  return api.get(`/movie/${id}/videos`);
};

export const useGetVideoById = (id) => {
  return useQuery({
    queryKey: ["movie-video", id],
    queryFn: () => fetchGetVideoById(id),
    select: (result) => {
      if (result.data.results.length > 0) {
        const findTargetVideo = result.data.results.find(
          (video) => video.type === "Trailer"
        );
        return findTargetVideo ?? result.data.results[0];
      } else return null;
    },
  });
};
