import type { Meta, StoryObj } from '@storybook/react';

import { TimesheetCard } from '.';

const meta = {
  title: 'Components/Timesheet/Components/TimesheetCard',
  component: TimesheetCard,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TimesheetCard>;

export default meta;
type Story = StoryObj<typeof TimesheetCard>;

export const Primary: Story = {
  render: () => <TimesheetCard date="00/00/0000" total_hours="00:00"></TimesheetCard>,
};
