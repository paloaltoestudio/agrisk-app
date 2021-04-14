import React, {Fragment} from 'react'

export default function QuestionRice(props) {
    return (
        <div>
        { props.currentProductive[0].valor == '10' && (

            <Fragment>
            <div className="row">
                 
                <div className="input-field col s12">
                    <h3>Seleccione cada tipo de Diagnóstico para responder las preguntas correspondientes</h3>
                </div>
                
                <div className="input-field col s6">
                                              <span>
                                                  <strong>1. ¿Tiene una densidad de siembra superior a 1500 plantas por hectárea?</strong>
                                           </span>
                                              <select onChange={e => props.entries.handleEntries(e)} id="tipo" name="respuesta_1" className="validate" required>
                                                  <option value="" disabled>Escoje una opción</option>
                                                  <option value="Sí">Sí</option>
                                                  <option value="No">No</option>
                                              </select>
                                          </div>
                                          
                                          <div className="input-field col s6">
                                              <span>
                                                  2.¿Qué tipo de amarre utiliza?
                                           </span>
                                              <select onChange={e => props.entries.handleEntries(e)} id="tipo" name="respuesta_2" className="validate" required>
                                                  <option value="" disabled>Escoje una opción</option>
                                                  <option value="Antena">Antena</option>
                                              </select>
                                          </div>
            </div>

            <div className="row">
                
            <div className="input-field col s6">
                                              <span>
                                                 3.¿Con qué frecuencia realiza mantenimientos a los canales de drenaje en caso de tenerlos (responda nunca sino los tiene)?
                                           </span>
                                              <select onChange={e => props.entries.handleEntries(e)} id="tipo" name="respuesta_3" className="validate" required>
                                                  <option value="" disabled>Escoje una opción</option>
                                                  <option value="Siempre">Siempre</option>
                                                  <option value="Casi Siempre">Casi Siempre</option>
                                                  <option value="Nunca">Nunca</option>
                                              </select>
                                          </div>
                                          
                                          <div className="input-field col s6">
                                              <span>
                                                 4.¿El riego es suficiente para todo el área cultivada?
                                           </span>
                                              <select onChange={e => props.entries.handleEntries(e)} id="tipo" name="respuesta_4" className="validate" required>
                                              <option value="" disabled>Escoje una opción</option>
                                                  <option value="Siempre">Siempre</option>
                                                  <option value="Casi Siempre">Casi Siempre</option>
                                                  <option value="Nunca">Nunca</option>
                                              </select>
                                          </div>
            </div>
        </Fragment>

        ) }
        </div>
    )
}
