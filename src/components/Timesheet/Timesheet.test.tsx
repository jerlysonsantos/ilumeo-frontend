import { describe, test, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { Timesheet } from '.';

describe('Timesheet component', () => {
  const mockData = [
    { date: '2022-01-01', total_hours: '10:00' },
    { date: '2022-01-02', total_hours: '11:00' },
    { date: '2022-01-03', total_hours: '12:00' },
  ];

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('should render component', async () => {
    const { getByText } = render(<Timesheet title="Teste" loadMore={() => {}} timesheet={mockData} />);

    expect(getByText('2022-01-01')).toBeTruthy();
    expect(getByText('10:00')).toBeTruthy();
    expect(getByText('2022-01-02')).toBeTruthy();
    expect(getByText('11:00')).toBeTruthy();
    expect(getByText('2022-01-03')).toBeTruthy();
    expect(getByText('12:00')).toBeTruthy();
  });

  test('should load more when scrolling page', async () => {
    const mockLoadMore = vi.fn();
    const cards = [
      { date: '2022-01-01', total_hours: '8:00' },
      { date: '2022-01-02', total_hours: '7:30' },
      { date: '2022-01-03', total_hours: '6:15' },
    ];

    Object.defineProperty(window, 'innerHeight', { value: 768, writable: true });
    Object.defineProperty(document.documentElement, 'scrollHeight', { value: 800, writable: true });

    const { container } = render(<Timesheet title="teste" loadMore={mockLoadMore} timesheet={cards} />);

    const timesheetBody: any = container.querySelector('[data-testid="timesheet-body"]');
    if (timesheetBody) {
      timesheetBody.style.height = '800px';

      fireEvent.scroll(timesheetBody, { target: { scrollY: 800 } });

      expect(mockLoadMore).toHaveBeenCalledTimes(1);
    }
  });
});
