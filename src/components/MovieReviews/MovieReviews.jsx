import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { getMovieReviews } from '../../JS/api';
import MovieReviewsList from '../MovieReviewsList/MovieReviewsList';

export default function MovieReviews() {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getActors = async () => {
      try {
        setLoading(true);
        const { results } = await getMovieReviews(movieId);
        setReviews(results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getActors();
  }, [movieId]);
  return (
    <div>
      {reviews.length > 0 ? (
        <MovieReviewsList reviews={reviews} />
      ) : (
        'No reviews yet'
      )}
      {loading && <Loader />}
      {error && <ErrorMessage />}
    </div>
  );
}
