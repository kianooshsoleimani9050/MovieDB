import MovieFilters from "../sections/home/MovieFilters";
import MovieList from "../sections/home/MovieList";
import MoviePagination from "../sections/home/MoviePagination";

const HomePage = () => (
  <div className="p-0 py-3 py-md-5 m-0 pages_div__container">
    <MovieFilters />
    <MovieList />
    <MoviePagination />
  </div>
);
export default HomePage;
