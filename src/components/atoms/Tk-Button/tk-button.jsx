import PropTypes from 'prop-types';
import TkIcon from '../Tk-Icon/tk-icon';

const TkButton = ({
    label,
    isShowIcon = false,
    nameIcon = '',
    type = 'primary',
    size = 'default',
    executeButton,
}) => {
    return (
        <button
            className={`tk-button tk-button--${type} tk-button__${size} mx-2 font-bold`}
            onClick={executeButton}>
            {
                isShowIcon && <TkIcon className={`${size}`} iconName={nameIcon} />
            }
            <span className={`tk-button-label__${size}`}>{label}</span>
        </button>
    )
}

TkButton.propTypes = {
    isShowIcon: PropTypes.bool,
    nameIcon: PropTypes.string,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    size: PropTypes.string,
    executeButton: PropTypes.func.isRequired,
};



export default TkButton;