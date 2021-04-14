import React from 'react'

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
                          <select id="tipo" name="" className="validate" required>
                              <option value="" disabled>Escoje una opción</option>
                              <option value="Colombia">Colombia</option>
                          </select>
                          <label>País*</label>
                      </div>
                      <div className="input-field col s4">
                          <select id="tipo" name="" className="validate" required>
                              <option value="" disabled>Escoje una opción</option>
                              <option value="Antioquia">Antioquia</option>
                          </select>
                          <label>Departamento*</label>
                      </div>
                      <div className="input-field col s4">
                          <select id="tipo" name="" className="validate" required>
                              <option value="" disabled>Escoje una opción</option>
                              <option value="Concordia">Concordia</option>
                          </select>
                          <label>Municipio*</label>
                      </div>
                      <div className="input-field col s4">
                          <input id="vereda" type="text" name="" className="validate" required />
                          <label htmlFor="vereda">Vereda</label>
                      </div>
                      <div className="input-field col s8">
                          <input id="direccion" type="text" name="" className="validate" required />
                          <label htmlFor="direccion">Dirección</label>
                      </div>
                   </div>

                  
                  
                  <div className="step-actions">
                  <button id="2" onClick={e => changeStep(e)} className="waves-effect waves-dark btn-flat previous-step">ATRÁS</button>
                     <button className="waves-effect waves-dark btn blue next-step">SIGUIENTE</button>
                  </div>
               </div>
            </li>
        </div>
    )
}
