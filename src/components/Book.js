import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook, fetchBooks } from '../redux/books/bookSlice';

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
    <>
      <div>
        <p>{category}</p>
        <h2>{title}</h2>
        <p>{author}</p>
      </div>
      <div>
        <button type="button">comments</button>
        <button className="remove-btn" type="button" onClick={handleRemove}>remove</button>
        <button type="button">edit</button>
      </div>
    </>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
