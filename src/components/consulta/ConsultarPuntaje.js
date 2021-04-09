import React, { Component } from 'react'
import MStepper from 'materialize-stepper'


class ConsultarPuntaje extends Component {

    state = {
        tipoCultivo: '',
        sistemaProductivo: ''
    }
    
    componentDidMount(){

        
        var stepper = document.querySelector('.stepper');

        
        
        var stepperInstace = new window.MStepper(stepper, {
            // Default active step.
            firstActive: 0,
            // Allow navigation by clicking on the next and previous steps on linear steppers.
            linearStepsNavigation: true,
            // Auto focus on first input of each step.
            autoFocusInput: false,
            // Set if a loading screen will appear while feedbacks functions are running.
            showFeedbackPreloader: true,
            // Auto generation of a form around the stepper.
            autoFormCreation: false,
            // Function to be called everytime a nextstep occurs. It receives 2 arguments, in this sequece: stepperForm, activeStepContent.
            validationFunction: defaultValidationFunction, // more about this default functions below
            // Enable or disable navigation by clicking on step-titles
            stepTitleNavigation: true,
            // Preloader used when step is waiting for feedback function. If not defined, Materializecss spinner-blue-only will be used.
            feedbackPreloader: '<div class="spinner-layer spinner-blue-only">...</div>'
        })

        function defaultValidationFunction (stepperForm, activeStepContent) {
             var inputs = activeStepContent.querySelectorAll('input, textarea, select');
             for (let i = 0; i < inputs.length; i++) if (!inputs[i].checkValidity()) return false;
             return true;
        }

        const M = window.M;
        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems, {});
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
        console.log(this.state);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        console.log(this.state);
    }

    render() {
        return (
            <div className="section">
                <header>
                      <h1 className="center">CONSULTA EL PERFIL DEL PROYECTO</h1>
                      <h2 className="center">EN 3 SIMPLES PASOS</h2>
                </header>

                <div className="card pasos z-depth-3">
                      <div className="card-content">
                          {/* <form onSubmit={this.handleSubmit}> */}
                              <ul className="stepper linear">
                                 
                                 <li className="step">
                                    <div className="step-title waves-effect">Paso 1</div>
                                    <div className="step-content">
                                      
                                      <h2>Información del cultivo</h2>
                                      <form onSubmit={this.handleSubmit}>
                                       <div className="row">
                                       
                                           <div className="input-field col s6">
                                               <select id="tipo" name="tipoCultivo" className="validate" required onChange={this.handleChange}>
                                                   <option value="" disabled selected>Escoje una opción</option>
                                                   <option value="Arroz">Arroz</option>
                                                   <option value="Papa">Papa</option>
                                               </select>
                                               <label>Tipo de Cultivo*</label>
                                           </div>
                                           <div className="input-field col s6">
                                               <select id="tipo" name="sistemaProductivo" className="validate" required onChange={this.handleChange}>
                                                   <option value="" disabled selected>Escoje una opción</option>
                                                   <option value="Arroz Secano">Arroz Secano</option>
                                                   <option value="Arroz Riego">Arroz Riego</option>
                                               </select>
                                               <label>Sistema Productivo*</label>
                                           </div>
                                           
                                          
                                       </div>
                                       <div className="step-actions">
                                          <button className="waves-effect waves-dark btn blue">Enviar</button>
                                          <button className="waves-effect waves-dark btn blue next-step">SIGUIENTE</button>
                                       </div>
                                       </form>
                                    </div>
                                 </li>
                                 
                                 <li className="step">
                                    <div className="step-title waves-effect">Paso 2</div>
                                    <div className="step-content">
                                      
                                      <h2>Diagnóstico del cultivo</h2>
                                      
                                       <div className="row">
                                           
                                           <div className="input-field col s12">
                                               <h3>Seleccione cada tipo de Diagnóstico para responder las preguntas correspondientes</h3>
                                           </div>
                                           
                                           <div className="input-field col s6">
                                               <span>
                                                   <strong>1. ¿Qué densidad de siembra tiene la finca?</strong> <br/>
                                                   (Alto >5.000Pl/ha, Medio >3.000Pl/ha, Bajo el resto)
                                            </span>
                                               <select id="tipo" name="" className="validate" required>
                                                   <option value="" disabled selected>Escoje una opción</option>
                                                   <option value="Alto">Alto</option>
                                                   <option value="Medio">Medio</option>
                                                   <option value="Bajo">Bajo</option>
                                               </select>
                                           </div>
                                           
                                           <div className="input-field col s6">
                                               <span>
                                                   2.¿Qué porcentaje de la finca tiene el cultivo en renovación? <br/>
                                                  (Alto >40%, medio 20-40%, Bajo &#60;20%)
                                            </span>
                                               <select id="tipo" name="" className="validate" required>
                                                   <option value="" disabled selected>Escoje una opción</option>
                                                   <option value="Alto">Alto</option>
                                                   <option value="Medio">Medio</option>
                                                   <option value="Bajo">Bajo</option>
                                               </select>
                                           </div>
                                           
                                           <div className="input-field col s6">
                                               <span>
                                                  3.¿Utiliza sistema de riego para la mayor parte del área cultivada?
                                            </span>
                                               <select id="tipo" name="" className="validate" required>
                                                   <option value="" disabled selected>Escoje una opción</option>
                                                   <option value="Siempre">Siempre</option>
                                                   <option value="Casi Siempre">Casi Siempre</option>
                                                   <option value="Algunas Veces">Algunas Veces</option>
                                                   <option value="Casi Nunca">Casi Nunca</option>
                                                   <option value="Nunca">Nunca</option>
                                               </select>
                                           </div>
                                           
                                           <div className="input-field col s6">
                                               <span>
                                                  4.¿Cuál es el tipo de suelo que más abunda en el cultivo?
                                            </span>
                                               <select id="tipo" name="" className="validate" required>
                                                   <option value="" disabled selected>Escoje una opción</option>
                                                   <option value="Acrilloso">Acrilloso</option>
                                                   <option value="Franco Acrilloso">Franco Acrilloso</option>
                                                   <option value="Franco">Franco</option>
                                                   <option value="Franco Arenoso">Franco Arenoso</option>
                                                   <option value="Arenoso">Arenoso</option>
                                               </select>
                                           </div>
                                       </div>
                                       <div className="step-actions">
                                          <button className="waves-effect waves-dark btn blue next-step" type="submit">SIGUIENTE</button>
                                       </div>
                                    </div>
                                 </li>
                                 
                                 <li className="step">
                                    <div className="step-title waves-effect">Paso 3</div>
                                    <div className="step-content">
                                       
                                       <h2>Ubicación del cultivo</h2>
                                        
                                        <div className="row">
                                          
                                           <div className="input-field col s4">
                                               <select id="tipo" name="" className="validate" required>
                                                   <option value="" disabled selected>Escoje una opción</option>
                                                   <option value="Colombia">Colombia</option>
                                               </select>
                                               <label>País*</label>
                                           </div>
                                           <div className="input-field col s4">
                                               <select id="tipo" name="" className="validate" required>
                                                   <option value="" disabled selected>Escoje una opción</option>
                                                   <option value="Antioquia">Antioquia</option>
                                               </select>
                                               <label>Departamento*</label>
                                           </div>
                                           <div className="input-field col s4">
                                               <select id="tipo" name="" className="validate" required>
                                                   <option value="" disabled selected>Escoje una opción</option>
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
                                          <button className="waves-effect waves-dark btn-flat previous-step">ATRÁS</button>
                                          <button className="waves-effect waves-dark btn blue next-step">SIGUIENTE</button>
                                       </div>
                                    </div>
                                 </li>
                                 
                              </ul>
                          {/* </form> */}
                      </div>
                  </div>
            </div>
        )
    }
}

export default ConsultarPuntaje