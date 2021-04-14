import React, {useEffect, useContext} from 'react';

export default function Paso_1(props) {
    const { steps, changeStep } = props.stepState;

    return (
        <div className="step">
            
            <div className="step-title waves-effect">Paso 1</div>
                <div className="step-content">
                  
                  <h2>Información del cultivo</h2>
                  <form>
                    <div className="row">
                    
                        <div className="input-field col s6">
                            <select onChange={e => props.entries.handleEntries(e)} name="tipoCultivo" className="validate" required>
                                <option value="">Escoje una opción</option>
                                <option value="Arroz">Arroz</option>
                                <option value="Papa">Papa</option>
                            </select>
                            <label>Tipo de Cultivo*</label>
                        </div>
                        <div className="input-field col s6">
                            <select onChange={e => props.entries.handleEntries(e)} name="in_id_sistema_productivo" className="validate" required>
                                <option value="">Escoje una opción</option>
                                <option value="1">Arroz Secano</option>
                                <option value="10">Arroz Riego</option>
                            </select>
                            <label>Sistema Productivo*</label>
                        </div>
                        
                        
                    </div>
                    <div className="step-actions">
                        <button id='2' onClick={e => changeStep(e) } className="waves-effect waves-dark btn blue next-step">SIGUIENTE</button>
                        {/* <button id='2' onClick={props.sign} className="waves-effect waves-dark btn blue next-step">SIGUIENTE</button> */}
                    </div>
                   </form>
            </div>
        </div>
    )
}
