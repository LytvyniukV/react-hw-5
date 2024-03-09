import MovieCastItem from '../MovieCastItem/MovieCastItem';
import css from './MovieCastList.module.css';
export default function MovieCastList({ actors = [] }) {
  return (
    <ul className={css.list}>
      {actors.map(actor => (
        <li className={css.item} key={actor.id}>
          <MovieCastItem actor={actor} />
        </li>
      ))}
    </ul>
  );
}
