import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Vc7rXRyGClD25RCBUtWt/books';

const initialState = {
  booksList: [],
  status: 'idle',
  error: null,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const addNewBook = createAsyncThunk('books/addBook', async (newBookAdded) => {
  try {
    const response = await axios.post(URL, newBookAdded);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const deleteBook = createAsyncThunk('books/deleteBook', async (bookId) => {
  try {
    const response = await axios.delete(`${URL}/${bookId}`);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.booksList = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectAllBooks = (state) => state.book.booksList;
export const getBooksStatus = (state) => state.book.status;
export const getBooksError = (state) => state.book.error;

// export const { removeBook, addBook } = bookSlice.actions;
export default bookSlice.reducer;
