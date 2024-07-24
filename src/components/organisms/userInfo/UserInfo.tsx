import React from 'react';


interface User {
  avatar?: string;
  name?: string;
  role?: string;
}

interface UserInfoProps {
  user?: User;
}

export const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  
  const defaultUser: User = {
    avatar: 'https://via.placeholder.com/150',
    name: 'Default User',
    role: 'User'
  };

 
  const { avatar, name, role } = user || defaultUser;

  return (
    <div className="user-info">
      <img src={avatar} alt={`${name}'s avatar`} />
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  );
};
