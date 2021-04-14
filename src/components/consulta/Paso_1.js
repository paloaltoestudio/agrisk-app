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
                            <select onChange={e => props.entries.handleEntries(e)} name="in_id_sistema_productivo" className="validate" required>
                                <option value="">Escoje una opción</option>
                                <option value="1">Arroz</option>
                                <option value="10">Banano</option>
                            </select>
                            <label>Tipo de Cultivo*</label>
                        </div>

                        <div className="input-field col s6">
                            <label>Área de Cultivo* (en hectáreas)</label>
                            <input onChange={e => props.entries.handleEntries(e)} name="in_area_cultivo" className="validate" required type="text"/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <label>Rendimiento*</label>
                            <input onChange={e => props.entries.handleEntries(e)} name="in_rendimiento_cultivo" className="validate" required type="text"/>
                        </div>
                        <div className="input-field col s6">
                            <label>Costo de Producción*</label>
                            <input onChange={e => props.entries.handleEntries(e)} name="in_costos_produccion_cultivo" className="validate" required type="text"/>
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
