import Tip from "./Tip.jsx";

export default {
    title: 'Molecules / Tip',
    component: Tip,

    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],
};

export const Danger= {
    args: {
        variant: "danger",
        title: "Warning !",
        description: "Your e-mail or password is inccorrect !",
        fill:"#FF8C00"
    }
};

export const Success= {
    args: {
        variant: "success",
        title: "Success !",
        description: "The following changes have been saved !",
        fill:"#1a1a1a",
    }
};