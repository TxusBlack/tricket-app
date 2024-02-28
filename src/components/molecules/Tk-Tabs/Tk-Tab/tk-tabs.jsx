
const TkTabs = ({ labelTab, indexTab, sendActiveTab, indexActiveTab }) => {
    const handleTabClick = (index) => {
        sendActiveTab(index);
    };
    return (
        <div className="tab-buttons py-3">
            <button
                className={indexTab === indexActiveTab ? 'active tab-button' : 'tab-button'}
                onClick={() => handleTabClick(indexTab)}
            >
                {labelTab}
            </button>
        </div>

    );
};

export default TkTabs;

