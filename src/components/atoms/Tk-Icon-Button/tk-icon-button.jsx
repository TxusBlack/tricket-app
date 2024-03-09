import PropTypes from 'prop-types';
import TkIcon from '../Tk-Icon/tk-icon';

const TkIconButton = ({
    id,
    nameIcon,
    colorIcon,
    sizeIcon,
    callbackAction
}) => {

    const executeButton = () => {
        callbackAction(id);
    }

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
    callbackAction: PropTypes.func
};

export default TkIconButton;
