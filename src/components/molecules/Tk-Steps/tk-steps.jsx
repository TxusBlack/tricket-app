import PropTypes from 'prop-types';
import TkIconButton from '../../atoms/Tk-Icon-Button/tk-icon-button';
import { useState } from 'react';


const TkSteps = ({ ArraySteps }) => {
    const [steps, setSteps] = useState(ArraySteps);


    const executeStepSelected = (idStep) => {
        const stepsHandle = [...steps];
        const stepSelected = stepsHandle.find(step => step.id === idStep);        
        if (stepSelected) {
            stepSelected.status = !stepSelected.status;            
        }

        setSteps(stepsHandle);

    }

    return (
        <div className="flex justify-between" >
            {steps.map((step, index) => (
                <div className='tk-steps' key={index}>
                    <div className="flex flex-col items-center tk-steps-step" >
                        <TkIconButton 
                            id={step.id} 
                            nameIcon={step.icon} 
                            colorIcon={step.status ? 'success': 'outline'} 
                            sizeIcon={'large'} 
                            callbackAction={executeStepSelected} />
                        <p className={`text-center tk-fs-small tk-lh-small tk-text-${step.status ? 'success': 'outline'} `}>
                            {step.label}
                        </p>
                    </div>
                    {index < ArraySteps.length - 1 &&  <hr className={`tk-steps-line tk-bg-${step.status ? 'success': 'outline'}`} />}
                </div>
            ))}
        </div>
    );
};


TkSteps.propTypes = {
    ArraySteps: PropTypes.array.isRequired
};



export default TkSteps;
