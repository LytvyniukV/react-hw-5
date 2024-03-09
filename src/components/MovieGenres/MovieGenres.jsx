import css from './MovieGenres.module.css';
export default function MovieGenres({ genres }) {
  return (
    <ul className={css.genresList}>
      {genres?.map(genre => (
        <li className={css.text} key={genre.id}>
          {genre.name};
        </li>
      ))}
    </ul>
  );
}
