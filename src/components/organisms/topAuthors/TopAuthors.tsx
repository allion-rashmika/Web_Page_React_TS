import React from 'react';
import { AuthorCard } from '../../molecules';
import { Text } from '../../atoms';


interface Author {
  id: number;
  name: string;
  image: string;
}

interface TopAuthorsProps {
  authors: Author[];
}

export const TopAuthors: React.FC<TopAuthorsProps> = ({ authors }) => {
  return (
    <div className="top-authors">
      <div className="top-authors-header">
        <Text type="h2">Top Authors</Text>
        <Text type="p" className="view-all">View all</Text>
      </div>
      <div className="author-list">
        {authors.map(author => (
          <AuthorCard key={author.id} author={author} />
        ))}
      </div>
    </div>
  );
};
