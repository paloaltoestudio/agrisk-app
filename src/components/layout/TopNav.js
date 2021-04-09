import React from 'react'
import SignedInLinks from './SignedInLinks';

export default function TopNav() {
    return (
        <nav className="nav-wrapper">
          <div className="container-fluid">
             <div className="top_left left">
                 <a href="#"><i className="large material-icons left">person_pin</i> Pedro <i className="large material-icons right">expand_more</i></a>
                 <span>$50.000</span>
             </div>
              
              <ul className="top_right right">
                 <li><a href="">¿Necesitas ayuda?</a></li>
                  <li className="light"><a href="/">Cerrar Sesión <i className="large material-icons right">exit_to_app</i></a></li>
              </ul>
          </div>
        </nav>
    )
}



