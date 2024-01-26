import React from "react";

const TkInput = ({
    type,
    placeholder,
    label,
    enableIconShowPassword,
}) => {
    return (
        <div className="flex flex-col my-4 form-input">
            <label className="font-semibold">{label}</label>
            <input className="p-2" type={type} placeholder={placeholder} />        
        </div>
    )
};

export default TkInput;
