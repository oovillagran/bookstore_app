import React, { useState } from 'react';
import PropTypes from 'prop-types';

const authors = [
  'Author',
  'Suzane Collins',
  'Frank Herbert',
];

const FormBooks = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState(authors[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, author });
    setTitle('');
    setAuthor(authors[0]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Book Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label htmlFor="author">
          <select
            name="author"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
            {authors.map((author) => (
              <option key={author} value={author}>
                {author}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

FormBooks.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default FormBooks;
