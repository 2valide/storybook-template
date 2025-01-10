// Tip.jsx
import "./Tip.css";
import "../../../index.css"
import PropTypes from "prop-types";


const Tip = ({ variant,title,description,fill, ...props }) =>  {
    return (
        <div className={['Tip-container', `Tip-container--${variant}`].join(' ')}>
            <div className='Tip-header'>
                <svg width="39" height="34" viewBox="0 0 39 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_127_168)">
                        <path
                            d="M23.3085 2.28965L37.7567 26.6758C38.2282 27.4621 38.4713 28.3172 38.4713 29.1448C38.4713 31.6965 36.6706 33.7103 33.6838 33.7103H4.77318C1.80066 33.7103 0 31.6965 0 29.1448C0 28.3172 0.228655 27.4758 0.714547 26.6758L15.1627 2.28965C16.0631 0.758619 17.6351 0 19.2356 0C20.8219 0 22.4082 0.758619 23.3085 2.28965ZM17.3634 25.9172C17.3634 26.8689 18.221 27.6552 19.2356 27.6552C20.2359 27.6552 21.1077 26.8827 21.1077 25.9172C21.1077 24.9378 20.2503 24.1655 19.2356 24.1655C18.2067 24.1655 17.3634 24.9517 17.3634 25.9172ZM17.7065 10.8965L17.9352 20.6068C17.9494 21.4345 18.4067 21.9034 19.2356 21.9034C20.0216 21.9034 20.4932 21.4482 20.5075 20.6068L20.7361 10.9103C20.7505 10.0827 20.1073 9.47584 19.2214 9.47584C18.3209 9.47584 17.6921 10.069 17.7065 10.8965Z"
                            fill={fill}/>
                    </g>
                    <defs>
                        <clipPath id="clip0_127_168">
                            <rect width="39" height="34" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
                <h2>{title}</h2>
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
    fill: PropTypes.string.isRequired,
};
