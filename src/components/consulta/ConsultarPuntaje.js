import React, { useEffect, useState, useContext, createRef } from 'react';
import M from 'materialize-css';
import Paso_1 from './Paso_1';
import Paso_2 from './Paso_2';
import Paso_3 from './Paso_3';
import Calificacion from './Calificacion';
import { StepsContext } from '../contexts/StepsContext';
import { EntriesContext } from '../contexts/EntriesContext';
import { SignContext } from '../contexts/SignContext';
import { motion } from 'framer-motion'; 

const ConsultarPuntaje = () => {
    // Get steps state from Steps Context
    const { steps, changeStep } = useContext(StepsContext);

    //Get entries context
    const { entries, handleEntries } = useContext(EntriesContext);

    const { token, sign, session, entriesResponse, createSession, sendUpdate, getEntries } = useContext(SignContext);
    
    console.log(session)
    console.log(entriesResponse)

    

    useEffect(() => {
        M.AutoInit();
    }, [steps])

    
console.log(steps)

    return (
        <div className="section">
            <header>
                  <h1 className="center">CONSULTA EL PERFIL DEL PROYECTO</h1>
                  <h2 className="center">EN 4 SIMPLES PASOS</h2>
            </header>

            <ul className="steps_list">
                <li className={steps >= 1 ? 'active' : ''}>
                    {steps > 1  
                    ? <span class="material-icons">done</span>
                    : <span>1</span>
                    }
                    Información del Productor
                </li>
                <li className={steps >= 2 ? 'active' : ''}>
                    {steps > 2 
                    ? <span class="material-icons">done</span>
                    : <span>2</span>
                    }
                    Información del Cultivo
                </li>
                <li className={steps >= 3 ? 'active' : ''}>
                    {steps > 3 
                    ? <span class="material-icons">done</span>
                    : <span>3</span>
                    }
                    Ubicación del Cultivo
                </li>
                <li className={steps >= 4 ? 'active' : ''}>
                    {steps == 4
                    ? <span class="material-icons">done</span>
                    : <span>4</span>
                    }
                    Calificación
                </li>
            </ul>

           
                        { steps == '1' && (
                            <motion.div 
                            initial={{ opacity: 0, x: 200 }}
                            animate={{ opacity: 1, x: 0 }} 
                            transition={{ type: 'spring', stiffness: 90 }}
                            className="card pasos z-depth-3">
                             <div className="card-content">
                                <Paso_1 stepState={{steps, changeStep}} entries={{handleEntries}} />
                            </div>
                             </motion.div>
                        )}

                        { steps == '2' && (
                             <motion.div 
                             initial={{ opacity: 0, x: 200 }}
                             animate={{ opacity: 1, x: 0 }} 
                             transition={{ type: 'spring', stiffness: 90 }}
                             className="card pasos z-depth-3">
                              <div className="card-content">
                            <Paso_2 stepState={{steps, changeStep}} entries={{entries, handleEntries}} />
                            </div>
                             </motion.div>
                        )}

                        { steps == '3' && (
                            <motion.div 
                            initial={{ opacity: 0, x: 200 }}
                            animate={{ opacity: 1, x: 0 }} 
                            transition={{ type: 'spring', stiffness: 90 }}
                            className="card pasos z-depth-3">
                             <div className="card-content">
                            <Paso_3 stepState={{steps, changeStep}} entries={{entries, handleEntries}} />
                            </div>
                             </motion.div>
                        )}

                        { steps == '4' && (
                             <motion.div 
                             initial={{ opacity: 0, x: 200 }}
                             animate={{ opacity: 1, x: 0 }} 
                             transition={{ type: 'spring', stiffness: 90 }}
                             className="card pasos z-depth-3">
                              <div className="card-content">
                            <Calificacion />
                            </div>
                             </motion.div>
                        )}
                 
        </div>
    )
}

export default ConsultarPuntaje


