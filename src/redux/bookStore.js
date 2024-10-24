
import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './bookSlice';

const store = configureStore({
  reducer: {
    books: booksReducer, // Add books slice here
  },
});

export default store;
