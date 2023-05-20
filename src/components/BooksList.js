import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  selectAllBooks, getBooksStatus, getBooksError, fetchBooks,
} from '../redux/books/bookSlice';
import Book from './Book';
import FormBooks from './FormBooks';

const BooksList = () => {
  const dispatch = useDispatch();

  const books = useSelector(selectAllBooks);
  const booksStatus = useSelector(getBooksStatus);
  const error = useSelector(getBooksError);
  useEffect(() => {
    if (booksStatus === 'idle') {
      dispatch(fetchBooks());
    }
  }, [booksStatus, dispatch]);

  let content;
  if (booksStatus === 'loading') {
    content = <h2>&quot;Loading books...&quot;</h2>;
  } else if (booksStatus === 'succeeded') {
    content = Object.entries(books).map(([key, book]) => (
      <Book
        key={key}
        title={book[0].title}
        author={book[0].author}
        itemId={key}
        category={book[0].category}
      />
    ));
  } else if (booksStatus === 'failed') {
    content = <h2>{error}</h2>;
  }

  return (
    <div className="main">
      <div>
        {content}
      </div>
      <hr className="division" />
      <FormBooks />
    </div>
  );
};

export default BooksList;
