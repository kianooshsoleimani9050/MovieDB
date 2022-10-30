import { useQuery } from "@tanstack/react-query";
import movieDBAxios from "../../utils/axios";
import { QUERY_KEYS } from "../../utils/constance";
import { useDiscoverMovieContext } from "../useDiscoverMovieContext";

export const useDiscoverMovies = () => {
  const { state, updateTotalPages } = useDiscoverMovieContext();
  return useQuery(
    [QUERY_KEYS.DISCOVER_MOVIES, state.page, state.filters || ""],
    () =>
      movieDBAxios.getDiscoveredMovies({
        page: state.page,
        ...(state.filters && {
          filters: state.filters,
        }),
      }),
    {
      onSuccess: (data) => {
        updateTotalPages(data.total_pages);
      },
    },
  );
};
