import React from "react";

const TkInputSelect = ({
    label,
    options,
    value,
    onChange,
    ...props
}) => {
    return(
        <div className="flex flex-col my-4 select-container">
            <label className="font-semibold">{label}</label>
            <select className="p-3" >
                {options.map((option) => {
                    return <option value={option.value}>{option.label}</option>
                })}
            </select>
        </div>
    )
};

export default TkInputSelect;
