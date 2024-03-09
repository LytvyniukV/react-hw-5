import MovieReviewsItem from '../MovieReviewsItem/MovieReviewsItem';
import css from './MovieReviewsList.module.css';
export default function MovieReviewsList({ reviews }) {
  return (
    <ul className={css.list}>
      {reviews.map(({ content, author_details, id }) => (
        <li className={css.item} key={id}>
          <MovieReviewsItem
            content={content}
            username={author_details.username}
          />
        </li>
      ))}
    </ul>
  );
}
