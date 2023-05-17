import { useSelector } from 'react-redux';
import Book from './Book';
import FormBooks from './FormBooks';

const BooksList = () => {
  const { booksList } = useSelector((store) => store.book);
  return (
    <>
      <div>
        {booksList.map((book) => (
          <Book
            key={book.item_id}
            title={book.title}
            author={book.author}
            itemId={book.item_id}
            category={book.category}
          />
        ))}
      </div>
      <FormBooks />
    </>
  );
};

export default BooksList;
