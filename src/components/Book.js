import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBooks } from '../redux/books/bookSlice';

const Book = ({ title, author, id }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h2>{title}</h2>
        <p>{author}</p>
      </div>
      <div>
        <button type="button">comments</button>
        <button className="remove-btn" type="button" onClick={() => { dispatch(removeBooks(id)); }}>remove</button>
        <button type="button">edit</button>
      </div>
    </>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Book;
