import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/bookSlice';

const Book = ({
  itemId,
  title,
  author,
  category,
}) => {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeBook(itemId));
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
