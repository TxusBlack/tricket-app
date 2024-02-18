
import PropTypes from 'prop-types';


const TkCard = ({
    size,
    type,
    children
}) => {

    return (
        <div className={`shadow-lg rounded-xl card-container card-${size} card-${type} `} >
            <div>{children}</div>
        </div>
    )
};

TkCard.propTypes = {
    size: PropTypes.string.isRequired,
    type: PropTypes.string,
    children: PropTypes.node.isRequired,
};


export default TkCard; 