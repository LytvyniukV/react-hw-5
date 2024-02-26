import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function MovieDetailsPage() {
  return (
    <div>
      <li>
        <Link to="cast">Link to actors</Link>
      </li>
      <li>
        <Link to="reviews">Link to reviews</Link>
      </li>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
