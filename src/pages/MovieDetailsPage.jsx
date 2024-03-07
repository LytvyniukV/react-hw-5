import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../components/Loader/Loader';
import { getMovieById } from '../JS/api';
import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage';
import MovieDetails from '../components/MovieDetails/MovieDetails';
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
    <>
      <MovieDescription movie={movie} />
      <MovieDetails />
      {loading && <Loader />}
      {error && <ErrorMessage />}
    </>
  );
}
