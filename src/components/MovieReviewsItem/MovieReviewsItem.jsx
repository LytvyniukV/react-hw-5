import css from './MovieReviewsItem.module.css';
export default function MovieReviewsItem({ content, username }) {
  return (
    <>
      <p className={css.title}>
        Author: <span className={css.text}>{username}</span>
      </p>
      <p className={css.content}>{content}</p>
    </>
  );
}
