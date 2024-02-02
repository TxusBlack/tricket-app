import PropTypes from 'prop-types';

const TkBreadcrum = ({items}) => {
  return (
    <div className="tk-breadcrum">
      {items.map((item, index) => {
        return (
          <div key={index} className="tk-breadcrum__item">
            {item}
          </div>
        );
      })}
    </div>
  );
}

TkBreadcrum.propTypes = {
  items: PropTypes.array,
};

export default TkBreadcrum;
