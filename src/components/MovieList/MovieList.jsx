import { Link, useLocation } from 'react-router-dom';
import { MovieItem } from '../MovieItem/MovieItem';
import css from './MovieList.module.css';
export const MovieList = ({ movies = [] }) => {
  const location = useLocation();
  return (
    <section>
      <ul className={css.list}>
        {movies.map(
          ({ id, poster_path, title, release_date, vote_average }) => {
            return (
              <li key={id} className={css.item}>
                <Link
                  to={`/movies/${id}`}
                  className={css.link}
                  state={location}
                >
                  <MovieItem
                    poster={poster_path}
                    title={title}
                    releaseDate={release_date}
                    voteAverage={vote_average}
                  />
                </Link>
              </li>
            );
          }
        )}
      </ul>
    </section>
  );
};
