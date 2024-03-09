import { BASE_POSTER_URL, PLACEHOLDER } from '../../utils/constants';
import css from './MovieCastItem.module.css';
export default function MovieCastItem({ actor }) {
  return (
    <>
      <img
        className={css.img}
        src={`${
          actor.profile_path
            ? BASE_POSTER_URL + actor.profile_path
            : PLACEHOLDER + '?text=' + actor.name
        }`}
        alt={`${actor.name} photo`}
      />
      <p className={css.title}>
        Actor: <span className={css.text}>{actor.name}</span>
      </p>
      <p className={css.title}>
        Character: <span className={css.text}>{actor.character}</span>
      </p>
    </>
  );
}
