import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import * as allIcons from 'react-icons/io';


const TkIcon = ({
    iconName,
    size='1.5rem',
    color,
    className
}) => {
    const SelectedIcon = allIcons[iconName];

    if (!SelectedIcon) {
        console.error(`Icon "${iconName}" not found`);
        return null;
    }

    return (
        <div>
            <IconContext.Provider value={{ color, size, className }}>
                <SelectedIcon />
            </IconContext.Provider>
        </div>
    )
}

TkIcon.propTypes = {
    nameIcon: PropTypes.string.isRequired
};

export default TkIcon

