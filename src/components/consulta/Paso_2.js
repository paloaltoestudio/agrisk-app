import React from 'react'
import QuestionRice from './QuestionRice';
import QuestionBanana from './QuestionBanana';
import QuestionCorn from './QuestionCorn';

export default function Paso_2(props) {
    const { steps, changeStep } = props.stepState;

    const currentProductive = props.entries.entries.filter(ent => ent.nombre == 'in_id_sistema_productivo')

    return (
        <div>
            <li className="step">
                                    <div className="step-title waves-effect">Paso 2</div>
                                    <div className="step-content">
                                      
                                      <h2>Diagnóstico del cultivo</h2>

                                      <QuestionRice entries={props.entries} currentProductive={currentProductive} />

                                      <QuestionBanana entries={props.entries} currentProductive={currentProductive} />

                                      <QuestionCorn entries={props.entries} currentProductive={currentProductive} />
                                       
                                       <div className="step-actions">
                                          <button id="1" onClick={e => changeStep(e)} className="waves-effect waves-dark btn-flat previous-step">ATRÁS</button>
                                          <button id="3" onClick={e => changeStep(e)} className="waves-effect waves-dark btn blue next-step" type="submit">SIGUIENTE</button>
                                       </div>
                                    </div>
                                 </li>
        </div>
    )
}
