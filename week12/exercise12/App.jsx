
import './css/App.css';
import books from './src/data/bookData';
import BookCard from './src/components/BookCard';

// ------- APP COMPONENT ---------
function App() {
  return (
    <div className="container">
      <h1>My Book List</h1>

      {books.map((book) => (
        <BookCard
          key={book.id}
          title={book.title}
          author={book.author}
          description={book.description}
        />
      ))}
    </div>
  );
}

export default App;

