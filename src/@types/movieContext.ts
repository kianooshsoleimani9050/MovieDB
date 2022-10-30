import { DISCOVER_MOVIES_FILTERS, DISCOVER_MOVIES_PAGINATION } from "./common";
import { UseCustomSearchParamsType } from "./SearchParams";

export type DiscoverMovieReducerStateType = DISCOVER_MOVIES_PAGINATION & {
  filters?: DISCOVER_MOVIES_FILTERS;
  totalPages: number;
  enabled: boolean;
};

export enum DiscoverMovieReducerActionEnum {
  PAGINATION = "PAGINATION",
  FILTERS = "FILTERS",
  TOTAL_PAGES = "TOTAL_PAGES",
  ENABLED = "ENABLED",
}

export type DiscoverMovieReducerActionType =
  | {
      type: DiscoverMovieReducerActionEnum.PAGINATION;
      data: Pick<DiscoverMovieReducerStateType, "page">;
    }
  | {
      type: DiscoverMovieReducerActionEnum.FILTERS;
      data: Pick<DiscoverMovieReducerStateType, "filters">;
    }
  | {
      type: DiscoverMovieReducerActionEnum.TOTAL_PAGES;
      data: Pick<DiscoverMovieReducerStateType, "totalPages">;
    }
  | {
      type: DiscoverMovieReducerActionEnum.ENABLED;
      data: Pick<DiscoverMovieReducerStateType, "enabled">;
    };

export type DiscoverMovieReducerType = (
  state: DiscoverMovieReducerStateType,
  action: DiscoverMovieReducerActionType,
) => DiscoverMovieReducerStateType;

export type DiscoverMovieContextType = {
  state: DiscoverMovieReducerStateType;
  updatePagination: (data: UseCustomSearchParamsType) => void;
  updateFilters: (data: UseCustomSearchParamsType) => void;
  updateTotalPages: (totalPages: number) => void;
  updateEnabled: (enabled: boolean) => void;
};
