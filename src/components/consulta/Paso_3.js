import React from 'react';
import Map from './Map';

export default function Paso_3(props) {
    const { steps, changeStep } = props.stepState;

    return (
        <div>
            <li className="step">
               <div className="step-title waves-effect">Paso 3</div>
               <div className="step-content">
                  
                  <h2>Ubicación del cultivo</h2>
                   
                   <div className="row">
                     
                      <div className="input-field col s4">
                          <select onChange={e => props.entries.handleEntries(e)} id="" name="pais" className="validate" required>
                              <option value="">Escoje una opción</option>
                              <option value="Colombia">Colombia</option>
                          </select>
                          <label>País*</label>
                      </div>
                      <div className="input-field col s4">
                          <select onChange={e => props.entries.handleEntries(e)} id="" name="departamento" className="validate" required>
                              <option value="" >Escoje una opción</option>
                              <option value="Antioquia">Antioquia</option>
                          </select>
                          <label>Departamento*</label>
                      </div>
                      <div className="input-field col s4">
                          <select onChange={e => props.entries.handleEntries(e)} id="" name="municipio" className="validate" required>
                              <option value="">Escoje una opción</option>
                              <option value="Concordia">Concordia</option>
                          </select>
                          <label>Municipio*</label>
                      </div>
                      <div className="input-field col s4">
                          <select onChange={e => props.entries.handleEntries(e)} id="" name="in_id_vereda" className="validate" required>
                              <option value="">Escoje una opción</option>
                              <option value="17088024">Vereda 1</option>
                          </select>
                          <label htmlFor="vereda">Vereda</label>
                      </div>
                      <div className="input-field col s8">
                          <input onKeyUp={e => props.entries.handleEntries(e)} id="" type="text" name="direccion" className="validate" required />
                          <label htmlFor="direccion">Dirección</label>
                      </div>
                   </div>

                   <Map />

                   <br/>
                  
                  <div className="step-actions">
                  <button id="2" onClick={e => changeStep(e)} className="waves-effect waves-dark btn-flat previous-step">ATRÁS</button>
                     <button className="waves-effect waves-dark btn blue next-step">SIGUIENTE</button>
                  </div>
               </div>
            </li>
        </div>
    )
}
