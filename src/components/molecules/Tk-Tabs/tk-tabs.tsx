import React from 'react';

const TkTabs = () => {
    return (
        <div className="tk-tabs">
            <div className="tk-tabs__header">
                <div className="tk-tabs__header-item">Tab 1</div>
                <div className="tk-tabs__header-item">Tab 2</div>
                <div className="tk-tabs__header-item">Tab 3</div>
            </div>
            <div className="tk-tabs__content">
                <div className="tk-tabs__content-item">Content 1</div>
                <div className="tk-tabs__content-item">Content 2</div>
                <div className="tk-tabs__content-item">Content 3</div>
            </div>
        </div>
    );
};

export default TkTabs;

