import PropTypes from 'prop-types';
import TkIcon from '../Tk-Icon/tk-icon';
import '../../../styles/settings/colors.css';

const TkBreadcrumb = ({ items }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {items.map((item, index) => (
          <>
            <li key={index} className={`breadcrumb-item ${index === items.length - 1 ? ' active' : ''}`}>
              {index === items.length - 1 ? (
                <span>{item.label}</span>
              ) : (
                <a className='breadcrumb-item__link' href={item.url}>{item.label}</a>
              )}
            </li>

            { index < items.length - 1 &&
              <TkIcon 
                iconName='IoIosArrowForward' 
                size='1.5rem' 
                color="getComputedStyle(document.documentElement).getPropertyValue('--color-outline')" 
                className='breadcrumb-icon'
              />     
            }
          </>

        ))}
      </ol>
    </nav>
  );
}

TkBreadcrumb.propTypes = {
  items: PropTypes.array,
};

export default TkBreadcrumb;
