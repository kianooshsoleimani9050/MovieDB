import axios from "axios";
import { DiscoverMoviesApiResponseType } from "../@types/axios";
import {
  DISCOVER_MOVIES_FILTERS,
  DISCOVER_MOVIES_PAGINATION,
} from "../@types/common";

type GetDiscoveredMoviesParamsType = DISCOVER_MOVIES_PAGINATION & {
  filters?: DISCOVER_MOVIES_FILTERS;
};

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACK_END_URI,
  params: {
    api_key: process.env.REACT_APP_BACK_END_API_KEY,
  },
});

const movieDBAxios = {
  axiosInstance,
  getDiscoveredMovies: ({ page, filters }: GetDiscoveredMoviesParamsType) =>
    axiosInstance
      .get<DiscoverMoviesApiResponseType>("discover/movie", {
        params: {
          page,
          ...(filters || {}),
        },
      })
      .then((res) => res.data),
};
export default movieDBAxios;
