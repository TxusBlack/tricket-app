import TkBreadcrumb from "../../components/atoms/Tk-Breadcrum/tk-breadcrum";
// import TkButton from "../../components/atoms/Tk-Button/tk-button";
import TkCard from "../../components/atoms/Tk-Card/tk-card";
import TkIconButton from "../../components/atoms/Tk-Icon-Button/tk-icon-button";
import TkIcon from "../../components/atoms/Tk-Icon/tk-icon";
import TkListTickets from "../../components/organims/Tk-List-Tickets/tk-list-tickets";
import DefaultLayout from "../../components/templates/DefaultLayout";
import WISHImage from '../../assets/images/WISH.svg';
import TkDateEvents from "../../components/molecules/Tk-Date-Events/tk-date-events";
import TkSteps from "../../components/molecules/Tk-Steps/tk-steps";
import TkLogin from "../../components/templates/tk-login";


const titleEvent = 'Wish outdoor 2021';
const placeEvent = 'Parque Fundidora';
const addressEvent = 'Avenida Fundidora y, Adolfo Prieto S/N, Obrera, 64010 Monterrey, N.L., México';
const dateLabel = 'Fecha';
const dateEvent = '22 de Mayo 2021';
const priceLabel = 'Boletos desde';
const priceEvent = '$1000 MXN';
const imageHeader = 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const itemsSteps = [
    {
        icon: 'IoMdPerson',
        label: '1. Registrate o incia sesión',
    },
    {
        icon: 'IoMdCart',
        label: '2. Realiza la orden',
    },
    {
        icon: 'IoMdCard',
        label: '3. Confirma tus datos',
    },
];

const itemsBreadcrumb = [
    { label: 'Fecha', url: '' },
    { label: 'Entradas', url: '' },
];

const dateEventsList = [
    {
        id: 1,
        date: '22 de Mayo 2024',
        numberDay: '22',
        day: 'SAB',
        month: 'MAY',
        hour: '12:00 PM'
    },
    {
        id: 2,
        date: '23 de Mayo 2024',
        numberDay: '23',
        day: 'DOM',
        month: 'MAY',
        hour: '12:00 PM'
    },
    {
        id: 3,
        date: '24 de Mayo 2024',
        numberDay: '24',
        day: 'LUN',
        month: 'MAY',
        hour: '12:00 PM'
    },
    {
        id: 4,
        date: '25 de Mayo 2021',
        numberDay: '25',
        day: 'MAR',
        month: 'MAY',
        hour: '12:00 PM'
    },
    {
        id: 5,
        date: '26 de Mayo 2021',
        numberDay: '26',
        day: 'MIE',
        month: 'MAY',
        hour: '12:00 PM'
    }
]

const listTickets = [
    {
        value: 1600,
        currency: 'MXN',
        section: 'General',
        row: 'A',
    },
    {
        value: 1600,
        currency: 'MXN',
        section: 'General',
        row: 'A',
    },
    {
        value: 1600,
        currency: 'MXN',
        section: 'General',
        row: 'A',
    },
    {
        value: 1600,
        currency: 'MXN',
        section: 'General',
        row: 'A',
    },
    {
        value: 1600,
        currency: 'MXN',
        section: 'General',
        row: 'A',
    },
    {
        value: 1600,
        currency: 'MXN',
        section: 'General',
        row: 'A',
    },
    {
        value: 1600,
        currency: 'MXN',
        section: 'General',
        row: 'A',
    }

];

const BetterListTickets = [
    {
        value: 800,
        currency: 'MXN',
        section: 'v.i.p',
        row: 'A',
    },
    {
        value: 800,
        currency: 'MXN',
        section: 'v.i.p',
        row: 'A',
    },
    {
        value: 800,
        currency: 'MXN',
        section: 'v.i.p',
        row: 'A',
    },
    {
        value: 800,
        currency: 'MXN',
        section: 'v.i.p',
        row: 'A',
    },
    {
        value: 800,
        currency: 'MXN',
        section: 'v.i.p',
        row: 'A',
    },
    {
        value: 800,
        currency: 'MXN',
        section: 'v.i.p',
        row: 'A',
    },
    {
        value: 800,
        currency: 'MXN',
        section: 'v.i.p',
        row: 'A',
    }

];

const EventsPage = () => {
    const setDateEvent = (date) => {
        console.log(date);
    }

    return (
        <DefaultLayout image={WISHImage}>
            <div className="event">
                <div className="Title">
                    <TkCard size="auto">
                        <div className="flex justify-between">
                            <div>
                                <h1 className="event-title pb-5" >{titleEvent}</h1>
                                <div className="flex py-3" >
                                    <TkIcon iconName="IoIosPin" color={'outline'} size={'medium'} />
                                    <div className="ml-6" >
                                        <h3 className="font-bold event-title__data" >{placeEvent}</h3>
                                        <p>{addressEvent}</p>
                                    </div>
                                </div>

                                <div className="flex py-3" >
                                    <TkIcon iconName="IoIosCalendar" color={'outline'} size={'medium'} />
                                    <div className="ml-6">
                                        <h3 className="font-bold" >{dateLabel}</h3>
                                        <p>{dateEvent}</p>
                                    </div>
                                </div>

                                <div className="flex py-3">
                                    <TkIcon iconName="IoIosTime" color={'outline'} size={'medium'} />
                                    <div className="flex ml-6">
                                        <h3>{priceLabel}</h3>
                                        <p>{priceEvent}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between" >
                                <TkIconButton nameIcon="IoIosHeartEmpty" colorIcon={'outline'} sizeIcon={'large'} />
                                <TkIconButton nameIcon="IoMdShare" colorIcon={'outline'} sizeIcon={'large'} />
                            </div>
                        </div>
                    </TkCard>
                </div>
                <div className="orden">
                    <TkCard size="auto">
                        <TkSteps ArraySteps={itemsSteps} />

                    </TkCard>
                    <div className="event-buy">
                        <TkLogin sizeCard="medium" />
                        {/* <TkCard size="medium">
                            <h4>2. Registrate o incia sesión</h4>
                            <div className="event-buy--button">
                                <TkButton label="Pagar" type="success" executeButton={() => { }} />
                            </div>                   
                        </TkCard> */}
                    </div>
                </div>
                <div className="Boletos">
                    <TkCard size="auto">
                        <TkBreadcrumb items={itemsBreadcrumb} />
                        <hr />
                        <div className="date-events p-4 my-2 flex space-x-4" >
                            {dateEventsList.map((dateEvent, index) => (
                                <TkDateEvents key={index} dateEventData={dateEvent} executeCardAction={setDateEvent} />
                            ))}
                        </div>
                        <hr />
                        <div className="mt-5">
                            <TkListTickets listTickets={listTickets} BetterListTickets={BetterListTickets} />
                        </div>
                    </TkCard>
                </div>
            </div>
        </DefaultLayout>

    );
};

export default EventsPage;
