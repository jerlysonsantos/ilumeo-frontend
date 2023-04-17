import React from 'react';
import { TimesheetCardProps } from './TimesheetCard.interface';
import { CardContainer, DateText, TimeText } from './TimesheetCard.style';

export const TimesheetCard: React.FC<TimesheetCardProps> = ({ date, total_hours }) => {
  return (
    <CardContainer>
      <DateText>{date}</DateText>
      <TimeText>{total_hours}</TimeText>
    </CardContainer>
  );
};
