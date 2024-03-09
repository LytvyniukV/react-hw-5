import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { Loader } from '../components/Loader/Loader';
import { getMovieById } from '../JS/api';
import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage';
import MovieDescription from '../components/MovieDescription/MovieDescription';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movie, setMovie] = useState('');
  useEffect(() => {
    async function getMovie() {
      try {
        setLoading(true);
        const film = await getMovieById(movieId);
        setMovie(film);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getMovie();
  }, [movieId]);

  return (
    <main>
      <MovieDescription movie={movie} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <div>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </main>
  );
}
