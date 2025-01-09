import React from 'react';
import PropTypes from 'prop-types';

import EyeIcon from './eye.svg';
import SlashEyeIcon from './slash-eye.svg';
import TrashIcon from './trash.svg';

export const Icons = ({ name, size, color, ...props }) => {
    const sizes = {
        16: 16,
        24: 24,
        32: 32,
    };

    let iconSrc;
    switch (name) {
        case 'eye':
            iconSrc = EyeIcon;
            break;
        case 'slashEye':
            iconSrc = SlashEyeIcon;
            break;
        case 'trash':
            iconSrc = TrashIcon;
            break;
    }

    return (
        <img
            src={iconSrc}
            width={sizes[size]}
            alt={name}
            style={{fill: color}}
            {...props}
        />
    );
};

Icons.propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.oneOf([16, 24, 32]),
    color: PropTypes.string,
};

Icons.defaultProps = {
    size: 24,
    color: 'black',
};

