import React from 'react'
import PropTypes from "prop-types";
import './input.css';
import {Icon} from "../../atoms/icon/Icon.jsx";

export const Input = ({ type, label, required, error, errorMessage,value, onClick, ...props}) => {

    const [showPassword, setShowPassword] = React.useState(false);


    const passwordtoggle = () => {
        setShowPassword((prevState) => !prevState);
    }

    const inputType = type === 'password' && !showPassword ? 'password' : 'text';
    const inputId = `${type}-input`;

        return (
        <div className="form-contain">
            <label htmlFor={type} className={error ? 'label--error' : ''}>{label}</label>
            <div className={`input_password ${error ? 'input--error' : ''} `}>
                <input
                    type={inputType}
                    id={inputId}
                    value={value}
                    className={`input ${error ? 'input--error' : ''}`}
                    required={required}
                    {...props}
                    onClick={onClick}
                />
                {type === 'password' && (
                    <button
                        type="button"
                        className="button_hide"
                        onClick={passwordtoggle}
                    >
                        {showPassword ? <Icon name={"eye"} size={"small"} /> : <Icon name={"slash-eye"} size={"small"} />}
                    </button>
                )}
            </div>
            { error && errorMessage && (
                <p className="error-message"> {errorMessage} </p>
            )}
        </div>
    );
};

Input.propTypes = {
    type: PropTypes.string,
    required: PropTypes.bool,
    value: PropTypes.string,
    error: PropTypes.bool,
    errorMessage: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func,
};

Input.defaultProps = {
    type: 'input',
    required: false,
    errorMessage: '',
}
