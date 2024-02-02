import PropTypes from 'prop-types';

const TkInput = ({
    type,
    placeholder,
    label,
    enableIconShowPassword,
}) => {
    return (
        <div className="flex flex-col my-4 form-input">
            <label className="font-semibold">{label}</label>
            <input className="p-2" type={type} placeholder={placeholder}/>        
        </div>
    )
};

TkInput.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    enableIconShowPassword: PropTypes.bool,
};


export default TkInput;
