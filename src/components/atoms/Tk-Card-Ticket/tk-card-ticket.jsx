import { useState } from "react";
import PropTypes from 'prop-types';

const TkCardTicket = ({
    executeCardTicket,
    children
}) => {
    const [hovered, setHovered] = useState(false);
    const handleMouseEnter = () => {
        setHovered(true);
      };
    
    const handleMouseLeave = () => {
    setHovered(false);
    };

    const clickCardTicket = () => {
        executeCardTicket()
    };

    return (
        <div 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} 
        className="card-ticket" 
        onClick={clickCardTicket} >
            <div className="card-ticket__form__up" 
                style={{borderColor: hovered ? '#007bff' : '#acacac'}}>
            </div>
            <div className="card-ticket__form__down" 
                style={{borderColor: hovered ? '#007bff' : '#acacac'}}>
            </div>
            <div className="card-ticket__content">
                {children}
            </div>
            
        </div>
    );

};


TkCardTicket.propTypes = {
    executeCardTicket: PropTypes.func,
    children: PropTypes.node,
};

export default TkCardTicket;
