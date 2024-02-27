import TkTicket from '../../../components/molecules/Tk-Ticket/tk-ticket';
import TkCounter from '../../../components/molecules/Tk-Counter/tk-counter';
import TkHeaderCarousel from '../../../components/molecules/Tk-Header-Carousel/tk-header-carousel';
import TkSteps from '../../../components/molecules/Tk-Steps/tk-steps';
import TkTabsGroup from '../../../components/molecules/Tk-Tabs/Tk-Tabs-Group/tk-tabs-group';
import TkDropdown from '../../../components/molecules/Tk-Dropdown/tk-dropdown';
import TkModal from '../../../components/molecules/Tk-Modal/tk-modal';
import TkButton from '../../../components/atoms/Tk-Button/tk-button';
import { useState } from 'react';
import TkTabList from '../../../components/molecules/Tk-Tabs/TkTabList/tk-tab-list';
import TkTabContent from '../../../components/molecules/Tk-Tabs/Tk-Tab-Content/tk-tab-content';


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

const MoleculesPage = () => {
    const tabsInfo = ['Pestaña 1', 'Pestaña 2'];

    const images = [
        'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ];

    const [showModal, setShowModal] = useState(false);
    const [activeTab, setActiveTab] = useState(0);
    const handleCallbackTab = (dataFromChild) => {        
        setActiveTab(dataFromChild);
        console.log('dataFromChild', dataFromChild);
      };

    return (
        <>
            <div className="my-5">
                <h1 className="font-bold text-3xl mb-3">Header Carousel</h1>
                <TkHeaderCarousel images={images} />
            </div>
            <div className="container relative mx-auto px-4" >
                <div className="my-5">
                    <h1 className="font-bold text-3xl mb-3">Card Ticket</h1>
                    <TkTicket price={1600} currency={'MXN'} sectionPosition={'110'} rowPosition={'L-Q'} nameIcon='IoIosArrowForward' />
                </div>

                <div className="my-5">
                    <h1 className="font-bold text-3xl mb-3">Counter</h1>
                    <TkCounter />
                </div>

                <div className="my-5">
                    <h1 className="font-bold text-3xl mb-3">Dropdown</h1>
                    <TkDropdown buttonLabel="Abrir Dropdown">
                        <ul>
                            <li>Opción 1</li>
                            <li>Opción 2</li>
                            <li>Opción 3</li>
                        </ul>
                    </TkDropdown>
                </div>

                <div className="my-5">
                    <h1 className="font-bold text-3xl mb-3">Steps</h1>
                    <TkSteps ArraySteps={itemsSteps} />
                </div>

                <div className="my-5">
                    <h1 className="font-bold text-3xl mb-3">Tabs</h1>
                    <TkTabsGroup>
                        <TkTabList tabsInfo={ tabsInfo } setTabActive={handleCallbackTab} />                        
                        <TkTabContent isActiveTab={activeTab === 0}>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, similique perferendis adipisci magni, vel deleniti nisi quia placeat voluptates porro, laborum reiciendis autem ea et dignissimos facilis provident? Omnis, aut!
                                Dolor illo, minus nam aut voluptate debitis nostrum veritatis iure reprehenderit fugiat vitae tenetur dignissimos illum, exercitationem accusantium, corrupti necessitatibus aliquam eligendi quo at doloribus sunt eos eius? Similique, doloribus.
                                Temporibus suscipit, in veniam deleniti officiis nesciunt reprehenderit, maiores eligendi esse earum eveniet dolores officia vero error perspiciatis iure dignissimos recusandae modi commodi ullam vitae exercitationem non et. Ipsa, natus.
                                Perferendis autem quasi voluptates voluptatum reprehenderit dolore praesentium adipisci quia maiores iure minima at nihil, illo ducimus esse consequuntur soluta, saepe expedita rem velit. Animi laudantium est repellat sequi vel!
                                Hic, quod. Dignissimos quod, excepturi possimus quis et porro, ad illo est consequatur consequuntur totam veniam fugit cum maiores obcaecati commodi voluptatem modi tempore. Delectus, reprehenderit. Maxime, repudiandae beatae? Dolorem.
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, similique perferendis adipisci magni, vel deleniti nisi quia placeat voluptates porro, laborum reiciendis autem ea et dignissimos facilis provident? Omnis, aut!
                                Dolor illo, minus nam aut voluptate debitis nostrum veritatis iure reprehenderit fugiat vitae tenetur dignissimos illum, exercitationem accusantium, corrupti necessitatibus aliquam eligendi quo at doloribus sunt eos eius? Similique, doloribus.
                                Temporibus suscipit, in veniam deleniti officiis nesciunt reprehenderit, maiores eligendi esse earum eveniet dolores officia vero error perspiciatis iure dignissimos recusandae modi commodi ullam vitae exercitationem non et. Ipsa, natus.
                                Perferendis autem quasi voluptates voluptatum reprehenderit dolore praesentium adipisci quia maiores iure minima at nihil, illo ducimus esse consequuntur soluta, saepe expedita rem velit. Animi laudantium est repellat sequi vel!
                                Hic, quod. Dignissimos quod, excepturi possimus quis et porro, ad illo est consequatur consequuntur totam veniam fugit cum maiores obcaecati commodi voluptatem modi tempore. Delectus, reprehenderit. Maxime, repudiandae beatae? Dolorem.
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, similique perferendis adipisci magni, vel deleniti nisi quia placeat voluptates porro, laborum reiciendis autem ea et dignissimos facilis provident? Omnis, aut!
                                Dolor illo, minus nam aut voluptate debitis nostrum veritatis iure reprehenderit fugiat vitae tenetur dignissimos illum, exercitationem accusantium, corrupti necessitatibus aliquam eligendi quo at doloribus sunt eos eius? Similique, doloribus.
                                Temporibus suscipit, in veniam deleniti officiis nesciunt reprehenderit, maiores eligendi esse earum eveniet dolores officia vero error perspiciatis iure dignissimos recusandae modi commodi ullam vitae exercitationem non et. Ipsa, natus.
                                Perferendis autem quasi voluptates voluptatum reprehenderit dolore praesentium adipisci quia maiores iure minima at nihil, illo ducimus esse consequuntur soluta, saepe expedita rem velit. Animi laudantium est repellat sequi vel!
                                Hic, quod. Dignissimos quod, excepturi possimus quis et porro, ad illo est consequatur consequuntur totam veniam fugit cum maiores obcaecati commodi voluptatem modi tempore. Delectus, reprehenderit. Maxime, repudiandae beatae? Dolorem.

                            </p>
                        </TkTabContent>
                        <TkTabContent isActiveTab={activeTab === 1}>
                            <div>
                                <h1>Contenido de la pestaña 2</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aut commodi, impedit eaque in quisquam ipsa obcaecati aperiam maiores tempore error, odio recusandae laboriosam nisi esse libero unde tempora neque!</p>
                            </div>
                        </TkTabContent>
                    </TkTabsGroup>
                </div>

                <div className='my-5'>
                    <h1 className='font-bold text-3xl mb-3' >Modal</h1>
                    <TkModal showModal={showModal} setShowModal={setShowModal} body={<div>body modal</div>} />
                    <TkButton label='Abrir Modal' executeButton={() => { setShowModal(true) }} />
                </div>

            </div>
        </>
    )
};

export default MoleculesPage;