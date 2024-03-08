import PropTypes from 'prop-types';
import TkTabsGroup from '../../molecules/Tk-Tabs/Tk-Tabs-Group/tk-tabs-group';
import TkTicket from "../../molecules/Tk-Ticket/tk-ticket";
import TkTabList from '../../molecules/Tk-Tabs/TkTabList/tk-tab-list';
import TkTabContent from '../../molecules/Tk-Tabs/Tk-Tab-Content/tk-tab-content';
import { useState } from 'react';


const TkListTickets = ({
    listTicketsEvent
}) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleCallbackTab = (dataFromChild) => {
        setActiveTab(dataFromChild);
    }

    return (
        <div>
            <TkTabsGroup>
                <TkTabList tabsInfo={listTicketsEvent.titleTabs} setTabActive={handleCallbackTab} indexActiveTab={activeTab} />
                {listTicketsEvent.listTickets.map((ticketEvent, idx) => {
                    return (
                        <TkTabContent isActiveTab={activeTab === idx} key={idx}>
                            {
                                ticketEvent.map((ticket, index) => {
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
                    )
                })}
            </TkTabsGroup>
        </div>
    )

};

TkListTickets.propTypes = {
    listTicketsEvent: PropTypes.object.isRequired
};

export default TkListTickets;