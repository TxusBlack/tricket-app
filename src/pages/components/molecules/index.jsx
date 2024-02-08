import TkTicket from '../../../components/molecules/Tk-Ticket/tk-ticket';
import TkCounter from '../../../components/molecules/Tk-Counter/tk-counter';
import TkFilters from '../../../components/molecules/Tk-Filters/tk-filters';
import TkHeaderCarousel from '../../../components/molecules/Tk-Header-Carousel/tk-header-carousel';
import TkSteps from '../../../components/molecules/Tk-Steps/tk-steps';
import TkTabsGroup from '../../../components/molecules/Tk-Tabs/Tk-Tabs-Group/tk-tabs-group';
import TkTabs from '../../../components/molecules/Tk-Tabs/Tk-Tab/tk-tabs';


const MoleculesPage = () => {
    const tabs = [
        {
            label: 'Pestaña 1',
            content: <p>
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
        },
        {
            label: 'Pestaña 2',
            content: <div>
                <h1>Contenido de la pestaña 2</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aut commodi, impedit eaque in quisquam ipsa obcaecati aperiam maiores tempore error, odio recusandae laboriosam nisi esse libero unde tempora neque!</p>
            </div>
        },
        { label: 'Pestaña 3', content: <p>Contenido de la pestaña 3</p> },
    ];

    const images = [
        'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ];


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
                    <h1 className="font-bold text-3xl mb-3">Filters</h1>
                    <TkFilters />
                </div>

                <div className="my-5">
                    <h1 className="font-bold text-3xl mb-3">Steps</h1>
                    <TkSteps />
                </div>

                <div className="my-5">
                    <h1 className="font-bold text-3xl mb-3">Tabs</h1>
                    <TkTabsGroup >
                        {
                            tabs.map((tab, index) => {
                                return (
                                    <TkTabs
                                        key={index}
                                        labelTab={tab.label}
                                        indexTab={index}>
                                        <div className="index === activeTab ? 'active tab-content' : 'tab-content'">
                                            {tab.content}
                                        </div>
                                    </TkTabs>
                                )
                            })
                        }
                    </TkTabsGroup>
                </div>

            </div>
        </>
    )
};

export default MoleculesPage;