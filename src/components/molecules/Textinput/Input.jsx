import React from 'react'
import PropTypes from "prop-types";
import './input.css';
import {Icon} from "../../atoms/icon/Icon.jsx";

export const Input = ({type, label, required, error, onClick, ...props}) => {

    const [showPassword, setShowPassword] = React.useState(false);

    const errorState = error ? 'storybook-input--error' : 'storybook-input--input';

    const passwordtoggle = () => {
        setShowPassword((prevState) => !prevState);
    }

    const inputType = type === 'password' && !showPassword ? 'password' : 'text';

    return (
        <div className="storybook-form-group">
            <label htmlFor={type} className={'storybook-label'}>{label}</label>
            <div className={'storybook-input-password'}>
                <input
                    type={inputType}
                    id={type}
                    value={type}
                    className={['storybook-input', errorState].join(' ')}
                    required={required}
                    {...props}
                    onClick={onClick}
                />
                {type === 'password' && (
                    <button
                        type="button"
                        className="storybook-button-password"
                        onClick={passwordtoggle}
                    >
                        {showPassword ? <Icon name={"eye"} size={16}/> : <Icon name={"slashEye"} size={16}/>}
                    </button>
                )}
            </div>

        </div>
    );
};

Input.propTypes = {
    type: PropTypes.string.isRequired,
    required: PropTypes.bool,
    error: PropTypes.bool,
    label: PropTypes.string,
    onClick: PropTypes.func,
};

Input.defaultProps = {
    type: 'input',
    required: false,
}
