import css from './MovieDescriptionDetails.module.css';
export default function MovieDescriptionDetails({ title, text }) {
  return (
    <div className={css.wrap}>
      <h3 className={css.title}>{title}</h3>
      <span className={css.text}>{text}</span>
    </div>
  );
}
