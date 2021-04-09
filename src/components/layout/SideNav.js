import React from 'react'
import {NavLink} from 'react-router-dom'

export default function SideNav() {
    return (
      
        <div className="sidebar z-depth-3">
          <div className="branding">
            <img src="images/agrisk_logo.jpg" alt="" />
          </div>
          <nav className="z-depth-0">
            <ul>
              <li><NavLink exact to="/"><i className="large material-icons left">av_timer</i>Consultar Puntaje</NavLink></li>
              <li><NavLink to="/historial"><i className="large material-icons left">search</i> Historial de Consultas</NavLink></li>
              <li><NavLink to="/reporte"><i className="large material-icons left">pie_chart</i> Reportes</NavLink></li>
            </ul>
          </nav>
        </div>
    )
}
