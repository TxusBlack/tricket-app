import TkCard from "../../atoms/Tk-Card/tk-card";
import TkIcon from "../../atoms/Tk-Icon/tk-icon";

const executeCardAction2 = () => {
    
}



const TkDateEvents = ({
    executeCardAction
}) => {
    return (
        <div className="tk-date-events" onClick={executeCardAction2}  >
            <TkCard size="xsmall" type="button" >
                <div className="flex justify-between" >
                    <div>
                        <p className="tk-text-success tk-fs-xlarge font-bold text-center">
                            24
                        </p>
                        <hr />
                        <p className="font-bold tk-fs-small text-center">
                            MAY
                        </p>
                    </div>
                    <div>
                        <div className="flex items-center">
                            <TkIcon iconName={'IoIosCalendar'} size="small" color={'outline'} />
                            <p className="ms-2">Viernes</p>
                        </div>
                        <div className="flex items-center">
                            <TkIcon iconName={'IoMdTime'} size="small" color={'outline'} />
                            <p className="ms-2">14:00 hs.</p>
                        </div>
                        
                    </div>
                </div>

            </TkCard> 
        </div>
    )


}

export default TkDateEvents;

