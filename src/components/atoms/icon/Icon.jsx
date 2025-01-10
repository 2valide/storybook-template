import {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';

const useIconImport = (name) => {
    const importRef = useRef();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        setLoading(true);
        const importIcon = async () => {
            try {
                // Import SVG dynamically using template literals for dynamic path
                importRef.current = (await import(`../../../assets/vectors/${name}.svg?react`)).default;
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        importIcon();
    }, [name]);

    return {
        error,
        loading,
        Svg: importRef.current,
    };
};
export const Icon = ({name, size, ...props}) => {

    const mappingSize = {
        small: 16,
        medium: 24,
        large: 32,
    };

    const {error, Svg} = useIconImport(name);

    if (error) {
        console.log(`An error occurred while loading icon ${name}`);
    }

    if (!Svg) {
        return null;
    }

    return (
        <Svg width={mappingSize[size]} height={mappingSize[size]} {...props} />
    )
}

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.oneOf(["small", "medium", "large"]),
};

Icon.defaultProps = {
    size: "medium",
};
