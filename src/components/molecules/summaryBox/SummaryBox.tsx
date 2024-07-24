import React from 'react';
import { Text } from '../../atoms';

interface SummaryItem {
  id: number;
  image: string;
  title: string;
  number: string;
}


interface SummaryBoxProps {
  summary: SummaryItem[];
}

export const SummaryBox: React.FC<SummaryBoxProps> = ({ summary }) => {
  return (
    <div className="summary-box">
      <div className="summary-box-list">
        {summary.map(item => (
          <div key={item.id} className="summary-box-card">
            <img src={item.image} alt={item.title} className="summary-image" />
            <div className="summary-details">
              <Text type="h3">{item.number}</Text>
              <Text type="p">{item.title}</Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
