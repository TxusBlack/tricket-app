import PropTypes from 'prop-types';
import TkIcon from '../Tk-Icon/tk-icon';
import '../../../styles/settings/colors.css';

const TkBreadcrumb = ({ items }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {items.map((item, index) => (
          <div key={index}>
            <li className={`breadcrumb-item ${index === items.length - 1 ? ' active' : ''}`}>
              {index === items.length - 1 ? (
                <span>{item.label}</span>
              ) : (
                <a className='breadcrumb-item__link' href={item.url}>{item.label}</a>
              )}
            </li>

            { index < items.length - 1 &&
              <TkIcon 
                iconName='IoIosArrowForward' 
                size='medium' 
                color="outline" 
                className='breadcrumb-icon'
              />     
            }
          </div>

        ))}
      </ol>
    </nav>
  );
}

TkBreadcrumb.propTypes = {
  items: PropTypes.array,
};

export default TkBreadcrumb;
