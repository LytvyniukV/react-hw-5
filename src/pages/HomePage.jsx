import { useEffect, useState } from 'react';
import { getAllMovies } from '../JS/api';
import { MovieList } from '../components/MovieList/MovieList';
import { Loader } from '../components/Loader/Loader';
import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage';

export default function HomePage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        setLoading(true);
        const { results } = await getAllMovies();
        setMovies(results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getMovies();
  }, []);
  return (
    <>
      {movies.length > 0 ? (
        <MovieList movies={movies} />
      ) : (
        <div>We dont have any movies by this search</div>
      )}
      {loading && <Loader />}
      {error && <ErrorMessage />}
    </>
  );
}
