import { useEffect, useState } from 'react';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { getMovieByFilter } from '../JS/api';
import { Loader } from '../components/Loader/Loader';
import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage';
import { MovieList } from '../components/MovieList/MovieList';
export default function MoviesPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  const handleSearch = newQuery => {
    setMovies([]);
    setQuery(newQuery);
  };

  useEffect(() => {
    if (!query) return;

    async function getMovies() {
      try {
        setLoading(true);
        const { results } = await getMovieByFilter(query);
        console.log(results);
        console.log(query);
        setMovies(results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getMovies();
  }, [query]);

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={movies} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
    </>
  );
}
