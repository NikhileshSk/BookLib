// src/components/AddBook.js
import React, { useState } from 'react';
import { addBook,deleteBook } from '../redux/bookSlice';

import { useDispatch } from 'react-redux';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleAddBook = () => {
    dispatch(addBook({ title }));
    setTitle(''); 
  };
  const handleDeleteBook = () => {
    dispatch(deleteBook({ title }));
    setTitle(''); 
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter book title"
      />
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Enter book Author"
      />
      <button onClick={handleAddBook}>Add Book</button>
      <button onClick={handleDeleteBook}>Delete Book</button>
    </div>
  );
};

export default AddBook;
