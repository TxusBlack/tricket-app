import TkListTickets from "../../components/organims/Tk-List-Tickets/tk-list-tickets";


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

const OrganismPage = () => {
    return (
        <div className="container mx-auto px-4" >
            <div className="my-5">
                <h1 className="font-bold text-3xl mb-3">Menu</h1>
            </div>

            <div className="my-5">
                <h1 className="font-bold text-3xl mb-3">Purchase order</h1>
            </div>

            <div className="my-5">
                <h1 className="font-bold text-3xl mb-3">Purchase order</h1>
            </div>

            <div className="my-5">
                <h1 className="font-bold text-3xl mb-3">List Tickets</h1>
                <TkListTickets listTickets={listTickets} BetterListTickets={BetterListTickets} />
            </div>

        </div>
    );
};


export default OrganismPage;

