import TkButton from "../atoms/Tk-Button/tk-button";
import TkCard from "../atoms/Tk-Card/tk-card";
import TkInput from "../atoms/Tk-Input/tk-input";

const TkLogin = ({
    sizeCard
}) => {
    return (
        <div>
            <TkCard size={sizeCard}>
                <h3>1. Regístrate o Inicia sesión</h3>
                <h3>Wish Outdoor 2021</h3>

                <form>
                    <TkInput placeholder="Nombre" />
                    <TkInput placeholder="E-mail" />
                    <TkInput placeholder="Contraseña" />
                </form>

                <p>¿Ya tienes cuenta?</p>
                <a>Inicia Sesión</a>

                <TkButton label="Continuar" size="default" type="success" />


            </TkCard>
        </div>
    )
};

export default TkLogin;