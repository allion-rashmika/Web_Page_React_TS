import React from 'react';
import { RightBar, Sidebar } from '../../organisms';
import { TrendingBooks, PopularBooks, TopAuthors } from '../../organisms';
import { SearchBar, SummaryBox } from '../../molecules';
import { Book, Author, Summary } from '../../types/types';

const books: Book[] = [
  { id: "1", title: 'The Book Thief', author: 'Markus Zusak', image: 'assets/popular/popularBook1.png' },
  { id: "2", title: 'Sapiens', author: 'Yuval Noah Harari', image: 'assets/popular/popularBook2.png' },
  { id: "3", title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', image: 'assets/popular/popularBook3.png' },
  { id: "4", title: 'Never Eat Alone', author: 'Keith Ferrazzi', image: 'assets/popular/popularBook4.png' },
  { id: "5", title: 'Sherlock Holmes', author: 'Conan Doyle', image: 'assets/popular/popularBook5.png' },
];

const authors: Author[] = [
  { id: 1, name: 'Markus Zusak', image: 'assets/topAuthors/topAuthor1.png' },
  { id: 2, name: 'Dan Brown', image: 'assets/topAuthors/topAuthor2.png' },
  { id: 3, name: 'John Green', image: 'assets/topAuthors/topAuthor3.png' },
  { id: 4, name: 'Yuval Noah Harari', image: 'assets/topAuthors/topAuthor4.png' },
  { id: 5, name: 'J.K. Rowling', image: 'assets/topAuthors/topAuthor5.png' },
  { id: 6, name: 'R.J. Palacio', image: 'assets/topAuthors/topAuthor6.png' },
];

const summary: Summary[] = [
  { id: 1, title: 'The Book Thief', image: 'assets/summaryBox/summary1.png', number: "20" },
  { id: 2, title: 'Sapiens', image: 'assets/summaryBox/summary2.png', number: "30" },
  { id: 3, title: 'The Great Gatsby', image: 'assets/summaryBox/summary3.png', number: "10" },
];

export const DashboardTemplate: React.FC = () => (
  <div className="dashboard-template">
    <Sidebar />
    <div className="content">
      <SearchBar placeholder="Search your book..." />
      <TrendingBooks books={books} />
      <PopularBooks books={books} />
      <TopAuthors authors={authors} />
      <SummaryBox summary={summary} />
    </div>
    <RightBar />
  </div>
);
