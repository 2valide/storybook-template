import React from 'react'
import PropTypes from "prop-types";
import './input.css';
// import {Icon} from "../../atoms/icon/Icon.jsx";

export const Input = ({type, label, required, error, onClick, ...props}) => {

    const [showPassword, setShowPassword] = React.useState(false);


    const passwordtoggle = () => {
        setShowPassword((prevState) => !prevState);
    }

    const inputType = type === 'password' && !showPassword ? 'password' : 'text';

    return (
        <div className="form-contain">
            <label htmlFor={type} >{label}</label>
            <div className={'input_password'}>
                <input
                    type={inputType}
                    id={type}
                    value={type}
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
                        {/*{showPassword ? <Icon name={"eye"} size={16}/> : <Icon name={"slashEye"} size={16}/>}*/}
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
