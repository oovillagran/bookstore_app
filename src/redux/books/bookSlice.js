import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  booksList: [],
  amount: 3,
  total: 0,
  isLoading: true,
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBooks: (state, action) => {
      const itemId = action.payload;
      state.booksList = [...state.booksList, (item) => item.id === itemId];
    },
    removeBooks: (state, action) => {
      const itemId = action.payload;
      state.booksList = state.booksList.filter((item) => item.id !== itemId);
    },
  },
});

export const { addBooks, removeBooks } = bookSlice.actions;
export default bookSlice.reducer;
