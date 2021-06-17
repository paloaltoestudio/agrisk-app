import React, {Fragment} from 'react'

export default function QuestionRice(props) {
    return (
        <div>
        { props.currentProductive[0].valor == '12' && (

            <Fragment>
            <div className="row">
                 
                <div className="input-field col s12">
                    <h3>Seleccione cada tipo de Diagnóstico para responder las preguntas correspondientes</h3>
                </div>
                
                <div className="input-field col s6">
                     <span>
                         <strong>1. ¿El cultivo posee semilla certificada proveniente de una casa comercial?</strong>
                  </span>
                     <select onChange={e => props.entries.handleEntries(e)} id="tipo" id="respuesta_1" className="validate" required>
                         <option value="">Escoje una opción</option>
                         <option value="Sí">Sí</option>
                         <option value="No">No</option>
                     </select>
                 </div>
                 
                 <div className="input-field col s6">
                     <span>
                         2.¿El riego es suficiente para todo el área cultivada?
                  </span>
                     <select onChange={e => props.entries.handleEntries(e)} id="tipo" id="respuesta_2" className="validate" required>
                         <option value="">Escoje una opción</option>
                         <option value="Siempre">Siempre</option>
                         <option value="Casi Siempre">Casi Siempre</option>
                         <option value="Nunca">Nunca</option>
                     </select>
                 </div>
            </div>

            <div className="row">
                
            <div className="input-field col s6">
                      <span>
                         3.¿El plan de fertilización se hace a partir de analisis de suelos?
                   </span>
                      <select onChange={e => props.entries.handleEntries(e)} id="tipo" id="respuesta_3" className="validate" required>
                          <option value="">Escoje una opción</option>
                          <option value="Sí">Sí</option>
                          <option value="No">No</option>
                      </select>
                  </div>
                  
                  <div className="input-field col s6">
                      <span>
                         4.¿Cuenta con asistencia técnica?
                   </span>
                      <select onChange={e => props.entries.handleEntries(e)} id="tipo" id="respuesta_4" className="validate" required>
                          <option value="">Escoje una opción</option>
                          <option value="Sí">Sí</option>
                          <option value="No">No</option>
                      </select>
                  </div>
            </div>

            <div className="row">
                <div className="input-field col s6">
                      <span>
                         5.¿El lote ha tenido más de un ciclo de siembra?
                   </span>
                      <select onChange={e => props.entries.handleEntries(e)} id="tipo" id="respuesta_5" className="validate" required>
                          <option value="">Escoje una opción</option>
                          <option value="No">No</option>
                      </select>
                  </div>
                <div className="input-field col s6">
                      <span>
                         6.¿Cuál es la principal fuente de agua de riego?
                   </span>
                      <select onChange={e => props.entries.handleEntries(e)} id="tipo" id="respuesta_6" className="validate" required>
                          <option value="">Escoje una opción</option>
                          <option value="Distrito de riego">Distrito de riego</option>
                      </select>
                  </div>
            </div>

            <div className="row">
                 <div className="input-field col s6">
                      <span>
                         7.¿El sistema de drenaje es adecuado y suficiente para el cultivo?
                   </span>
                      <select onChange={e => props.entries.handleEntries(e)} id="tipo" id="respuesta_7" className="validate" required>
                          <option value="">Escoje una opción</option>
                          <option value="Sí">Sí</option>
                      </select>
                  </div>
                 <div className="input-field col s6">
                      <span>
                         8.¿Qué tipo de pendiente representa a la mayor parte del cultivo? (Alto > 40%, Medio > 20%, Bajo el resto)
                   </span>
                      <select onChange={e => props.entries.handleEntries(e)} id="tipo" id="respuesta_8" className="validate" required>
                          <option value="">Escoje una opción</option>
                          <option value="Alto">Alto</option>
                      </select>
                  </div>
            </div>
        </Fragment>

        ) }
        </div>
    )
}
