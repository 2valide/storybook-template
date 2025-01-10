import { fn } from '@storybook/test';
import { Icon } from './Icon.jsx';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Atoms / Icon',
  component: Icon,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    name: {
      control: {
        type: 'select',
        options: ['eye', 'slashEye', 'trash'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ["small", "medium", "large"],
      },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const trash = {
  args: {
    name: 'trash',
    size: "medium",
  },
};

export const slashEye = {
  args: {
    name: 'slash-eye',
    size: "medium",
  },
};

export const eye = {
  args: {
    name: 'eye',
    size: "medium",
  },
};


