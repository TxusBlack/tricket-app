import PropTypes from 'prop-types';
import Tkicon from '../Tk-Icon/tk-icon' 



const TkInput = ({
    type,
    placeholder,
    label,
    iconInput,
    enableIconShowPassword,
}) => {
    return (
        <div className="flex flex-col my-4">
            {label && <label className="font-semibold">{label}</label>}
            <div className='flex items-center'>
                {iconInput && <Tkicon iconName={iconInput} size='small' color={'outline'} className={'mr-2'} />}
                <input className="p-2 tk-input" type={type} placeholder={placeholder}/>            
            </div>   
        </div>
    )
};

TkInput.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    label: PropTypes.string,
    enableIconShowPassword: PropTypes.bool,
};


export default TkInput;
