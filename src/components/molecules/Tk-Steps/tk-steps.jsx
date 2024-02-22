import PropTypes from 'prop-types';
import TkIconButton from '../../atoms/Tk-Icon-Button/tk-icon-button';


const TkSteps = ({ ArraySteps }) => {
    return (
        <div className="flex justify-between tk-steps" >
            {ArraySteps.map((step, index) => (
                <>
                    <div key={index} className="flex flex-col items-center tk-steps-step" >
                        <TkIconButton nameIcon={step.icon} colorIcon={'outline'} sizeIcon={'large'} />
                        <p className="text-center tk-fs-small tk-lh-small" >{step.label}</p>
                    </div>
                    {index < ArraySteps.length - 1 &&  <hr className='tk-steps-line' />}
                </>
            ))}
        </div>
    );
};


TkSteps.propTypes = {
    ArraySteps: PropTypes.array.isRequired
};



export default TkSteps;
