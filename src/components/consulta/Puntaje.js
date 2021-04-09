import React, {Component} from 'react'

class Puntaje extends Component {

    state = {

    }

    handleChange = (e) => {

    }

    handleSubmit = (e) => {

    }

    componentDidMount() {
        
        const M = window.M;
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('select');
            var instances = M.FormSelect.init(elems, {});
          });
    }
    
    

    render(){
        
        return(
            <div className="section">
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                                          
                        <div className="input-field col s6">
                            <select id="tipo" name="" className="validate" required onChange={this.handleChange}>
                                <option value="" disabled selected>Escoje una opción</option>
                                <option value="Arroz">Arroz</option>
                                <option value="Papa">Papa</option>
                            </select>
                            <label>Tipo de Cultivo*</label>
                        </div>
                        <div className="input-field col s6">
                            <select id="tipo" name="" className="validate" required>
                                <option value="" disabled selected>Escoje una opción</option>
                                <option value="Arroz Secano">Arroz Secano</option>
                                <option value="Arroz Riego">Arroz Riego</option>
                            </select>
                            <label>Sistema Productivo*</label>
                        </div>
                                          
                                         
                    </div>
                    <div className="step-actions">
                       <button className="waves-effect waves-dark btn blue next-step" type="submit">SIGUIENTE</button>
                    </div>
                   
                </form>
            </div>
            </div>
        )
    }
}

export default Puntaje