import React, { createContext, useState } from 'react';

export const StepsContext = createContext();

const StepsContextProvider = props => {
    const [steps, setSteps] = useState('1');

    const changeStep = id => {
        setSteps(id);
    }

    return (
        <StepsContext.Provider value={{steps, setSteps, changeStep}}>
            {props.children}
        </StepsContext.Provider>
    )
}

export default StepsContextProvider;