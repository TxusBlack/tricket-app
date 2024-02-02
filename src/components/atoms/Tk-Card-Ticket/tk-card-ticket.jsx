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

    return (
        <div 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} 
        className="card-ticket" 
        onClick={executeCardTicket} >
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
    executeCardTicket: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default TkCardTicket;
