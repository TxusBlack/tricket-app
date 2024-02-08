import PropTypes from 'prop-types';
import TkTabsGroup from '../../molecules/Tk-Tabs/Tk-Tabs-Group/tk-tabs-group';
import TkTabs from "../../molecules/Tk-Tabs/Tk-Tab/tk-tabs";
import TkTicket from "../../molecules/Tk-Ticket/tk-ticket";


const TkListTickets = ({
    listTickets,
    BetterListTickets,
}) => {

    return (
        <div>
            <TkTabsGroup>
                <TkTabs labelTab="Precio" indexTab={0} classTabContent="flex flex-wrap">
                    <>
                        {listTickets.map((ticket, index) => {
                            return (
                                <div className="m-5" key={index}>
                                    <TkTicket
                                        key={index}
                                        price={ticket.value}
                                        currency={ticket.currency}
                                        sectionPosition={ticket.section}
                                        rowPosition={ticket.row}
                                        nameIcon={'IoIosArrowForward'}
                                    />
                                </div>
                            )
                        })}
                    </>
                </TkTabs>
                <TkTabs labelTab="Mejor Precio" indexTab={1} classTabContent="flex flex-wrap">
                    <>
                        {
                            BetterListTickets.map((ticket, index) => {
                                return (
                                    <div className="m-5" key={index}>
                                        <TkTicket
                                            key={index}
                                            price={ticket.value}
                                            currency={ticket.currency}
                                            sectionPosition={ticket.section}
                                            rowPosition={ticket.row}
                                            nameIcon={'IoIosArrowForward'}
                                        />
                                    </div>
                                )
                            })
                        }
                    </>
                </TkTabs>
            </TkTabsGroup>




        </div>
    )

};

TkListTickets.propTypes = {
    listTickets: PropTypes.array.isRequired,
    BetterListTickets: PropTypes.array.isRequired,
    tabs: PropTypes.array.isRequired
};

export default TkListTickets;