import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/books/bookSlice';

const FormBooks = () => {
  const dispatch = useDispatch();

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

    dispatch(addBook({
      ...formList,
      item_id: uuidv4(),
    }));

    setForm({
      title: '',
      author: '',
      item_id: '',
      category: '',
    });
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
