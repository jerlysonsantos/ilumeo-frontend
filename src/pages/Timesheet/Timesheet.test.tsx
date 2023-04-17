import { describe, test, vi } from 'vitest';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { register, getTimesheet, currentHour } from '../../services/api/timesheet/timesheet.service';

import { Timesheet } from '.';

vi.mock('../../services/api/timesheet/timesheet.service', () => ({
  getTimesheet: vi.fn().mockResolvedValue({
    paginateOptions: { page: 0 },
    items: [],
  }),
  currentHour: vi.fn().mockResolvedValue({
    total_hours: '0h 00m',
    last_register_type: null,
  }),
  register: vi.fn(),
}));

describe('Timesheet', () => {
  it('should render the component', () => {
    const { container } = render(<Timesheet />);
    expect(container).toBeTruthy();
  });

  test('should register button click', async () => {
    const { getByRole, findByText } = render(<Timesheet />);

    const button = getByRole('button', { name: /hora de entrada/i });

    fireEvent.click(button);

    expect(register).toHaveBeenCalled();

    const toast = await findByText(/registro realizado com sucesso/i);
    expect(toast).toBeTruthy();
  });

  it('should handleTimesheet when the component is mounted', async () => {
    render(<Timesheet />);

    await waitFor(() => {
      expect(getTimesheet).toHaveBeenCalledWith(0, 1);
    });
  });

  it('should handleCurrentHour when the component is mounted', async () => {
    render(<Timesheet />);

    await waitFor(() => {
      expect(currentHour).toHaveBeenCalled();
    });
  });
});
