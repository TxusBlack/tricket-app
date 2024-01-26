import React from 'react';

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

export default TkBreadcrum;
