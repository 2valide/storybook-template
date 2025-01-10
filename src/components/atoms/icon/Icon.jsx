import React from 'react';
import PropTypes from 'prop-types';

const icons = import.meta.glob('../../../assets/vectors/*.svg', {eager: true, import: 'default'});

export const Icon = ({name, size, color, ...props}) => {
    console.log(icons)
    const IconComponent = icons[`../../../assets/vectors/${name}.svg`];
    console.log(IconComponent)

    return (
        <>
            <h1>hello</h1>
            <IconComponent/>
        </>
    )
}


Icon.propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.oneOf(["small", "medium", "large"]),
    color: PropTypes.string,
};

Icon.defaultProps = {
    size: "medium",
    color: 'black',
};
