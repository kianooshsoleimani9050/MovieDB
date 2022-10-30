import { DiscoverMovieReducerStateType } from "./movieContext";

export type UseCustomSearchParamsType = Pick<
  DiscoverMovieReducerStateType,
  "page" | "filters"
>;
