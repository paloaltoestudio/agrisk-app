import React from 'react'
import QuestionRice from './QuestionRice';
import QuestionBanana from './QuestionBanana';
import QuestionCorn from './QuestionCorn';

export default function Paso_2(props) {
    const { steps, changeStep } = props.stepState;

    const currentProductive = props.entries.entries.filter(ent => ent.nombre == 'in_id_sistema_productivo');

    const handleSubmit = e => {
        e.preventDefault();
        changeStep(e.target.id)
    }

    return (
        <div className="step">
               <div className="step-content">
                 
                 <h2>Diagnóstico del cultivo</h2>

                 <form id="3" onSubmit={e => handleSubmit(e)}>
                    <QuestionRice entries={props.entries} currentProductive={currentProductive} handle={{handleSubmit, changeStep}} />

                    <QuestionBanana entries={props.entries} currentProductive={currentProductive} />

                    <QuestionCorn entries={props.entries} currentProductive={currentProductive} />

                    <div className="step-actions">
                        <button id="1" onClick={e => changeStep(e.target.id)} className="waves-effect waves-dark btn-flat previous-step">ATRÁS</button>
                        <button className="waves-effect waves-dark btn blue next-step" type="submit">SIGUIENTE</button>
                    </div>
                </form>
               </div>
        </div>
    )
}
