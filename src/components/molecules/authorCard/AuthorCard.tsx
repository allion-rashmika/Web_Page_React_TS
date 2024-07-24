import React from 'react';
import { Image } from '../../atoms';
import { Text } from '../../atoms';


interface Author {
  image: string;
  name: string;
}


interface AuthorCardProps {
  author: Author;
}

export const AuthorCard: React.FC<AuthorCardProps> = ({ author }) => {
  return (
    <div className="author-card">
      <Image src={author.image} alt={author.name} />
      <Text type="p">{author.name}</Text>
    </div>
  );
};
