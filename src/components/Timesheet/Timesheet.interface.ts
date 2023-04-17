import { TimesheetCardProps } from './components/TimesheetCard/TimesheetCard.interface';

export interface TimesheetProps {
  title: string;
  timesheet: TimesheetCardProps[];
  loadMore: () => void;
}
