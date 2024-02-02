import PropTypes from 'prop-types';

const TkButton = ({ 
    isShowIcon,
    nameIcon,
    label,
    type='primary',
    executeButton 
}) => {
    return (  
    <button 
        className={` tk-button--${type} rounded-full w-full py-3 mx-2 flex align-center justify-center text-base font-bold`}
        onClick={executeButton}>
            {isShowIcon && <i className="fa-solid">{nameIcon}</i>}
        {label}
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