import React from 'react';
import { Text } from '../../atoms';


interface Book {
  id: string;
  title: string;
  author: string;
  image: string;
}

interface TrendingBooksProps {
  books?: Book[]; 
}

export const TrendingBooks: React.FC<TrendingBooksProps> = ({ books }) => {
  return (
    <div className="trending-books">
      <div className="trending-content">
        <Text type="h2">TRENDING BOOKS THIS MONTH</Text>
        <Text type="p">Listen to trending books in this month</Text>
        <button className="trending-button">View Now</button>
      </div>
      <div className="trending-images">
        <img
          src="assets/trending/trendingMan.png"
          alt="Trending Man"
          className="trending-man man"
        />
        <img
          src="assets/trending/books.png"
          alt="Books"
          className="trending-book books"
        />
        <img
          src="assets/trending/frame.png"
          alt="Frame"
          className="trending-frame frame"
        />
      </div>
    </div>
  );
};
