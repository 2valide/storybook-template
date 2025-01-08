import './Button.css';
import PropTypes from "prop-types";

const Button = ({ variant,label, ...props }) => {
    return (
        <button
            type="button"
            className={['button', `button--${variant}`].join(' ')}
            {...props}
        >
            {label}
        </button>
    );
};

export default Button;

Button.propTypes = {
    /** Is this the principal call to action on the page? */
    variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
    label: PropTypes.string.isRequired,
};