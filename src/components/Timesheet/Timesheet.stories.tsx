import type { Meta, StoryObj } from '@storybook/react';

import { Timesheet } from '.';

const meta = {
  title: 'Components/Timesheet',
  component: Timesheet,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Timesheet>;

export default meta;
type Story = StoryObj<typeof Timesheet>;

export const Primary: Story = {
  render: () => (
    <Timesheet title="Datas" loadMore={() => {}} timesheet={[{ date: '00/00/000', total_hours: '00:00' }]}></Timesheet>
  ),
};
