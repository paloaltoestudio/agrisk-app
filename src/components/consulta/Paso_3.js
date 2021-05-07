import React, {useContext, useEffect, useState} from 'react';
import Map from './Map';
import { SignContext } from '../contexts/SignContext';

export default function Paso_3(props) {
    const { steps, changeStep } = props.stepState ? props.stepState : '3';

    const [loader, setLoader] = useState(false)

    const { token, sign, session, entriesResponse, createSession, sendUpdate, getEntries, isReady } = useContext(SignContext);

    const handleSubmit = e => {
        e.preventDefault();
        setLoader(true)
        console.log(props.entries.entries)
        sendUpdate(props.entries.entries)
    }

    useEffect(() => {
        if(isReady){
            setLoader(false)
            changeStep(4)
        } 
    }, [isReady])

    
    
    return (

        <div>

        {loader && 
        
            <div className="loader">
                <h2>Consultando Calificación</h2>
                <img src="/images/loader.gif" />
            </div> 
        
        }


        {!loader &&  (

            <div className="step">
               <div className="step-content">
                  
                  <h2>Ubicación del cultivo</h2>

                  <form id="4" onSubmit={(e) => handleSubmit(e)}>
                   
                   <div className="row">
                     
                      <div className="input-field col s4">
                          <select onChange={e => props.entries.handleEntries(e)} id="pais" className="validate" required>
                              <option value="">Escoje una opción</option>
                              <option value="Colombia">Colombia</option>
                          </select>
                          <label>País*</label>
                      </div>
                      <div className="input-field col s4">
                          <select onChange={e => props.entries.handleEntries(e)} id="departamento" className="validate" required>
                              <option value="" >Escoje una opción</option>
                              <option value="Antioquia">Antioquia</option>
                              <option value="Caldas">Caldas</option>
                              <option value="Meta">Meta</option>
                          </select>
                          <label>Departamento*</label>
                      </div>
                      <div className="input-field col s4">
                          <select onChange={e => props.entries.handleEntries(e)} id="municipio" className="validate" required>
                              <option value="">Escoje una opción</option>
                              <option value="Belalcázar">Belalcázar</option>
                              <option value="Carepa">Carepa</option>
                              <option value="Restrepo">Restrepo</option>
                          </select>
                          <label>Municipio*</label>
                      </div>
                      <div className="input-field col s4">
                          <select onChange={e => props.entries.handleEntries(e)} id="in_id_vereda" className="validate" required>
                              <option value="">Escoje una opción</option>
                              <option value="05147008">Carepita</option>
                              <option value="17088024">La Turquesa</option>
                              <option value="50606014">San Jorge</option>
                          </select>
                          <label htmlFor="vereda">Vereda</label>
                      </div>
                      <div className="input-field col s8">
                          <input onKeyUp={e => props.entries.handleEntries(e)} id="direccion" type="text" className="validate" required />
                          <label htmlFor="direccion">Dirección</label>
                      </div>
                   </div>

                   <Map />

                   <br/>
                  
                  <div className="step-actions">
                  <button id="2" onClick={e => changeStep(e.target.id)} className="waves-effect waves-dark btn-flat previous-step">ATRÁS</button>
                     <button className="waves-effect waves-dark btn blue next-step">SIGUIENTE</button>
                  </div>
                  </form>
               </div>
               
            </div>
        )}

        </div>
    )
}
