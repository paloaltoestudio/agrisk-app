import React, {Fragment} from 'react'

export default function QuestionRice(props) {
    return (
        <div>
        { props.currentProductive[0].valor == '1' && (

            <Fragment>
                
            <div className="row">
                 
                <div className="input-field col s12">
                    <h3>Seleccione cada tipo de Diagnóstico para responder las preguntas correspondientes</h3>
                </div>
                
                <div className="input-field col s6">
                    <span>
                        <strong>1. ¿El cultivo posee semilla certificada proveniente de una casa comercial?</strong>
                 </span>
                    <select onChange={e => props.entries.handleEntries(e)} id="respuesta_1" className="validate" >
                        <option value="">Escoje una opción</option>
                        <option value="Sí">Sí</option>
                        <option value="No">No</option>
                    </select>
                </div>
                
                <div className="input-field col s6">
                    <span>
                        2.¿El riego es suficiente para todo el área cultivada? <br/><br/>
                 </span>
                    <select onChange={e => props.entries.handleEntries(e)} id="respuesta_2" className="validate" required>
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
                    <select onChange={e => props.entries.handleEntries(e)} id="respuesta_3" className="validate" >
                        <option value="">Escoje una opción</option>
                        <option value="Sí">Sí</option>
                        <option value="No">No</option>
                    </select>
                </div>
                
                <div className="input-field col s6">
                    <span>
                       4.¿Cuenta con asistencia técnica? <br/><br/>
                 </span>
                    <select onChange={e => props.entries.handleEntries(e)} id="respuesta_4" className="validate" required>
                        <option value="">Escoje una opción</option>
                        <option value="Sí">Sí</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <div className="input-field col s6">
                    <span>
                       5.¿Qué tipo de siembra utiliza? <br/><br/><br/>
                 </span>
                    <select onChange={e => props.entries.handleEntries(e)} id="respuesta_5" className="validate" required>
                        <option value="">Escoje una opción</option>
                        <option value="Mecanizada">Mecanizada</option>
                    </select>
                </div>
                <div className="input-field col s6">
                    <span>
                       6.¿Tiene disponibilidad de maquinaria garantizada para la cosecha? <br/><br/>
                 </span>
                    <select onChange={e => props.entries.handleEntries(e)} id="respuesta_6" className="validate" required>
                        <option value="">Escoje una opción</option>
                        <option value="Sí">Sí</option>
                    </select>
                </div>
                <div className="input-field col s6">
                    <span>
                       7.¿El lote ha tenido más de un ciclo de siembra? <br/><br/>
                 </span>
                    <select onChange={e => props.entries.handleEntries(e)} id="respuesta_7" className="validate" required>
                        <option value="">Escoje una opción</option>
                        <option value="Sí">Sí</option>
                    </select>
                </div>
                <div className="input-field col s6">
                    <span>
                       8.¿Cuál es la principal fuente de agua de riego? <br/><br/>
                 </span>
                    <select onChange={e => props.entries.handleEntries(e)} id="respuesta_8" className="validate" required>
                        <option value="">Escoje una opción</option>
                        <option value="Distrito de riego">Distrito de riego</option>
                    </select>
                </div>
                <div className="input-field col s6">
                    <span>
                       9.¿Qué tipo de pendiente representa a la mayor parte del cultivo? (Alto>20%, Medio >10%, Bajo el resto) <br/><br/>
                 </span>
                    <select onChange={e => props.entries.handleEntries(e)} id="respuesta_9" className="validate" required>
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
