function BookCard({ title, author, description }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <h3>{author}</h3>
      <p>{description}</p>
    </div>
  );
}

export default BookCard;