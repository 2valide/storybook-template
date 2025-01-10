import { fn } from '@storybook/test';

import { Input } from './Input.jsx';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
    title: 'Molecules / Input',
    component: Input,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {
        onClick: fn(),
    },};

export const input = {
    args: {
        label: 'Input ',
    },
};

export const Password = {
    args: {
        label: 'Password',
        type: 'password',
        required: true,
        error: false
    },
};

export const error = {
    args: {
        error: true,
        label: 'Error',
        mode:'error',
        errorMessage: 'Email ou mot de passe incorrect.',
    },
};

