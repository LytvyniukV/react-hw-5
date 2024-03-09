import MovieReviewsItem from '../MovieReviewsItem/MovieReviewsItem';

export default function MovieReviewsList({ reviews }) {
  return (
    <ul>
      {reviews.map(({ content, author_details, id }) => (
        <li key={id}>
          <MovieReviewsItem content={content} author={author_details} />
        </li>
      ))}
    </ul>
  );
}
