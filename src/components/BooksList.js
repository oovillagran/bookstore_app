import { useSelector } from 'react-redux';
import Book from './Book';
import FormBooks from './FormBooks';

const BooksList = () => {
  const { books } = useSelector((store) => store.book);
  return (
    <>
      <div>
        {books.map((book) => (
          <Book
            key={book.item_id}
            title={book.title}
            author={book.author}
            id={book.item_id}
          />
        ))}
      </div>
      <FormBooks />
    </>
  );
};

export default BooksList;
