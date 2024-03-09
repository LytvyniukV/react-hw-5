import { IoSearch } from 'react-icons/io5';
import css from './SearchBar.module.css';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const SearchBar = () => {
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [filter, setFilter] = useSearchParams();
  const userQuery = filter.get('query') ?? '';

  const handleSearch = event => {
    const query = event.target.value;
    if (query.trim() === '') {
      setIsButtonActive(false);
    }
    filter.set('query', query.trim());
    setFilter(filter);
    setIsButtonActive(true);
  };

  return (
    <>
      <div className={css.form}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          name="query"
          onChange={handleSearch}
          value={userQuery}
        />
        {isButtonActive && (
          <button type="submit" className={css.btn}>
            <IoSearch size={20} className={css.icon} />
          </button>
        )}
      </div>
    </>
  );
};
