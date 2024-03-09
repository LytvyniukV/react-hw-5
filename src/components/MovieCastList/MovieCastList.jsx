import MovieCastItem from '../MovieCastItem/MovieCastItem';

export default function MovieCastList({ actors = [] }) {
  return (
    <ul>
      {actors.map(actor => (
        <li key={actor.id}>
          <MovieCastItem actor={actor} />
        </li>
      ))}
    </ul>
  );
}
