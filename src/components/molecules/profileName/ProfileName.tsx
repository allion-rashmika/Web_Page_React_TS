import React from 'react';

interface ProfileNameProps {
  name: string;
  image?: string; 
}

export const ProfileName: React.FC<ProfileNameProps> = ({ name, image }) => {
  return (
    <div className="profile-container">
      <div className="notification-icon-container">
        <img src={"assets/profileName/Notification.png"} alt="Notification" className="profile-notification" />
      </div>
      <div className="profile-name">
        <img src={"assets/profileName/profilePicture.png"} alt={name} className="profile-image" />
        <span className="profile-text">{name}</span>
        <span className="dropdown-icon">&#9662;</span>
      </div>
    </div>
  );
};
