import React from 'react';
import { Book } from '../../types/types';

interface UpperBoxProps {
  books: Book[];
  currentBook: Book;
}

export const UpperBox: React.FC<UpperBoxProps> = ({ books, currentBook }) => {
  return (
    <div className="upper-box">
      <div className="book-carousel">
        {books.map((book) => (
          <img
            key={book.id}
            src={book.image}
            alt={book.title}
            className={`book-image ${book.id === currentBook.id ? 'active' : ''}`}
          />
        ))}
      </div>
      <div className="book-info">
        <div className="book-title">
          <p className="title">{currentBook.title}</p>
          <p className="author">{currentBook.author}</p>
        </div>
        <div className="book-controls">
          <button className="control-button">{'<'}</button>
          <button className="control-button">||</button>
          <button className="control-button">{'>'}</button>
        </div>
      </div>
    </div>
  );
};
