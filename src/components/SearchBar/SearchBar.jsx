import { IoSearch } from 'react-icons/io5';
import css from './SearchBar.module.css';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

export const SearchBar = () => {
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [filter, setFilter] = useSearchParams();
  const userQuery = filter.get('query') ?? '';
  const notify = () => toast('Please enter search term!');

  const onChange = event => {
    const query = event.target.value;
    if (query.trim() === '') {
      setIsButtonActive(false);
    }

    setIsButtonActive(true);
  };
  const handleSubmit = event => {
    event.preventDefault();
    const query = event.target.elements.query.value;
    if (query.trim() === '') {
      notify();
      return;
    }
    filter.set('query', query.trim());
    setFilter(filter);
  };
  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          name="query"
          onChange={onChange}
          defaultValue={userQuery}
        />
        {isButtonActive && (
          <button type="submit" className={css.btn}>
            <IoSearch size={20} className={css.icon} />
          </button>
        )}
      </form>
      <Toaster
        toastOptions={{
          style: {
            backgroundColor: 'coral',
            color: 'white',
          },
          position: 'top-right',
        }}
      />
    </>
  );
};
