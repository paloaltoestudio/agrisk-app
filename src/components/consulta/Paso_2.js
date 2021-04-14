import React from 'react'

export default function Paso_2(props) {
    const { steps, changeStep } = props.stepState;
    return (
        <div>
            <li className="step">
                                    <div className="step-title waves-effect">Paso 2</div>
                                    <div className="step-content">
                                      
                                      <h2>Diagnóstico del cultivo</h2>
                                      
                                       <div className="row">
                                           
                                           <div className="input-field col s12">
                                               <h3>Seleccione cada tipo de Diagnóstico para responder las preguntas correspondientes</h3>
                                           </div>
                                           
                                           <div className="input-field col s6">
                                               <span>
                                                   <strong>1. ¿Qué densidad de siembra tiene la finca?</strong> <br/>
                                                   (Alto >5.000Pl/ha, Medio >3.000Pl/ha, Bajo el resto)
                                            </span>
                                               <select onChange={e => props.entries.handleEntries(e)} id="tipo" name="respuesta_1" className="validate" required>
                                                   <option value="" disabled>Escoje una opción</option>
                                                   <option value="Alto">Alto</option>
                                                   <option value="Medio">Medio</option>
                                                   <option value="Bajo">Bajo</option>
                                               </select>
                                           </div>
                                           
                                           <div className="input-field col s6">
                                               <span>
                                                   2.¿Qué porcentaje de la finca tiene el cultivo en renovación? <br/>
                                                  (Alto >40%, medio 20-40%, Bajo &#60;20%)
                                            </span>
                                               <select onChange={e => props.entries.handleEntries(e)} id="tipo" name="respuesta_2" className="validate" required>
                                                   <option value="" disabled>Escoje una opción</option>
                                                   <option value="Alto">Alto</option>
                                                   <option value="Medio">Medio</option>
                                                   <option value="Bajo">Bajo</option>
                                               </select>
                                           </div>
                                           
                                           <div className="input-field col s6">
                                               <span>
                                                  3.¿Utiliza sistema de riego para la mayor parte del área cultivada?
                                            </span>
                                               <select onChange={e => props.entries.handleEntries(e)} id="tipo" name="respuesta_3" className="validate" required>
                                                   <option value="" disabled>Escoje una opción</option>
                                                   <option value="Siempre">Siempre</option>
                                                   <option value="Casi Siempre">Casi Siempre</option>
                                                   <option value="Algunas Veces">Algunas Veces</option>
                                                   <option value="Casi Nunca">Casi Nunca</option>
                                                   <option value="Nunca">Nunca</option>
                                               </select>
                                           </div>
                                           
                                           <div className="input-field col s6">
                                               <span>
                                                  4.¿Cuál es el tipo de suelo que más abunda en el cultivo?
                                            </span>
                                               <select onChange={e => props.entries.handleEntries(e)} id="tipo" name="respuesta_4" className="validate" required>
                                                   <option value="" disabled>Escoje una opción</option>
                                                   <option value="Acrilloso">Acrilloso</option>
                                                   <option value="Franco Acrilloso">Franco Acrilloso</option>
                                                   <option value="Franco">Franco</option>
                                                   <option value="Franco Arenoso">Franco Arenoso</option>
                                                   <option value="Arenoso">Arenoso</option>
                                               </select>
                                           </div>
                                       </div>
                                       <div className="step-actions">
                                          <button id="1" onClick={e => changeStep(e)} className="waves-effect waves-dark btn-flat previous-step">ATRÁS</button>
                                          <button id="3" onClick={e => changeStep(e)} className="waves-effect waves-dark btn blue next-step" type="submit">SIGUIENTE</button>
                                       </div>
                                    </div>
                                 </li>
        </div>
    )
}
