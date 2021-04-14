import React, { useEffect, useState, useContext } from 'react';
import M from 'materialize-css';
import Paso_1 from './Paso_1';
import Paso_2 from './Paso_2';
import Paso_3 from './Paso_3';
import Calificacion from './Calificacion';
import { StepsContext } from '../contexts/StepsContext';
import { EntriesContext } from '../contexts/EntriesContext';


const ConsultarPuntaje = () => {
    const [token, setToken] = useState('');

    const [session, setSession] = useState('');

    // Get steps state from Steps Context
    const { steps, changeStep } = useContext(StepsContext);

    //Get entries context
    const { entries, handleEntries } = useContext(EntriesContext);

    const sign = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "email": "demos@agrisk.com.co",
          "password": "Demos123!"
        });
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("https://pre-prod.agrisk.com.co/agriskapi/api/v1/Auth/SignIn", requestOptions)
          .then(response => response.json())
          .then(result => 
            {
                console.log(result.access_token);
                setToken(result.access_token)
            })
          .catch(error => console.log('error', error));
        
    }
    
    useEffect(() => {
        if(token){
            var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${token}`);
    
            myHeaders.append("Content-Type", "application/json");

            var raw = '';

            var requestOptions = {
                method: 'PUT',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch("https://pre-prod.agrisk.com.co/agriskapi/api/v1/Session/Create?idBook=01FM5IQQL6KHWFQWUFI5E3YK3H7B4N63I4&persistChanges\n=false", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result.id);
                setSession(result.id)
            })
            .catch(error => console.log('error', error));
        }
        
    }, [token])


    useEffect(() => {
        if(session){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify([
          {
            "nombre": "in_id_vereda",
            "valor": "05147008",
            "posicionValor": 6
          },
          {
            "nombre": "in_id_sistema_productivo",
            "valor": "10",
            "posicionValor": 6
          },
          {
            "nombre": "in_rendimiento_cultivo",
            "valor": "35",
            "posicionValor": 6
          },
          {
            "nombre": "in_costos_produccion_cultivo",
            "valor": "6200000",
            "posicionValor": 6
          },
          {
            "nombre": "in_area_cultivo",
            "valor": "100",
            "posicionValor": 6
          },
          {
            "nombre": "respuesta_1",
            "valor": "Sí",
            "posicionValor": 6
          },
          {
            "nombre": "respuesta_2",
            "valor": "Antena",
            "posicionValor": 6
          },
          {
            "nombre": "respuesta_3",
            "valor": "Siempre",
            "posicionValor": 6
          },
          {
            "nombre": "respuesta_4",
            "valor": "Casi siempre",
            "posicionValor": 6
          },
          {
            "nombre": "respuesta_5",
            "valor": "Reservorio",
            "posicionValor": 6
          },
          {
            "nombre": "respuesta_6",
            "valor": "Sí",
            "posicionValor": 6
          },
          {
            "nombre": "respuesta_7",
            "valor": "Sí",
            "posicionValor": 6
          }
        ]);

        var requestOptions = {
          method: 'PUT',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        fetch(`https://pre-prod.agrisk.com.co/agriskapi/api/v1/ModelScoring/UpdateEntries?idBook=01FM5IQQL6KHWFQWUFI5E3YK3H7B4N63I4&sessionId=${session}&range=A1%3AI21&nameSheet=Entradas`, requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));

        }
    }, [session, token])

    

    useEffect(() => {
        M.AutoInit();
    }, [steps])

    


    return (
        <div className="section">
            <header>
                  <h1 className="center">CONSULTA EL PERFIL DEL PROYECTO</h1>
                  <h2 className="center">EN 3 SIMPLES PASOS</h2>
            </header>
            <div className="card pasos z-depth-3">
                  <div className="card-content">
                        { steps == 'step_1' && (
                            <Paso_1 stepState={{steps, changeStep}} sign={sign} entries={{handleEntries}} />
                        )}

                        { steps == 'step_2' && (
                            <Paso_2 stepState={{steps, changeStep}} entries={{entries, handleEntries}} />
                        )}

                        { steps == 'step_3' && (
                            <Paso_3 stepState={{steps, changeStep}} entries={{entries, handleEntries}} />
                        )}
                        
                  </div>
              </div>
        </div>
    )
}


export default ConsultarPuntaje
