import React from 'react';
import TopNav from './components/layout/TopNav';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Link} from 'react-router-dom'
import ConsultarPuntaje from './components/consulta/ConsultarPuntaje';
import Historial from './components/Historial';
import Puntaje from './components/consulta/Puntaje'
import SideNav from './components/layout/SideNav';
import Footer from './components/layout/Footer';
import './style.scss';

function App() {
  return (
    <BrowserRouter>
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
            {/* <Route exact path="/" component={Puntaje} /> */}
            <Route exact path="/historial" component={Historial}/>
            <Route path="/reporte" component={Historial} />
          </div>
        </div>

      </div>
      
    </div>

    <Footer/>

    </BrowserRouter>
  );
}

export default App;
