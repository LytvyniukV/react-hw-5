import { lazy, Suspense } from 'react';
import css from './App.module.css';
import { Route, Routes } from 'react-router-dom';
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('../pages/MovieDetailsPage/MovieDetailsPage')
);
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));
const MovieCast = lazy(() => import('./MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('./MovieReviews/MovieReviews'));
const Navigation = lazy(() => import('./Navigation/Navigation'));

function App() {
  return (
    <>
      <div className={css.container}>
        <Navigation />
        <Suspense fallback={<div>Loading page...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;