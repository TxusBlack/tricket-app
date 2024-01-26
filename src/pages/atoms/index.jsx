import TkButton from "../../components/atoms/Tk-Button/tk-button";
import TkIcon from "../../components/atoms/Tk-Icon/tk-icon";
import TkBreadcrum from "../../components/atoms/Tk-Breadcrum/tk-breadcrum";
import TkCard from "../../components/atoms/Tk-Card/tk-card";
import TkIconButton from "../../components/atoms/Tk-Icon-Button/tk-icon-button";
import TkInput from "../../components/atoms/Tk-Input/tk-input";
import TkInputDate from "../../components/atoms/Tk-Input-Date/tk-input-date";
import TkInputSelect from "../../components/atoms/Tk-Input-Select/tk-input-select";

const ItemsBreadcrumb = ['Home', 'Library', 'Data'];

const optionsSelect = [
    {value: '1', label: 'Opcion 1'},
    {value: '2', label: 'Opcion 2'},
    {value: '3', label: 'Opcion 3'},
    {value: '4', label: 'Opcion 4'},
    {value: '5', label: 'Opcion 5'},
];

const plazasOptions = [
    {value: '1', label: 'V.I.P'},
    {value: '2', label: 'Preferencial'},
    {value: '3', label: 'General'},
    {value: '4', label: 'Laterales'},
    {value: '5', label: 'Posterior'},
];


const AtomsPage = () => {
    return (
        <div className="container mx-auto px-4" >
            <div className="my-5">
                <h1 className="font-bold text-3xl mb-3">Breadcrum</h1>
                <TkBreadcrum items={ItemsBreadcrumb} />
            </div>

            <div className="my-5">
                <h1 className="font-bold text-3xl mb-3">Buttons</h1>
                <div className="grid gap-4 grid-cols-4" >
                    <TkButton isShowIcon={true} nameIcon={'fa-house'}  label="Button primary" type="primary" />
                    <TkButton label="Button Success" type="success" />
                    <TkButton isShowIcon={true} label="Button Outline" type="outline" />
                    <TkButton label="Button Outline Success" type="outline-success" />
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
                            <TkButton isShowIcon={true} label="Cancelar" type="outline" ></TkButton>
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
                <h1 className="font-bold text-3xl mb-3">Cover</h1>
            </div>

            <div className="my-5">
                <h1 className="font-bold text-3xl mb-3">Icon</h1>
                <TkIcon name="fa-house" size="small" />
                <TkIcon name="fa-phone" size="default" />
                <TkIcon name="fa-car" size="puffy" />
                <TkIcon name="fa-umbrella" size="small" />
                <TkIcon name="fa-music" size="default" />
                <TkIcon name="fa-tag" size="puffy" />
            </div>

            <div className="my-5">
                <h1 className="font-bold text-3xl mb-3">Icon Button</h1>
                <TkIconButton name="fa-house" size="small" />
                <TkIconButton name="fa-heart" size="small" />
                <TkIconButton name="fa-tag" size="small" />
                <TkIconButton name="fa-magnifying-glass" size="small" />
                <TkIconButton name="fa-star" size="small" />

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
        </div>
    );
}

export default AtomsPage;