import PropTypes from 'prop-types';

const TkTabsGroup = (props) => {
  const { children, ...rest } = props;
  return (
    <div className="tabs-container" {...rest}>
      {children}
    </div>
  );
}

TkTabsGroup.propTypes = {
  children: PropTypes.node,
};

export default TkTabsGroup;
