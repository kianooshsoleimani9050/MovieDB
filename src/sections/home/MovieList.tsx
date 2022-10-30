import { memo } from "react";
import Loading from "../../components/Loading";
import MovieCard from "../../components/MovieCard";
import { useDiscoverMovies } from "../../hooks/query/useDiscoverMovies";

const MovieList = () => {
  const { data } = useDiscoverMovies();
  const { isInitialLoading } = useDiscoverMovies();
  if (isInitialLoading) {
    return <Loading />;
  }
  return (
    <div className="p-0 m-0 mt-3 d-flex align-items-center justify-content-center">
      <div className="p-0 m-0 w-75 row">
        {data?.results?.map((movie) => (
          <div
            key={movie.id}
            className="p-2 m-0 col-12 col-sm-6 col-lg-4 col-xl-3"
          >
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default memo(MovieList);
