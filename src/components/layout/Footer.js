import React from 'react'

export default function Footer() {

    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer>
            <p className="center">Todos los derechos reservados - AG Risk {year}</p>
        </footer>
    )
}
