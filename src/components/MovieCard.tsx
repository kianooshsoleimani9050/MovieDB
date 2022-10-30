import { LazyLoadImage } from "react-lazy-load-image-component";
import { DiscoverMoviesApiResponseResultType } from "../@types/axios";

interface MovieCardRowPropsType {
  title: string;
  value: string | number;
}
const MovieCardRow = ({ title, value }: MovieCardRowPropsType) => (
  <div className="w-100 p-0 m-0 px-2 d-flex align-items-center justify-content-between movie_card_row_text__container">
    <span>{title}</span>
    <span>{value}</span>
  </div>
);

interface MovieCardPropsType {
  movie: DiscoverMoviesApiResponseResultType;
}
const MovieCard = ({ movie }: MovieCardPropsType) => {
  const { poster_path, title, release_date, vote_count, vote_average } = movie;

  const posterSrc = !!poster_path
    ? `${process.env.REACT_APP_CDN_URI}${poster_path}`
    : "/assets/404.png";

  return (
    <div className="p-0 m-0 h-100 shadow movie_card_div__container">
      <div className="p-2 m-0 movie_card_content_div__container w-100 h-100 d-flex flex-column align-items-center justify-content-between">
        <LazyLoadImage
          src={posterSrc}
          alt={title}
          className="movie_card_img__container"
          effect="blur"
        />
        <abbr title={title} className="w-100 my-2">
          <p className="movie_card_text__container text-center">{title}</p>
        </abbr>
        <MovieCardRow title="Release Date" value={release_date} />
        <MovieCardRow title="Vote Count" value={vote_count} />
        <MovieCardRow title="Vote Average" value={vote_average} />
      </div>
    </div>
  );
};
export default MovieCard;
