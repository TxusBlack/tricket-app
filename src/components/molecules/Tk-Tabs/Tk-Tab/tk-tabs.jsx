import { useState } from 'react';
import TkIconButton from '../../../atoms/Tk-Icon-Button/tk-icon-button';

const TkTabs = ({ labelTab, indexTab, classTabContent, children }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    return (
        <div>
            <div className='flex justify-between'>
                <div className="tab-buttons py-3">
                    <button
                        className={indexTab === activeTab ? 'active tab-button' : 'tab-button'}
                        onClick={() => handleTabClick(indexTab)}
                    >
                        {labelTab}
                    </button>
                </div>
                <TkIconButton nameIcon="IoIosOptions" colorIcon="outline" sizeIcon="large" executeButton={console.log('execute icon button')} />
            </div>
            <div className="index === activeTab ? 'active tab-content' : 'tab-content' ">
                <div className={`tab-content ${classTabContent} `}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default TkTabs;

