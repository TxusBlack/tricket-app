import PropTypes from 'prop-types';
import TkTabs from "../../molecules/Tk-Tabs/tk-tabs";
import TkTicket from "../../molecules/Tk-Ticket/tk-ticket";


const TkListTickets = ({
    listTickets,
    BetterListTickets,
    tabs
}) => {

    return (
        <div>
            <TkTabs tabs={tabs} />

            <>
               {listTickets.map((ticket, index) => {
                    return (
                        <div className="my-5" key={index}>
                            <TkTicket
                                key={index}
                                price={ticket.value}
                                currency={ticket.currency}
                                sectionPosition={ticket.section}
                                rowPosition={ticket.row}
                                nameIcon={'arrow-right'}
                            />
                        </div>
                    )
                })}
            </>

            <>
                {
                    BetterListTickets.map((ticket, index) => {
                        return (
                            <div className="my-5" key={index}>
                                <TkTicket
                                    key={index}
                                    price={ticket.value}
                                    currency={ticket.currency}
                                    sectionPosition={ticket.section}
                                    rowPosition={ticket.row}
                                    nameIcon={'arrow-right'}
                                />
                            </div>
                        )
                    })
                }
            </>

        </div>
    )

};

TkListTickets.propTypes = {
    listTickets: PropTypes.array.isRequired,
    BetterListTickets: PropTypes.array.isRequired,
    tabs: PropTypes.array.isRequired
};

export default TkListTickets;