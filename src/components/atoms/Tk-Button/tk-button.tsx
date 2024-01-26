import React from 'react';


const TkButton = ({ 
    isShowIcon = false,
    nameIcon,
    label,
    type='primary',
    size='default',
    executeButton 
}) => {
    return (  
    <button 
        className={` tk-button--${type} rounded-full w-full py-3 mx-2 flex align-center justify-center text-base font-bold`}
        onClick={executeButton}>
            {isShowIcon && <i className="fa-solid {nameIcon}"></i>}
        {label}
    </button>
    )
  }
  
  export default TkButton;