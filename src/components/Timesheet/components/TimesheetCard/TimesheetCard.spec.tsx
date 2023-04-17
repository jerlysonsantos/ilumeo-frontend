import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TimesheetCard } from '.';

describe('TimesheetCard component', () => {
  test('should renders the component', () => {
    render(<TimesheetCard date="00/00/0000" total_hours="10:30" />);

    const dateText = screen.getByText('00/00/0000');
    const timeText = screen.getByText('10:30');

    expect(dateText).toBeTruthy();
    expect(timeText).toBeTruthy();
  });
});
