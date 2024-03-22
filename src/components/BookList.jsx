import React, { useState } from "react";
import defImg from "../assets/download.png";

const BookList = ({ books, deleteBook, setBooks }) => {
  const [editedName, setEditedName] = useState("");

  const handleDelete = (id) => {
    setBooks(books.filter((item) => item.id !== id));
  };

  const handleEdit = (id, name) => {
    setEditedName({ id, name });
  };
  console.log(editedName);

  const handleSave = (id) => {
    const updatedBooks = books.map((book) =>
      book.id === id ? { ...book, name: editedName.name } : book
    );
    setEditedName("");
    setBooks(updatedBooks);
  };

  return (
    <div className="booklist">
      {books.map((item) => (
        <div className="booklist-inner" key={item.id}>
          <img style={{ marginBottom: "10px" }} src={defImg} alt="" />
          <input
            style={{ marginBottom: "10px" }}
            type="text"
            value={item.id === editedName.id ? editedName.name : item.name}
            onChange={(e) =>
              setEditedName({ ...editedName, name: e.target.value })
            }
            readOnly={!editedName || editedName.id !== item.id}
          />
          <div>
            <button onClick={() => handleDelete(item.id)}>X</button> &nbsp;
            <button onClick={() => handleEdit(item.id, item.name)}>Edit</button>
          </div>
          &nbsp;
          {editedName && editedName.id === item.id && (
            <button onClick={() => handleSave(item.id)}>Save</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default BookList;
