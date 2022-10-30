export type NestedRouteObject = {
  [key: string]: any | NestedRouteObject;
};

export type DISCOVER_MOVIES_PAGINATION = {
  page: number;
};
export type DISCOVER_MOVIES_FILTERS = {
  year?: string;
  "vote_average.gte"?: string;
  "vote_average.lte"?: string;
};
