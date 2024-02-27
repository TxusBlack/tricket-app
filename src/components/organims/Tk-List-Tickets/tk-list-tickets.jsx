import PropTypes from 'prop-types';
import TkTabsGroup from '../../molecules/Tk-Tabs/Tk-Tabs-Group/tk-tabs-group';
import TkTabs from "../../molecules/Tk-Tabs/Tk-Tab/tk-tabs";
import TkTicket from "../../molecules/Tk-Ticket/tk-ticket";
import TkTabList from '../../molecules/Tk-Tabs/TkTabList/tk-tab-list';
import TkTabContent from '../../molecules/Tk-Tabs/Tk-Tab-Content/tk-tab-content';
import { useState } from 'react';


const TkListTickets = ({
    listTickets,
    BetterListTickets,
}) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleCallbackTab = (dataFromChild) => {
        setActiveTab(dataFromChild);
    }

    const tabsInfo = ['Pestaña 1', 'Pestaña 2'];

    return (
        <div>
            <TkTabsGroup>
                <TkTabList tabsInfo={tabsInfo} setTabActive={handleCallbackTab} />
                <TkTabContent isActiveTab={activeTab === 0}>
                    {listTickets.map((ticket, index) => {
                        return (
                            <TkTicket
                                key={index}
                                price={ticket.value}
                                currency={ticket.currency}
                                sectionPosition={ticket.section}
                                rowPosition={ticket.row}
                                nameIcon={'IoIosArrowForward'}
                            />

                        )
                    })}
                </TkTabContent>
                <TkTabContent isActiveTab={activeTab === 1}>
                    {
                        BetterListTickets.map((ticket, index) => {
                            return (
                                <TkTicket
                                    key={index}
                                    price={ticket.value}
                                    currency={ticket.currency}
                                    sectionPosition={ticket.section}
                                    rowPosition={ticket.row}
                                    nameIcon={'IoIosArrowForward'}
                                />

                            )
                        })
                    }
                </TkTabContent>
            </TkTabsGroup>
        </div>
    )

};

TkListTickets.propTypes = {
    listTickets: PropTypes.array.isRequired,
    BetterListTickets: PropTypes.array.isRequired,
};

export default TkListTickets;