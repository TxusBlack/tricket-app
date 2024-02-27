import PropTypes from 'prop-types';

const TkInputSelect = ({
    label,
    options,
    onChange
}) => {
    return(
        <div className="flex flex-col my-4 select-container">
            <label className="font-semibold">{label}</label>
            <select className="p-3" onChange={onChange} >
                {options.map((option, index) => {
                    return <option key={index} value={option.value}>{option.label}</option>
                })}
            </select>
        </div>
    )
};

TkInputSelect.propTypes = {
    label: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func,
};

export default TkInputSelect;
