import React, {useEffect, useContext} from 'react';


export default function Paso_1(props) {
    const { steps, changeStep } = props.stepState;

    const handleSubmit = e => {
        e.preventDefault();
        changeStep(e.target.id) 
    }

    return (
        <div className="step"> 
                <div className="step-content">
                  
                  <h2>Información del cultivo</h2>
                  <form id="2" onSubmit={e => handleSubmit(e)}>
                    <div className="row">
                    
                        <div className="input-field col s6">
                            <select onChange={e => props.entries.handleEntries(e)} id="in_id_sistema_productivo" className="validate" required>
                                <option value="" >Tipo de Cultivo*</option>
                                <option value="1">Arroz</option>
                                <option value="10">Banano</option>
                                <option value="12">Maíz</option>
                            </select>
                        </div>

                        <div className="input-field col s6">
                            <label htmlFor="in_area_cultivo">Área de Cultivo* (en hectáreas)</label>
                            <input onChange={e => props.entries.handleEntries(e)} id="in_area_cultivo"  className="validate" required type="text"/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <label htmlFor="in_rendimiento_cultivo">Rendimiento*</label>
                            <input onChange={e => props.entries.handleEntries(e)} id="in_rendimiento_cultivo" className="validate" required type="text"/>
                        </div>
                        <div className="input-field col s6">
                            <label htmlFor="in_costos_produccion_cultivo">Costo de Producción*</label>
                            <input onChange={e => props.entries.handleEntries(e)} id="in_costos_produccion_cultivo" className="validate" required type="text"/>
                        </div>
                    </div>
                    <div className="step-actions">
                        <button className="waves-effect waves-dark btn blue next-step">SIGUIENTE</button>
                        {/* <button id='2' onClick={props.sign} className="waves-effect waves-dark btn blue next-step">SIGUIENTE</button> */}
                    </div>
                   </form>
            </div>

            

        </div>
    )
}
