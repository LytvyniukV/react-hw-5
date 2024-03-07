import { FaStar } from 'react-icons/fa6';

export default function MovieDescription({ movie }) {
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';

  return (
    <>
      <img
        src={`${imgBaseUrl + movie.poster_path}`}
        alt={`${movie.original_title} poster`}
      />
      <div>
        <h2>{movie.original_title}</h2>
        <p>
          {movie.vote_average} <FaStar size={18} />
        </p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>

        <h3>Genres</h3>
        <ul>
          {movie.genres?.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>

        <h3>Runtime</h3>
        <span>{`${movie.runtime} min`}</span>
      </div>
    </>
  );
}
