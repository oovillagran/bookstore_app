import Book from './Book';
import FormBooks from './FormBooks';

const BooksList = () => {
  const books = [
    {
      id: 1,
      title: 'The Hunger Games',
      author: 'Suzane Collins',
      genre: 'Action',
      chapter: '17',
      progress: '64%',
    },
    {
      id: 2,
      title: 'Dune',
      author: 'Frank Herbert',
      genre: 'Science Fiction',
      chapter: '3',
      progress: '8%',
    },
    {
      id: 3,
      title: 'Capital in the Twenty-First Century',
      author: 'Suzane Collins',
      genre: 'Economy',
      chapter: 'Introduction',
      progress: '0%',
    },
  ];

  return (
    <>
      <div>
        {books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            genre={book.genre}
            title={book.title}
            author={book.author}
            progress={book.progress}
            chapter={book.chapter}
          />
        ))}
      </div>
      <FormBooks />
    </>
  );
};

export default BooksList;
