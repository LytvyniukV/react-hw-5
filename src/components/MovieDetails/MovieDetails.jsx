import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Loader } from '../Loader/Loader';

export default function MovieDetails() {
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
  </div>;
}
