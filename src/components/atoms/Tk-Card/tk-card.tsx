import React from "react";

const TkCard = ({size, children}) => {
    return (
        <div className="shadow-lg my-4 rounded-xl card-container" >
            <div>{children}</div>
        </div>
    )
};

export default TkCard; 