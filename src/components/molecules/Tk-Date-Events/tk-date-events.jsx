import { useState } from "react";
import TkCard from "../../atoms/Tk-Card/tk-card";
import TkIcon from "../../atoms/Tk-Icon/tk-icon";

const TkDateEvents = ({
    dateEventData,
    executeCardAction
}) => {
    const [clicked, setClicked] = useState(false);

    const clickedDateEvent = () => {
        setClicked(!clicked);
        executeCardAction(dateEventData);
    }

    return (
        <div className="tk-date-events" onClick={clickedDateEvent}  >
            <TkCard size="xsmall" type="button" bgColor={clicked ? 'primary': 'light'} >
                <div className="flex justify-between" >
                    <div>
                        <p className={`tk-text-${clicked? 'light': 'success'} tk-fs-xlarge font-bold text-center`}>
                            {dateEventData?.numberDay}
                        </p>
                        <hr />
                        <p className={`font-bold tk-fs-small text-center tk-text-${clicked? 'light': 'ouline'}`}>
                            {dateEventData?.month}
                        </p>
                    </div>
                    <div>
                        <div className="flex items-center">
                            <TkIcon iconName={'IoIosCalendar'} size="small" color={clicked ? 'light': 'outline'} />
                            <p className={`ms-2  tk-text-${clicked? 'light': 'ouline'}`}>
                                {dateEventData?.day}
                            </p>
                        </div>
                        <div className="flex items-center">
                            <TkIcon iconName={'IoMdTime'} size="small" color={clicked ? 'light': 'outline'} />
                            <p className={`ms-2  tk-text-${clicked? 'light': 'ouline'}`}>
                                {dateEventData?.hour}
                            </p>
                        </div>                        
                    </div>
                </div>
            </TkCard>            
        </div>
    )


}

export default TkDateEvents;

