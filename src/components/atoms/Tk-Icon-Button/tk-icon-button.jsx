import PropTypes from 'prop-types';
import TkIcon from '../Tk-Icon/tk-icon';

const TkIconButton = ({
    nameIcon,
    colorIcon,
    sizeIcon,
    executeButton
}) => {
    return (
        <button className="p-3" onClick={executeButton} >
            <TkIcon className="mx-3" iconName={nameIcon} color={colorIcon} size={sizeIcon}></TkIcon>
        </button>
    )
};

TkIconButton.propTypes = {
    nameIcon: PropTypes.string.isRequired,
    colorIcon: PropTypes.string,
    sizeIcon: PropTypes.string,
    executeButton: PropTypes.func
};

export default TkIconButton;
