import '../../styles/form.css'
import PropTypes from "prop-types";
import {Input} from "../molecules/Textinput/Input.jsx";
import {Button} from "../molecules/button/Button.jsx";
import {useState} from "react";

export const Form = ({ children, title, labels, btnLabel }) => {
    const [formData, setFormData] = useState({});

    const handleChange = (label, value) => {
        setFormData({
            ...formData,
            [label]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <h1>{title}</h1>

            {labels.map((label, index) => (
                <Input
                    key={index}
                    label={label}
                    type={label}
                    required={true}
                    value={formData[label] || ''}
                    onChange={(e) => handleChange(label, e.target.value)}
                />
            ))}
            <Button
                onClick={() => {
                }}
                label={btnLabel}
            />
            {children}
        </form>
    )
}

Form.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    labels: PropTypes.array.isRequired,
    btnLabel: PropTypes.string.isRequired,
}