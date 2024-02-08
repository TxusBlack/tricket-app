import PropTypes from 'prop-types';
import TkCardTicket from '../../atoms/Tk-Card-Ticket/tk-card-ticket';
import TkIcon from '../../atoms/Tk-Icon/tk-icon';
import '../../../styles/settings/colors.css';

const TkTicket = ({
    price,
    currency,
    sectionPosition,
    rowPosition,
    nameIcon
}) => {
    return (
        <div>
            <TkCardTicket executeCardTicket={console.log('execute card')}>
                <div className='tk-ticket flex justify-between'>
                    <div className='me-7 flex flex-col justify-center tk-ticket__price' >
                        <h3 className='tk-ticket__price__value' >${price}</h3>
                        <p className='tk-ticket__price__currency' >{currency}</p>
                    </div>
                    <div className='flex flex-col justify-center tk-ticket__position' >
                        <h3 className='tk-ticket__position__section'>Sección {sectionPosition}</h3>
                        <p className='tk-ticket__position__row'>Fila {rowPosition}</p>
                    </div>
                    <div className='flex items-center' >
                        <TkIcon iconName={nameIcon} size={'2rem'} color={getComputedStyle(document.documentElement).getPropertyValue('--color-outline')} />
                    </div>
                </div>
            </TkCardTicket>    
        </div>
    )
};

TkTicket.propTypes = {
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    sectionPosition: PropTypes.string.isRequired,
    rowPosition: PropTypes.string.isRequired,
    nameIcon: PropTypes.string.isRequired
};

export default TkTicket;


