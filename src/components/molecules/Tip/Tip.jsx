// Tip.jsx
import "./Tip.css";
import "../../../index.css"
import PropTypes from "prop-types";
import {Icon} from "../../atoms/icon/Icon.jsx";

const Tip = ({ variant,title,description, ...props }) =>  {
    return (
        <div className={['Tip-container', `Tip-container--${variant}`].join(' ')}>
            <div className='Tip-header'>
                <Icon name={"warning"} size={"large"}/>
                <h2>{title}</h2>
                <button className="Tip-close">
                    <Icon name={"cross"} size={"small"}/>
                </button>
            </div>
            <div className="Tip-text">
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Tip;

Tip.propTypes = {
    /** Is this the principal call to action on the page? */
    variant: PropTypes.oneOf(['danger', 'success']),
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};
