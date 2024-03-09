import { FaStar } from 'react-icons/fa6';
import css from './MovieDescription.module.css';
export default function MovieDescription({ movie }) {
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';
  const normilizeRate = parseFloat(movie.vote_average).toFixed(1);
  return (
    <div className={css.wrapper}>
      <img
        className={css.img}
        src={`${imgBaseUrl + movie.poster_path}`}
        alt={`${movie.original_title} poster`}
      />
      <div className={css.content}>
        <h2 className={css.title}>{movie.original_title}</h2>
        <p className={css.date}>Release date</p>
        <span className={css.text}>{movie.release_date}</span>
        <p className={css.rating}>
          {normilizeRate} <FaStar size={18} />
        </p>
        <h3 className={css.subtitle}>Overview</h3>
        <p className={css.text}>{movie.overview}</p>

        <h3 className={css.subtitle}>Genres</h3>
        <ul className={css.genresList}>
          {movie.genres?.map(genre => (
            <li className={css.text} key={genre.id}>
              {genre.name}
            </li>
          ))}
        </ul>

        <h3 className={css.subtitle}>Runtime</h3>
        <span className={css.text}>{`${movie.runtime} min`}</span>
      </div>
    </div>
  );
}
