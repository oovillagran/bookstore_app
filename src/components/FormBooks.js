import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
// import { addBook } from '../redux/books/bookSlice';
import { addNewBook, fetchBooks } from '../redux/books/bookSlice';

const FormBooks = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false); // added

  useEffect(() => {
    fetchBooks();
  }, [dispatch]);

  const [formList, setForm] = useState({
    title: '',
    author: '',
    item_id: '',
    category: '',
  });

  const onStateUpdate = ({ target }) => {
    setForm({
      ...formList,
      [target.name]: target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (
      formList.title.trim().length <= 0
      || formList.author.trim().length <= 0
      || formList.category.trim().length <= 0
    ) {
      return;
    }

    setIsLoading(true);
    dispatch(addNewBook({
      ...formList,
      item_id: uuidv4(),
    })).then(() => {
      setIsLoading(false);
      setForm({
        title: '',
        author: '',
        item_id: '',
        category: '',
      });
      dispatch(fetchBooks());
    }).catch(() => {
      setIsLoading(false);
    });

    if (isLoading) {
      <div>Loading...</div>;
    }
  };

  return (
    <div>
      <h3>add book</h3>
      <form className="form" onSubmit={onSubmit}>
        <label htmlFor="title">
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Book Title"
            value={formList.title}
            onChange={onStateUpdate}
          />
        </label>
        <label htmlFor="author">
          <input
            name="author"
            id="author"
            value={formList.author}
            onChange={onStateUpdate}
            placeholder="Book Author"
          />
        </label>
        <label htmlFor="category">
          <input
            name="category"
            id="category"
            value={formList.category}
            onChange={onStateUpdate}
            placeholder="Book Category"
          />
        </label>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default FormBooks;
