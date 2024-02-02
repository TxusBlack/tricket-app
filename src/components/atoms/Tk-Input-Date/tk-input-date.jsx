import PropTypes from 'prop-types';

const TkInputDate = ({
    label
}) => {
    return (
        <div className="form-date flex flex-col my-4">
            <label className="form-date__label font-semibold" htmlFor="input-date">{label}</label>
            <input
                className="form-date__input"
                type="date"
                id="input-date"
                name="input-date-start"/>
        </div>
    )
};

TkInputDate.propTypes = {
    label: PropTypes.string.isRequired,
};


export default TkInputDate;
