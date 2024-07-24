import React from 'react';
import { Book } from '../../types/types'; 
import { Text } from '../../atoms';

interface NextBooksProps {
  books: Book[];
}

export const NextBooks: React.FC<NextBooksProps> = ({ books }) => {
  return (
    <div className="next-books">
      <Text type="h2">Next Books</Text>
      <div className="next-book-list">
        {books.map(book => (
          <div key={book.id} className="next-book-card">
            <img src={book.image} alt={book.title} className="book-image" />
            <div className="book-details">
              <Text type="h3">{book.title}</Text>
              <Text type="p">{book.author}</Text>
            </div>
            <Text type="p" className="book-time">{book.time}</Text>
          </div>
        ))}
      </div>
    </div>
  );
};
