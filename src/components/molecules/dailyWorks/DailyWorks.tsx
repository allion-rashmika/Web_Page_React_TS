import React from 'react';
import { Text } from '../../atoms';


interface DailyWorksProps {
  progress: string;
}

export const DailyWorks: React.FC<DailyWorksProps> = ({ progress }) => {
  return (
    <div className="daily-works">
      <Text type="h2">Daily Work</Text>
      <div className="daily-works-content">
        <div className='daily-sub-content'>
          <div className="books-this-week">Books this week</div>
          <img src="assets/dailyWork/open-book 1.png" alt="Books" className="daily-book-image" />
        </div>
        <div className="progress-circle">
          <div>{progress}</div>
        </div>
      </div>
    </div>
  );
};
