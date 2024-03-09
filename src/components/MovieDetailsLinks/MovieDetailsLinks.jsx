import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import css from './MovieDetailsLinks.module.css';
export default function MovieDetailsLinks() {
  return (
    <div>
      <ul className={css.list}>
        <li className={css.item}>
          <Link className={css.link} to="cast">
            Cast
          </Link>
        </li>
        <li className={css.item}>
          <Link className={css.link} to="reviews">
            Reviews
          </Link>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
