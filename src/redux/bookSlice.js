
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
      console.log('book added');

      
      
    },
    deleteBook:(state,action) =>{
      state.books = state.books.filter(book => book.id !== action.payload);
      console.log('book deleted');
    }
  },
});

// Export actions
export const { addBook,deleteBook } = booksSlice.actions;

// Export reducer
export default booksSlice.reducer;
