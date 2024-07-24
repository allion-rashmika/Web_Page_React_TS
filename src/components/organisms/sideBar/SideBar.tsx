import React, { useState } from 'react';
import { Logo } from "../../atoms";


type MenuItem = 'Home' | 'Categories' | 'Favorites' | 'Your Library' | 'Settings' | 'Log out';

export const Sidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<MenuItem>('Home');

  return (
    <div className="sidebar">
      <Logo />
      <ul>
        <li
          className={activeItem === 'Home' ? 'active' : ''}
          onClick={() => setActiveItem('Home')}
        >
          <i className="fas fa-home"></i> Home
        </li>
        <li
          className={activeItem === 'Categories' ? 'active' : ''}
          onClick={() => setActiveItem('Categories')}
        >
          <img src="assets/sidebar/Category.png" alt="category" /> Categories
        </li>
        <li
          className={activeItem === 'Favorites' ? 'active' : ''}
          onClick={() => setActiveItem('Favorites')}
        >
          <img src="assets/sidebar/Heart.png" alt="Favorites" /> Favorites
        </li>
        <li
          className={activeItem === 'Your Library' ? 'active' : ''}
          onClick={() => setActiveItem('Your Library')}
        >
          <img src="assets/sidebar/Folder.png" alt="Your Library" /> Your Library
        </li>
        <li
          className={activeItem === 'Settings' ? 'active' : ''}
          onClick={() => setActiveItem('Settings')}
        >
          <img src="assets/sidebar/Setting.png" alt="Settings" /> Settings
        </li>
        <li
          className={activeItem === 'Log out' ? 'active' : ''}
          onClick={() => setActiveItem('Log out')}
        >
          <img src="assets/sidebar/Logout.png" alt="Log out" /> Log out
        </li>
      </ul>
      <picture className="sidebar_image">
        <source media="(min-width:768px)" srcSet="assets/sidebar/sidebarman.png" />
        <img src="assets/sidebar/sidebarman.png" alt="Lorem" />
      </picture>
    </div>
  );
};
