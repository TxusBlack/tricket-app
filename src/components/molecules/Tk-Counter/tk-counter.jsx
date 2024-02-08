import { useState } from "react";
import "../../../styles/settings/colors.css";
import TkButton from "../../atoms/Tk-Button/tk-button";

const TkCounter = () => {
    const [count, setCount] = useState(0);

    const incrementar = () => {
        setCount(count + 1);
    };

    const decrementar = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div className="contador m-2">
            <TkButton
                isShowIcon={true}
                nameIcon={'IoIosRemove'}                
                type="outline"
                executeButton={decrementar}
                size={'small'}
            />
            <span className="contador-value">{count}</span>
            <TkButton
                label="+Mas"
                type="primary"
                executeButton={incrementar}
                size={'small'}
            />
        </div>
    );
};

export default TkCounter;


