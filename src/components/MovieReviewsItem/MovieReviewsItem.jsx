export default function MovieReviewsItem({ content, author }) {
  const baseImgUrl = 'https://image.tmdb.org/t/p/w500';
  return (
    <>
      {author.avatar_path && (
        <img
          src={`${baseImgUrl + author.avatar_path}`}
          alt={`${author.username} avatar`}
        />
      )}
      <p>
        Author <span>{author.username}</span>
      </p>
      <p>{content}</p>
    </>
  );
}
