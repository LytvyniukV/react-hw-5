import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Loader } from '../components/Loader/Loader';
import { getMovieById } from '../JS/api';
import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage';
import MovieDescription from '../components/MovieDescription/MovieDescription';
import MovieDetailsLinks from '../components/MovieDetailsLinks/MovieDetailsLinks';
import BackLinkbtn from '../components/BackLinkBtn/BackLinkBtn';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movie, setMovie] = useState('');
  const location = useLocation();

  const backLinkRef = useRef(location.state);
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
      <Link to={backLinkRef.current}>
        <BackLinkbtn />
      </Link>
      <MovieDescription movie={movie} />
      <MovieDetailsLinks />
      {loading && <Loader />}
      {error && <ErrorMessage />}
    </main>
  );
}
