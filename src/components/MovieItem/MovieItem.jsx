import { FaStar } from 'react-icons/fa6';
import { BASE_POSTER_URL, PLACEHOLDER } from '../../utils/constants';
import css from './MovieItem.module.css';
export const MovieItem = ({ poster, title, releaseDate, voteAverage }) => {
  return (
    <>
      <img
        src={`${
          poster ? BASE_POSTER_URL + poster : PLACEHOLDER + '?text=' + title
        }`}
        alt={`${title} poster`}
        className={css.img}
      />
      <div className={css.contentWrap}>
        <h3 className={css.title}>{title}</h3>
        <div className={css.wrapper}>
          <span className={css.text}>
            {Math.round(voteAverage)}
            <FaStar size={18} className={css.icon} />
          </span>
          <span className={css.text}>{releaseDate}</span>
        </div>
      </div>
    </>
  );
};
