import PropTypes from 'prop-types';

const Book = ({ title, author }) => (
  <div>
    <h2>{title}</h2>
    <p>{author}</p>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
