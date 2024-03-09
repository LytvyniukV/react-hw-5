import css from './MovieDescription.module.css';
import MovieDescriptionDetails from '../MovieDescriptionDetails/MovieDescriptionDetails';
import MovieGenres from '../MovieGenres/MovieGenres';
import { BASE_POSTER_URL, PLACEHOLDER } from '../../utils/constants';
export default function MovieDescription({ movie }) {
  const normilizeRate = parseFloat(movie.vote_average).toFixed(1);
  return (
    <div className={css.wrapper}>
      <img
        className={css.img}
        src={`${
          movie.poster_path
            ? BASE_POSTER_URL + movie.poster_path
            : PLACEHOLDER + '?text=' + movie.original_title
        }`}
        alt={`${movie.original_title} poster`}
      />
      <div className={css.content}>
        <h2 className={css.title}>{movie.original_title}</h2>
        <MovieDescriptionDetails
          title={'Release date:'}
          text={movie.release_date}
        />
        <MovieDescriptionDetails title={'Rating:'} text={normilizeRate} />
        <MovieDescriptionDetails title={'Overview:'} text={movie.overview} />
        <MovieDescriptionDetails
          title={'Runtime:'}
          text={`${movie.runtime} min`}
        />
        <MovieDescriptionDetails
          title={'Genres:'}
          text={<MovieGenres genres={movie.genres} />}
        />
      </div>
    </div>
  );
}
