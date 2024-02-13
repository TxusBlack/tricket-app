import TkButton from "../../../components/atoms/Tk-Button/tk-button";
import TkIcon from "../../../components/atoms/Tk-Icon/tk-icon";
import TkBreadcrumb from "../../../components/atoms/Tk-Breadcrum/tk-breadcrum";
import TkCard from "../../../components/atoms/Tk-Card/tk-card";
import TkIconButton from "../../../components/atoms/Tk-Icon-Button/tk-icon-button";
import TkInput from "../../../components/atoms/Tk-Input/tk-input";
import TkInputDate from "../../../components/atoms/Tk-Input-Date/tk-input-date";
import TkInputSelect from "../../../components/atoms/Tk-Input-Select/tk-input-select";
import TkCardTicket from "../../../components/atoms/Tk-Card-Ticket/tk-card-ticket";
import TkImageHeader from "../../../components/atoms/Tk-Image-Header/tk-image-header";

const optionsSelect = [
    { value: '1', label: 'Opcion 1' },
    { value: '2', label: 'Opcion 2' },
    { value: '3', label: 'Opcion 3' },
    { value: '4', label: 'Opcion 4' },
    { value: '5', label: 'Opcion 5' },
];

const plazasOptions = [
    { value: '1', label: 'V.I.P' },
    { value: '2', label: 'Preferencial' },
    { value: '3', label: 'General' },
    { value: '4', label: 'Laterales' },
    { value: '5', label: 'Posterior' },
];

const ItemsBreadcrumb = [
    { label: 'Home', url: '/' },
    { label: 'Components', url: '/components'},
    { label: 'Atoms', url: '/atoms' }
  ];

const functionIconButton = () => {
    console.log("Execute icon button");
};

const AtomsPage = () => {
    return (
        <div className="container mx-auto px-4" >
            <div style={{height: '90vh' }} >
                tricket
            </div>
            <div className="my-5">
                <TkImageHeader 
                    image={'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                    topPosition={'100px'}
                />
            </div>

            <div className="my-5">
                <h1 className="font-bold text-3xl mb-3">Breadcrum</h1>
                <TkBreadcrumb items={ItemsBreadcrumb} />
            </div>

            <div className="my-5">
                <h1 className="font-bold text-3xl mb-3">Buttons</h1>
                <h2 className="font-bold text-2xl my-3">Small</h2>
                <div className="grid gap-4 grid-cols-4" >
                    <TkButton isShowIcon={true} nameIcon={'IoIosTrash'} label="Button primary" type="primary" size={'small'} />
                    <TkButton label="Button Success" type="success" size={'small'} />
                    <TkButton isShowIcon={true} label="Button Outline" type="outline" size={'small'} />
                    <TkButton label="Button Outline Success" type="outline-success" size={'small'} />
                </div>
                <h2 className="font-bold text-2xl my-3">Default</h2>
                <div className="grid gap-4 grid-cols-4" >
                    <TkButton isShowIcon={true} nameIcon={'IoIosTrash'} label="Button primary" type="primary" size={'default'} />
                    <TkButton label="Button Success" type="success" size={'default'} />
                    <TkButton isShowIcon={true} label="Button Outline" type="outline" size={'default'} />
                    <TkButton label="Button Outline Success" type="outline-success" size={'default'} />
                </div>
                <h2 className="font-bold text-2xl my-3">Puffy</h2>
                <div className="grid gap-4 grid-cols-4" >
                    <TkButton isShowIcon={true} nameIcon={'IoIosTrash'} label="Button primary" type="primary" size={'puffy'} />
                    <TkButton label="Button Success" type="success" size={'puffy'} />
                    <TkButton isShowIcon={true} label="Button Outline" type="outline" size={'puffy'} />
                    <TkButton label="Button Outline Success" type="outline-success" size={'puffy'} />
                </div>
            </div>

            <div className="my-5">
                <h1 className="font-bold text-3xl mb-3">Card</h1>
                <TkCard size="small">
                    <div>
                        <h1 className="text-3xl font-semibold my-4">Card Title</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ratione ea iste dolorum sed enim fuga ducimus omnis nobis
                            facere distinctio eligendi quidem aspernatur,
                            hic tenetur reprehenderit ipsa quod pariatur.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ratione ea iste dolorum sed enim fuga ducimus omnis nobis
                            facere distinctio eligendi quidem aspernatur,
                            hic tenetur reprehenderit ipsa quod pariatur.
                        </p>
                        <div className="flex my-5" >
                            <TkButton isShowIcon={true} nameIcon={'IoIosTrash'} label="Cancelar" type="outline"></TkButton>
                            <TkButton label="Aceptar" type="success">Aceptar</TkButton>
                        </div>
                    </div>
                </TkCard>
                <TkCard size="medium">
                    <div>
                        <h1 className="text-3xl font-semibold my-4">Info evento</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ratione ea iste dolorum sed enim fuga ducimus omnis nobis
                            facere distinctio eligendi quidem aspernatur,
                            hic tenetur reprehenderit ipsa quod pariatur.
                            Vitae! Recusandae itaque quis accusamus architecto quam laudantium,
                            fugit suscipit, minus veniam, nihil nulla praesentium et debitis
                            obcaecati commodi quod eius! A tenetur iste vitae distinctio dolores
                            aliquid aut quam provident?Rem aperiam, ea, cumque ipsam,
                            harum inventore nemo ex quis accusamus nam iure laboriosam ipsum alias
                            illo labore in eum? Commodi ut, non architecto mollitia
                            distinctio quo facere nam excepturi!
                        </p>
                        <div className="flex" >
                            <TkInputDate label={'Fecha de nacimiento'} />
                            <TkInputDate label={'Fecha del evento'} />
                            <TkInputDate label={'Fecha preventa'} />

                        </div>

                    </div>
                </TkCard>
                <TkCard size="large">
                    <div>
                        <h1 className="text-3xl font-semibold my-4">Formulario</h1>
                        <form action="">
                            <TkInput label={'Nombre'} placeholder={'Escriba su nombre'} type={'text'} />
                            <TkInput label={'Password'} placeholder={'Escriba el password'} type={'password'} />
                            <TkInput label={'Email'} placeholder={'Escriba el email'} type={'email'} />
                            <TkInput label={'Phone'} placeholder={'Escriba su telefono'} type={'phone'} />
                        </form>
                    </div>
                </TkCard>
            </div>

            <div className="my-5">
                <h1 className="font-bold text-3xl mb-3">Icon</h1>
                <div className="flex my-5">
                    <TkIcon className="mx-3" iconName="IoIosArrowForward" size="1em" color="#acacac" />
                    <TkIcon className="mx-3" iconName="IoIosAddCircle" size="1.5em" color="#007bff" />
                    <TkIcon className="mx-3" iconName="IoMdHeart" size="2em" color="#088A08" />
                </div>
                <div className="flex my-5">
                    <TkIcon className="mx-3" iconName="IoIosOptions" size="1rem" color="#acacac" />
                    <TkIcon className="mx-3" iconName="IoIosNotifications" size="1.5rem" color="#007bff" />
                    <TkIcon className="mx-3" iconName="IoIosCloseCircle" size="2rem" color="#088A08" />
                </div>
            </div>

            <div className="my-5">
                <h1 className="font-bold text-3xl mb-3">Icon Button</h1>
                <TkIconButton nameIcon="IoIosArrowForward" colorIcon="#acacac" sizeIcon="2rem" executeButton={functionIconButton()}/>
                <TkIconButton nameIcon="IoIosAddCircle" colorIcon="#acacac" sizeIcon="2rem" executeButton={functionIconButton()} />
                <TkIconButton nameIcon="IoMdHeart" colorIcon="#acacac" sizeIcon="2rem" executeButton={functionIconButton()}/>
                <TkIconButton nameIcon="IoIosOptions" colorIcon="#acacac" sizeIcon="2rem" executeButton={functionIconButton()} />
                <TkIconButton nameIcon="IoIosNotifications" colorIcon="#acacac" sizeIcon="2rem" executeButton={functionIconButton()} />
            </div>

            <div className="my-5">
                <h1 className="font-bold text-3xl mb-3">Input</h1>
                <TkInput label={'Nombre'} placeholder={'Escriba su nombre'} type={'text'} />
                <TkInput label={'Password'} placeholder={'Escriba el password'} type={'password'} />
                <TkInput label={'Email'} placeholder={'Escriba el email'} type={'email'} />
                <TkInput label={'Phone'} placeholder={'Escriba su telefono'} type={'phone'} />
            </div>

            <div className="my-5">
                <h1 className="font-bold text-3xl mb-3">Input Date</h1>
                <TkInputDate label={'Fecha de nacimiento'} />
                <TkInputDate label={'Fecha del evento'} />
                <TkInputDate label={'Fecha preventa'} />
                <TkInputDate label={'Fecha de salida'} />
            </div>

            <div className="my-5">
                <h1 className="font-bold text-3xl mb-3">Input Select</h1>
                <TkInputSelect label={'Elegir opcion'} options={optionsSelect} />
                <TkInputSelect label={'Plazas disponibles'} options={plazasOptions} />
                <TkInputSelect label={'Elegir sección'} options={optionsSelect} />
            </div>

            <div className="my-5">
                <h1 className="font-bold text-3xl mb-3">Card Ticket</h1>
                <TkCardTicket />
            </div>

        </div>
    );
}

export default AtomsPage;