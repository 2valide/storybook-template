import Button from './Button.jsx'

export default {
    title: 'Components / Button',
    component: Button,

    parameters: {
        layout: 'centered',
    },
};
export const Primary= {
    args: {
        variant: "primary",
        label: "Primary"
    }
};

export const Secondary= {
    args: {
        variant: "secondary",
        label: "Secondary"
    }
};

export const Danger= {
    args: {
        variant: "danger",
        label: "Danger"
    }
};


