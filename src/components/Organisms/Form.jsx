import '../../styles/form.css'
import PropTypes from "prop-types";

export const Form = ({ children }) => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit} className="login-form">
            {children}
        </form>
    )
}

Form.prototype = {
    children: PropTypes.node.isRequired
}