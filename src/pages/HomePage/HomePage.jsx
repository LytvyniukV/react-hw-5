import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <li>
        <Link to="/movies/:movieId">Link to movie</Link>
      </li>
    </div>
  );
}
