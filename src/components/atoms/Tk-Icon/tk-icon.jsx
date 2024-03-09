import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import * as allIcons from 'react-icons/io';


const TkIcon = ({
    iconName,
    size,
    color,
    className
}) => {

    const colorsIcon = {
        light: '--color-light',
        primary: '--color-primary',
        success: '--color-success',
        outline: '--color-outline'
    }

    const sizeIcon = {
        small: '1rem',
        medium: '1.5rem',
        large: '2rem'
    }

    const SelectedIcon = allIcons[iconName];
    const getSize = (size) => {
        return sizeIcon[size];
    };

    const getColor = (color) => {
        return getComputedStyle(document.documentElement).getPropertyValue(colorsIcon[color]);
    };

    if (!SelectedIcon) {
        console.error(`Icon "${iconName}" not found`);
        return null;
    }

    return (
        <div>
            <IconContext.Provider value={{ color: getColor(color), size: getSize(size), className }}>
                <SelectedIcon />
            </IconContext.Provider>
        </div>
    )
}

TkIcon.propTypes = {
    iconName: PropTypes.string.isRequired,
    size: PropTypes.string,
    color: PropTypes.string    
};

export default TkIcon

