import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  booksList: [],
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = action.payload;
      state.booksList.push(newBook);
    },
    removeBook: (state, action) => {
      state.booksList.filter((book) => book.id !== action.payload);
    },
  },
});

export const { removeBook } = bookSlice.actions;
export default bookSlice.reducer;
