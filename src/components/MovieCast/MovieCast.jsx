import { useEffect, useState } from 'react';
import { getActorsOfMovie } from '../../JS/api';
import { useParams } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import MovieCastList from '../MovieCastList/MovieCastList';

export default function MovieCast() {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [actors, setActors] = useState([]);
  useEffect(() => {
    const getActors = async () => {
      try {
        setLoading(true);
        const { cast } = await getActorsOfMovie(movieId);
        setActors(cast);
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
      <MovieCastList actors={actors} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
    </div>
  );
}
