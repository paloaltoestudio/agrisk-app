import React, { createContext, useState } from 'react';

export const StepsContext = createContext();

const StepsContextProvider = props => {
    const [steps, setSteps] = useState('step_1');

    const changeStep = el => {
        setSteps(`step_${el.target.id}`);
    }

    return (
        <StepsContext.Provider value={{steps, setSteps, changeStep}}>
            {props.children}
        </StepsContext.Provider>
    )
}

export default StepsContextProvider;