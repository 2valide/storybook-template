import { fn } from '@storybook/test';
import { Icons } from './Icons.jsx';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/Icons',
  component: Icons,
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
        options: [16, 24, 32],
      },
    },
    color: {
        control: {
            type: 'color',
        },
}
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const trash = {
  args: {
    name: 'trash',
    size: 24,
    color: 'black',
  },
};

export const slashEye = {
  args: {
    name: 'slashEye',
    size: 24,
    color: 'black',
  },
};

export const eye = {
  args: {
    name: 'eye',
    size: 24,
    color: 'black',
  },
};


