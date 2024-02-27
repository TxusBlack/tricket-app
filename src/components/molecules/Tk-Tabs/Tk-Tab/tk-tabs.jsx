import { useState } from 'react';

const TkTabs = ({ labelTab, indexTab, sendActiveTab }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
        sendActiveTab(index);
    };
    return (
        <div className="tab-buttons py-3">
            <button
                className={indexTab === activeTab ? 'active tab-button' : 'tab-button'}
                onClick={() => handleTabClick(indexTab)}
            >
                {labelTab}
            </button>
        </div>

    );
};

export default TkTabs;

