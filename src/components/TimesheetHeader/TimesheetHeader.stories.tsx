import type { Meta, StoryObj } from '@storybook/react';

import { TimesheetHeader } from '.';

const meta = {
  title: 'Components/TimesheetHeader',
  component: TimesheetHeader,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TimesheetHeader>;

export default meta;
type Story = StoryObj<typeof TimesheetHeader>;

export const Primary: Story = {
  render: () => <TimesheetHeader hours="00:00" title="Teste"></TimesheetHeader>,
};
