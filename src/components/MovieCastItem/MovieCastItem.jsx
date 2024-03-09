export default function MovieCastItem({ actor }) {
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';
  return (
    <>
      <img
        src={`${imgBaseUrl + actor.profile_path}`}
        alt={`${actor.name} photo`}
      />
      <p>
        Actor: <span>{actor.name}</span>
      </p>
      <p>
        Character: <span>{actor.character}</span>
      </p>
    </>
  );
}
