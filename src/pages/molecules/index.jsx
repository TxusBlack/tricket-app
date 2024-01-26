import TkCardTicket from '../../components/molecules/Tk-Card-ticket/tk-card-ticket';
import TkCounter from '../../components/molecules/Tk-Counter/tk-counter';
import TkFilters from '../../components/molecules/Tk-Filters/tk-filters';
import TkHeaderCarousel from '../../components/molecules/Tk-Header-Carousel/tk-header-carousel';
import TkSteps from '../../components/molecules/Tk-Steps/tk-steps';
import TkTabs from '../../components/molecules/Tk-Tabs/tk-tabs';


const MoleculesPage = () => {
    return (
        <div className="container mx-auto px-4" >
            <div className="my-5">
                <h1 className="font-bold text-3xl mb-3">Card Ticket</h1>
                <TkCardTicket />
            </div>

            <div className="my-5">
                <h1 className="font-bold text-3xl mb-3">Counter</h1>
                <TkCounter />
            </div>

            <div className="my-5">
                <h1 className="font-bold text-3xl mb-3">Filters</h1>
                <TkFilters />
            </div>

            <div className="my-5">
                <h1 className="font-bold text-3xl mb-3">Header Carousel</h1>
                <TkHeaderCarousel />
            </div>

            <div className="my-5">
                <h1 className="font-bold text-3xl mb-3">Steps</h1>
                <TkSteps />
            </div>

            <div className="my-5">
                <h1 className="font-bold text-3xl mb-3">Tabs</h1>
                <TkTabs />
            </div>

        </div>
    )
};

export default MoleculesPage;