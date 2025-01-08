import React from 'react';

import PropTypes from 'prop-types';

import './button.css';
import {Icons} from "../../atoms/icons/Icons.jsx";

/** Primary UI component for user interaction */
export const Button = ({ mode, label, ...props }) => {
  let buttonClass;

  switch (mode) {
    case 'primary':
      buttonClass = 'storybook-button--primary';
      break;
    case 'secondary':
      buttonClass = 'storybook-button--secondary';
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
      className={['storybook-button', buttonClass].join(' ')}
      {...props}
    >
      {mode === "danger" ? <Icons name={"trash"} size={16} /> : undefined}
      {label}
    </button>
  );
};

Button.propTypes = {
  /** Is this the principal call to action on the page? */
  mode: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  /** Button contents */
  label: PropTypes.string.isRequired,
  /** Optional click handler */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  mode: 'primary',
  onClick: undefined,
};
