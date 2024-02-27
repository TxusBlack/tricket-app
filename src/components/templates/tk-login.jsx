import { useState } from "react";
import TkButton from "../atoms/Tk-Button/tk-button";
import TkCard from "../atoms/Tk-Card/tk-card";
import TkInput from "../atoms/Tk-Input/tk-input";


const TkLogin = ({
    sizeCard
}) => {
    const [hasAccount, setHasAccount] = useState(false);
    const [labelLogin, setLabelLogin] = useState('Regístrate');

    const handleHasAccount = () => {
        setHasAccount(true);
        setLabelLogin('Inicia Sesión');
    }


    const handleNotHasAccount = () => {
        setHasAccount(false);
        setLabelLogin('Regístrate');
    }
    

    return (
        <div>
            <TkCard size={sizeCard}>
                    <h3 className="font-bold tk-fs-large" >{labelLogin}</h3>
                    <h3 className="tk-fs-large tk-text-outline my-4" >Wish Outdoor 2021</h3>

                {!hasAccount && <div>
                    <form>
                        <TkInput type="text" placeholder="Nombre" iconInput={'IoIosPerson'} />
                        <TkInput type="email" placeholder="E-mail" iconInput={'IoIosMail'} />
                        <TkInput type="password" placeholder="Contraseña" iconInput={'IoIosLock'} />
                    </form>
                    
                    <div className="flex justify-center my-4" >
                        <p className="mr-2" >¿Ya tienes cuenta?</p>
                        <a className="tk-text-success font-bold cursor-pointer" onClick={handleHasAccount} >
                            Inicia Sesión
                        </a>
                    </div>
                </div>}

                {hasAccount && <div>
                    <form>                        
                        <TkInput type="text" placeholder="E-mail" iconInput={'IoIosMail'} />
                        <TkInput type="password" placeholder="Contraseña" iconInput={'IoIosLock'} />
                    </form>
                    
                    <div className="flex justify-center my-4" >
                        <p className="mr-2" >¿No tienes una cuenta?</p>
                        <a className="tk-text-success font-bold cursor-pointer" onClick={handleNotHasAccount} >Registrate</a>
                    </div>
                </div>}


                <TkButton label="Continuar" size="default" type="success" />


            </TkCard>
        </div>
    )
};

export default TkLogin;