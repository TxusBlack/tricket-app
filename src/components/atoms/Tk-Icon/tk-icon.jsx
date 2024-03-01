import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import * as allIcons from 'react-icons/io';


const TkIcon = ({
    iconName,
    size,
    color,
    className
}) => {
    const SelectedIcon = allIcons[iconName];
    const getSize = (size) => {
        let sizeIcon = '1rem';
        switch (size) {
            case 'small':
                sizeIcon = '1rem';
                break;
            case 'medium':
                sizeIcon = '1.5rem';
                break;
            case 'large':
                sizeIcon = '2rem';
                break;
            default:
                sizeIcon = '1rem';
                break
        }

        return sizeIcon;
    };

    const getColor = (color) => {
        let colorIcon = '--color-primary';

        switch (color) {
            case 'light':
                colorIcon = '--color-light';
                break;
            case 'primary':
                colorIcon = '--color-primary';
                break;
            case 'success':
                colorIcon = '--color-success'
                break;
            case 'outline':
                colorIcon = '--color-outline';
                break;

            default:
                break;
        }

        return getComputedStyle(document.documentElement).getPropertyValue(colorIcon);
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
    iconName: PropTypes.string.isRequired
};

export default TkIcon

