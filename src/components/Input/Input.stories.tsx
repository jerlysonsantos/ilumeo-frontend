import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '.';

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  render: () => <Input placeholder="Teste" />,
};
