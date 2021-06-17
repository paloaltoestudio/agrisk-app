import React from 'react';
import TopNav from './components/layout/TopNav';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Link} from 'react-router-dom'
import ConsultarPuntaje from './components/consulta/ConsultarPuntaje';
import Paso_3 from './components/consulta/Paso_3';
import Calificacion from './components/consulta/Calificacion';
import Historial from './components/Historial';
import SideNav from './components/layout/SideNav';
import Footer from './components/layout/Footer';
import './style.scss';
import StepsContextProvider from './components/contexts/StepsContext';
import EntriesContextProvider from './components/contexts/EntriesContext';
import SignContextProvider from './components/contexts/SignContext';

function App() {
  return (
    <BrowserRouter>
    <StepsContextProvider>
      <EntriesContextProvider>
        <SignContextProvider>
        <div className="App">
          
          <div className="wrapper_row row">
            <div className="sidebar_wrapper col s3">
              <SideNav />
            </div>

            <div className="topnav_col col s9 offset-s3">
              <div className="topnav_wrapper">
                <TopNav/>
              </div>
            </div>

            
            <div className="content_col col s9 offset-s3 grey lighten-5">
              <div className="container-fluid">
                <Route exact path="/" component={ConsultarPuntaje}/>
                <Route exact path="/paso3" component={Paso_3}/>
                <Route exact path="/calificacion" component={Calificacion}/>
                <Route exact path="/historial" component={Historial}/>
                <Route path="/reporte" component={Historial} />
              </div>
            </div>
            

          </div>
          
        </div>

    <Footer/>
      </SignContextProvider>
      </EntriesContextProvider>
    </StepsContextProvider>

    </BrowserRouter>
  );
}

export default App;
