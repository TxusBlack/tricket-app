import TkBreadcrumb from "../../components/atoms/Tk-Breadcrum/tk-breadcrum";
import TkButton from "../../components/atoms/Tk-Button/tk-button";
import TkCard from "../../components/atoms/Tk-Card/tk-card";
import TkIconButton from "../../components/atoms/Tk-Icon-Button/tk-icon-button";
import TkIcon from "../../components/atoms/Tk-Icon/tk-icon";
import TkListTickets from "../../components/organims/Tk-List-Tickets/tk-list-tickets";
import DefaultLayout from "../../components/templates/DefaultLayout";
import WISHImage from '../../assets/images/WISH.svg';
import TkDateEvents from "../../components/molecules/Tk-Date-Events/tk-date-events";


const titleEvent = 'Wish outdoor 2021';
const placeEvent = 'Parque Fundidora';
const addressEvent = 'Avenida Fundidora y, Adolfo Prieto S/N, Obrera, 64010 Monterrey, N.L., México';
const dateLabel = 'Fecha';
const dateEvent = '22 de Mayo 2021';
const priceLabel = 'Boletos desde';
const priceEvent = '$1000 MXN';
const imageHeader = 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';



const itemsBreadcrumb = [
    { label: 'Fecha', url: '' },
    { label: 'Entradas', url: '' },
];

const EventsPage = () => {
    return (
        <DefaultLayout image={imageHeader}>
            <div className="event">
                <div className="Title">
                    <TkCard size="large">
                        <div className="flex justify-between">
                            <div>
                                <h1 className="event-title pb-5" >{titleEvent}</h1>
                                <div className="flex py-3" >
                                    <TkIcon iconName="IoIosPin" />
                                    <div className="ml-6" >
                                        <h3 className="font-bold event-title__data" >{placeEvent}</h3>
                                        <p>{addressEvent}</p>
                                    </div>
                                </div>

                                <div className="flex py-3" >
                                    <TkIcon iconName="IoIosCalendar" />
                                    <div className="ml-6">
                                        <h3 className="font-bold" >{dateLabel}</h3>
                                        <p>{dateEvent}</p>
                                    </div>
                                </div>

                                <div className="flex py-3">
                                    <TkIcon iconName="IoIosTime" />
                                    <div className="flex ml-6">
                                        <h3>{priceLabel}</h3>
                                        <p>{priceEvent}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between" >
                                <TkIconButton nameIcon="IoIosHeartEmpty" />
                                <TkIconButton nameIcon="IoMdShare" />
                            </div>
                        </div>
                    </TkCard>
                </div>
                <div className="orden">
                    <TkCard size="large">
                        Orden de compra
                        <TkButton label="Pagar" type="primary" executeButton={() => { }} />
                    </TkCard>
                </div>
                <div className="Boletos">
                    <TkCard size="large">
                        <TkBreadcrumb items={itemsBreadcrumb} />
                        <hr />
                        <div className="date-events flex" >
                            <TkDateEvents/>
                            <TkDateEvents/>
                            <TkDateEvents/>
                            <TkDateEvents/>
                        </div>
                        <hr />
                        <TkListTickets listTickets={[]} BetterListTickets={[]} />
                    </TkCard>

                </div>
            </div>
        </DefaultLayout>

    );
};

export default EventsPage;
