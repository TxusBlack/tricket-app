import TkTabs from "../Tk-Tab/tk-tabs";


const TkTabList = ({ tabsInfo, setTabActive, indexActiveTab }) => {
    const handleClickTab = (tabActive) => {
        setTabActive(tabActive)
    }

    return (
        <div className="tab-list">
            {
                tabsInfo.map((tab, index) => {
                    return (
                        <TkTabs
                            key={index}
                            labelTab={tab}
                            indexTab={index}
                            sendActiveTab={handleClickTab}
                            indexActiveTab={indexActiveTab}
                            >
                        </TkTabs>
                    )
                })
            }
    </div>
    );
};

export default TkTabList;