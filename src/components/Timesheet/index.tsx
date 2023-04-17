import { useEffect, useRef, useState } from 'react';
import { TimesheetProps } from './Timesheet.interface';
import { TimesheetCard } from './components/TimesheetCard';
import {
  TimesheetContainer,
  TimesheetTitle,
  TimesheetWrapper,
  TimesheetHeader,
  TimesheetBody,
} from './Timesheet.style';
export const Timesheet: React.FC<TimesheetProps> = ({ title, loadMore, timesheet }) => {
  const [isLoading, setIsLoading] = useState(false);
  const timesheetBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!timesheetBodyRef.current) {
        return;
      }

      const scrollTop = Math.ceil(timesheetBodyRef.current?.scrollTop);
      const offsetHeight = Math.ceil(timesheetBodyRef.current?.offsetHeight);
      const scrollHeight = Math.ceil(timesheetBodyRef.current?.scrollHeight);

      if (!isLoading && scrollTop + offsetHeight >= scrollHeight) {
        setIsLoading(true);
        loadMore();
      }
    };

    timesheetBodyRef.current?.addEventListener('scroll', handleScroll);
    return () => timesheetBodyRef.current?.removeEventListener('scroll', handleScroll);
  }, [isLoading, loadMore]);

  return (
    <TimesheetContainer>
      <TimesheetHeader>
        <TimesheetTitle>{title}</TimesheetTitle>
      </TimesheetHeader>
      {timesheet && (
        <TimesheetBody ref={timesheetBodyRef}>
          <TimesheetWrapper>
            {timesheet.map((timesheetItem, index) => (
              <TimesheetCard key={index} {...timesheetItem} />
            ))}
          </TimesheetWrapper>
        </TimesheetBody>
      )}
    </TimesheetContainer>
  );
};
