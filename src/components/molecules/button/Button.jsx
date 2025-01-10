import React from 'react';

import PropTypes from 'prop-types';

import './button.css';
import {Icon} from "../../atoms/icon/Icon.jsx";

export const Button = ({mode, label, size, ...props}) => {
    let buttonClass;

    switch (mode) {
        case 'primary':
            buttonClass = 'button--primary';
            break;
        case 'danger':
            buttonClass = 'button--danger';
            break;
        default:
            buttonClass = 'button--danger';
    }

    return (
        <button
            type="button"
            className={['button', `button--${size}`, buttonClass].join(' ')}
            {...props}
        >
            {mode === "danger" ? <Icon name={"trash"} size={"small"} /> : undefined}
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
