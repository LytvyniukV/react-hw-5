import { FaStar } from 'react-icons/fa6';
import css from './MovieItem.module.css';
export const MovieItem = ({ poster, title, releaseDate, voteAverage }) => {
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';
  return (
    <>
      <img
        src={`${imgBaseUrl + poster}`}
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
