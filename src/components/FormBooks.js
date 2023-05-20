import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addNewBook, fetchBooks } from '../redux/books/bookSlice';

const FormBooks = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

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
    <div className="form">
      <h3 className="form-title ff-m-b">add new book</h3>
      <form className="form-data flex" onSubmit={onSubmit}>
        <input
          className="input-title"
          type="text"
          name="title"
          id="title"
          placeholder="Book Title"
          value={formList.title}
          onChange={onStateUpdate}
        />
        <input
          className="input-data"
          name="author"
          id="author"
          value={formList.author}
          onChange={onStateUpdate}
          placeholder="Book Author"
        />
        <input
          className="input-data"
          name="category"
          id="category"
          value={formList.category}
          onChange={onStateUpdate}
          placeholder="Book Category"
        />
        <button className="form-btn ff-r-b" type="submit">add book</button>
      </form>
    </div>
  );
};

export default FormBooks;
