import { useState } from "react";
import BookCrate from "./components/BookCrate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const addBook = (title) => {
    setBooks([...books, { id: books.length + 1, name: title }]);
  };

  return (
    <div>
      <BookCrate addBook={addBook} />
      <BookList setBooks={setBooks} books={books} />
    </div>
  );
}

export default App;
