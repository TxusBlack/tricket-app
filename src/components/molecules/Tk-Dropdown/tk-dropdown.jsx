import { useState } from "react";
import TkButton from "../../atoms/Tk-Button/tk-button";


const TkDropdown = ({ buttonLabel, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="tk-dropdown">
            <TkButton  label={buttonLabel}  executeButton={toggleDropdown} size={'default'} />
            {isOpen && (
                <div className="tk-dropdown-content">
                    {children}
                </div>
            )}
        </div>
    );
};

export default TkDropdown;