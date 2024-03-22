import React, { useState } from "react";

const BookCrate = ({ addBook }) => {
  const [bookName, setBookName] = useState("");
  const [error, setError] = useState("");

  const getBookName = (e) => {
    setBookName(e.target.value);
  };

  const createBook = (e) => {
    e.preventDefault();
    if (bookName.length === 0) {
      setError("Add Name");
      return;
    } else {
      setError("");
      addBook(bookName);
      setBookName("");
    }
  };
  return (
    <>
      <form onSubmit={createBook}>
        <input
          value={bookName}
          onChange={getBookName}
          type="text"
          placeholder="Add Book"
          autoFocus
        />
        <button onClick={createBook}>Add</button>
        <p style={{ color: "red" }}>{error}</p>
      </form>
    </>
  );
};

export default BookCrate;
