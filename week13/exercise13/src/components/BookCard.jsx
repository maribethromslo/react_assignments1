import { useState } from 'react';

function BookCard({ title, author, description, image }) {
  const [isRead, setIsRead] = useState(false);

  function toggleRead() {
    setIsRead(!isRead);
  }

  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-info">
        <h2>{title}</h2>
        <h3>{author}</h3>
        <p>{description}</p>
        <button
          className={isRead ? 'btn-read' : 'btn-unread'}
          onClick={toggleRead}
        >
          {isRead ? '✓ Read' : 'Not read'}
        </button>
      </div>
    </div>
  );
}

export default BookCard;