import React from 'react';

import PropTypes from 'prop-types';

import './button.css';
import {Icons} from "../../atoms/icons/Icons.jsx";

export const Button = ({mode, label, size, ...props}) => {
    let buttonClass;

    switch (mode) {
        case 'primary':
            buttonClass = 'storybook-button--primary';
            break;
        case 'danger':
            buttonClass = 'storybook-button--danger';
            break;
        default:
            buttonClass = 'storybook-button--danger';
    }

    return (
        <button
            type="button"
            className={['storybook-button', `storybook-button--${size}`, buttonClass].join(' ')}
            {...props}
        >
            {mode === "danger" ? <Icons name={"trash"} size={16}/> : undefined}
            {label}
        </button>
    );
};

Button.propTypes = {
    mode: PropTypes.oneOf(['primary', 'danger']),
    label: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Button.defaultProps = {
    mode: 'primary',
    size: 'medium',
};
