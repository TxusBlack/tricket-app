
import PropTypes from 'prop-types';

const getSizeCard = (size) => {
    let sizeCard = 'w-full';
    switch (size) {
        case 'small':
            sizeCard = 'w-1/4';
            break;
        case 'medium':
            sizeCard = 'w-1/2';
            break;
        case 'large':
            sizeCard = 'w-3/4';
            break;
        default:
            sizeCard = 'w-full';
            break;
    }

    return sizeCard;
};

const TkCard = ({
    size,
    children
}) => {
    const sizeCard = getSizeCard(size);

    return (
        <div className={`shadow-lg my-4 rounded-xl card-container card-${size} ${sizeCard}`} >
            <div>{children}</div>
        </div>
    )
};

TkCard.propTypes = {
    size: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};


export default TkCard; 