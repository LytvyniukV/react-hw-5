import { useEffect, useState } from 'react';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { getMovieByFilter } from '../JS/api';
import { Loader } from '../components/Loader/Loader';
import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage';
import { MovieList } from '../components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';
export default function MoviesPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);
  const [query] = useSearchParams();

  const filter = query.get('query') ?? '';

  useEffect(() => {
    if (filter === '') return;

    async function getMovies() {
      try {
        setLoading(true);
        const { results } = await getMovieByFilter(filter);
        setMovies(results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getMovies();
  }, [filter]);

  return (
    <main>
      <SearchBar />
      <MovieList movies={movies} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
    </main>
  );
}
