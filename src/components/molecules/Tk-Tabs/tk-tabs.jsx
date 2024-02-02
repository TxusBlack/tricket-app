import { useState } from 'react';
import TkIconButton from '../../atoms/Tk-Icon-Button/tk-icon-button';

const TkTabs = ({tabs}) => {
    const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
    return (
        <div className="tabs-container">
            <div className='flex justify-between'>
                <div className="tab-buttons py-3">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            className={index === activeTab ? 'active tab-button' : 'tab-button'}
                            onClick={() => handleTabClick(index)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
                <TkIconButton nameIcon="IoIosOptions" colorIcon="#acacac" sizeIcon="2rem" executeButton={console.log('execute icon button')}/>
            </div>
            <div className="index === activeTab ? 'active tab-content' : 'tab-content' ">
                <div className='tab-content'>
                    {tabs[activeTab].content}                
                </div>        
            </div>
        </div>
    );
};

export default TkTabs;

