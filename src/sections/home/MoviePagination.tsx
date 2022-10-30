import { memo } from "react";
import { useDiscoverMovieContext } from "../../hooks/useDiscoverMovieContext";
import { usePagination } from "../../hooks/usePagination";

const MoviePagination = () => {
  const { state, updatePagination } = useDiscoverMovieContext();

  const pagination = usePagination({
    currentPage: state.page,
    totalPageCount: state.totalPages,
  });

  const handlePrevButton = () => {
    updatePagination({
      page: state.page - 1,
      ...(state.filters
        ? {
            filters: state.filters,
          }
        : {}),
    });
  };
  const handleNextButton = () => {
    updatePagination({
      page: state.page + 1,
      ...(state.filters
        ? {
            filters: state.filters,
          }
        : {}),
    });
  };
  const handlePageButton = (page: number) => {
    updatePagination({
      page,
      ...(state.filters
        ? {
            filters: state.filters,
          }
        : {}),
    });
  };
  return (
    <div className="p-0 m-0 mt-2 d-flex align-items-center justify-content-center">
      <button
        type="button"
        className="p-0 px-3 m-0 mx-1 pagination_button__container"
        disabled={state.page === 1}
        onClick={() => {
          handlePrevButton();
        }}
      >
        Prev
      </button>
      {pagination?.map((item, index) => (
        <button
          key={`pagination${item}${index}`}
          className={`p-0 px-3 m-0 mx-1 pagination_button__container ${
            item === state.page && "active_pagination_button__container"
          }`}
          disabled={typeof item === "string"}
          onClick={() => {
            if (typeof item === "number") {
              handlePageButton(item);
            }
          }}
        >
          {item}
        </button>
      ))}
      <button
        type="button"
        className="p-0 px-3 m-0 mx-1 pagination_button__container"
        disabled={state.page === state.totalPages}
        onClick={() => {
          handleNextButton();
        }}
      >
        Next
      </button>
    </div>
  );
};
export default memo(MoviePagination);
