import { ChangeEvent, memo } from "react";
import { useDiscoverMovieContext } from "../../hooks/useDiscoverMovieContext";

const maxYear = new Date().getFullYear();

const MovieFilters = () => {
  const { state, updateFilters } = useDiscoverMovieContext();

  const handleYearChange = (event: ChangeEvent<HTMLInputElement>) => {
    updateFilters({
      page: state.page,
      filters: {
        ...(state.filters || {}),
        year: event.target.value,
      },
    });
  };
  const handleMinVoteChange = (event: ChangeEvent<HTMLInputElement>) => {
    updateFilters({
      page: state.page,
      filters: {
        ...(state.filters || {}),
        "vote_average.gte": event.target.value,
      },
    });
  };
  const handleMaxVoteChange = (event: ChangeEvent<HTMLInputElement>) => {
    updateFilters({
      page: state.page,
      filters: {
        ...(state.filters || {}),
        "vote_average.lte": event.target.value,
      },
    });
  };
  return (
    <div className="w-100 p-0 m-0 d-flex flex-row align-items-center justify-content-around">
      <input
        type="number"
        name="year"
        id="year"
        min={1900}
        max={maxYear}
        value={state.filters?.year || ""}
        className="p-3 m-0 search_input__container"
        placeholder="Year"
        onChange={handleYearChange}
      />
      <div className="w-25 p-0 m-0 d-flex flex-row align-items-center justify-content-center">
        <input
          type="number"
          name="minVote"
          id="minVote"
          min={0}
          max={10}
          value={state.filters?.["vote_average.gte"] || ""}
          className="p-3 m-0 search_input__container w-25"
          placeholder="min"
          onChange={handleMinVoteChange}
        />
        <span className="text-white mx-2">Vote</span>
        <input
          type="number"
          name="maxVote"
          id="maxVote"
          min={state.filters?.["vote_average.gte"] || 0}
          max={10}
          value={state.filters?.["vote_average.lte"] || ""}
          className="p-3 m-0 search_input__container w-25"
          placeholder="max"
          onChange={handleMaxVoteChange}
        />
      </div>
    </div>
  );
};
export default memo(MovieFilters);
