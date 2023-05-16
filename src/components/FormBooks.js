import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/bookSlice';

const authors = [
  'Author',
  'Suzane Collins',
  'Frank Herbert',
];

const FormBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState(authors[0]);
  const dispatch = useDispatch();

  const handleAddBook = () => {
    const newBook = {
      item_id: 'item4',
      title: 'New Book',
      author: 'Author',
      category: 'Fiction',
    };
    dispatch(addBook(newBook));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onSubmit({ title, author });
  //   setTitle('');
  //   setAuthor(authors[0]);
  // };

  return (
    <div>
      <h3>add book</h3>
      <form>
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
        <button type="button" onClick={handleAddBook}>ADD BOOK</button>
      </form>
    </div>
  );
};

// FormBooks.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

export default FormBooks;
