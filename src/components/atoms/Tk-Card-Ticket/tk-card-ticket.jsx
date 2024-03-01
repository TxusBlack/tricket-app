import { useState } from "react";
import PropTypes from 'prop-types';

const TkCardTicket = ({
    executeCardTicket,
    children
}) => {
    const [hovered, setHovered] = useState(false);
    const [clicked, setClicked] = useState(false);
    const handleMouseEnter = () => {
        setHovered(true);
      };
    
    const handleMouseLeave = () => {
    setHovered(false);
    };

    const clickCardTicket = () => {
        setClicked(!clicked);
        executeCardTicket(!clicked);
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
            <div className="card-ticket__content" style={{
                backgroundColor: clicked ? '#5F47F6': '',
                color: clicked ? 'white': ''
            }} >
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
