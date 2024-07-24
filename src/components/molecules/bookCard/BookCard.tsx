import React from 'react';
import { Image } from '../../atoms';
import { Text } from '../../atoms';

interface Book {
  image: string;
  title: string;
  author: string;
}

interface BookCardProps {
  book: Book;
}

export const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className="book-card">
      <Image src={book.image} alt={book.title} />
      <Text type="h4">{book.title}</Text>
      <Text type="p">{book.author}</Text>
    </div>
  );
};
