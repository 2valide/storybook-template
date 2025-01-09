import { fn } from '@storybook/test';
import { Button } from './Button.jsx';

export default {
  title: 'molecule / Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    mode: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'danger'],
      },
    },
  },
};

export const Primary = {
  args: {
    label: 'Button',
    mode: "primary",
    size: "medium"
  },
};

export const Danger = {
  args: {
    label: "Delete",
    mode: "danger",
    size: "medium"
  },
};
