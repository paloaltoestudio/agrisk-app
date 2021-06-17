import React from 'react'
import {NavLink} from 'react-router-dom'

export default function SignedInLinks() {
    return (
        <ul className="right">
            <li><NavLink to="/">Cerrar Sesión</NavLink></li>
        </ul>
    )
}
