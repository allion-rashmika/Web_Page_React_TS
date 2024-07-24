import React from 'react';
import { ProfileName } from '../../molecules';
import { UpperBox } from '../../molecules';
import { DailyWorks, NextBooks } from '../../molecules';
import { Book } from '../../types/types';

const books: Book[] = [
    { id: "1", title: 'Sapiens', author: 'Yuval Noah Harari', image: 'assets/popular/popularBook2.png' },
    { id: "2", title: 'Wonder', author: 'R.J. Palacio', image: 'assets/upperBox/activeBook.png' },
    { id: "3", title: 'The Book Thief', author: 'Markus Zusak', image: 'assets/popular/popularBook1.png' },
  ];

  const currentBook: Book = { id: "2", title: 'Wonder', author: 'R.J. Palacio', image: 'assets/upperBox/activeBook.png' };

  const nextBooks: Book[] = [
    { id: "1", image: 'assets/nextbook/nextBook1.png', title: 'Fault In Our Stars', author: 'John Green', time: '02:20:03' },
    { id: "2", image: 'assets/popular/popularBook1.png', title: 'Never Eat Alone', author: 'Keith Ferrazzi', time: '02:20:03' },
    { id: "3", image: 'assets/popular/popularBook4.png', title: 'The Book Thief', author: 'Markus Zukas', time: '02:20:03' },
  ];

  export const RightBar: React.FC = () => {
    return (
      <div className='rightBar'>
        <ProfileName name="Thanh Pham" image="path/to/image.png" />
        <br />
        <UpperBox books={books} currentBook={currentBook} />
        <NextBooks books={nextBooks} />
        <DailyWorks progress="3/5" /> 
      </div>
    );
  };
