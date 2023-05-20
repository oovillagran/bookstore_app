import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook, fetchBooks } from '../redux/books/bookSlice';
import BookStatus from './BookStatus';

const Book = ({
  itemId,
  title,
  author,
  category,
}) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchBooks();
  }, [dispatch]);

  const handleRemove = () => {
    setIsLoading(true);
    dispatch(deleteBook(itemId)).then(() => {
      setIsLoading(false);
      dispatch(fetchBooks());
    }).catch(() => {
      setIsLoading(false);
    });

    if (isLoading) {
      <div>Loading...</div>;
    }
  };

  return (
    <section className="book-container flex">
      <div className="book">
        <div>
          <p className=" book-category">{category}</p>
          <h2 className="book-title roboto">{title}</h2>
          <p className="book-author roboto">{author}</p>
        </div>
        <div className="book-btn-section flex">
          <button className="book-btn roboto" type="button">comments</button>
          <span className="bar-btn" />
          <button className="book-btn roboto remove-btn" type="button" onClick={handleRemove}>remove</button>
          <span className="bar-btn" />
          <button className="book-btn roboto" type="button">edit</button>
        </div>
      </div>
      <BookStatus />
    </section>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
