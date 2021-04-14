import React, { Component } from 'react';

export class Lista extends Component {

    render() {
        const { historial } = this.props;

        return (
            <div className="section">
                <h1>Reporte de Consultas</h1>
                <table className="striped">
                    <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Documento</th>
                        <th>Tipo de Cultivo</th>
                        <th>Sistema Productivo</th>
                        <th>Área (mt <sup>2</sup>)</th>
                    </tr>
                    </thead>
                    <tbody>
                        {historial && historial.map((info, i) => {
                            return (
                            <tr key={i}>
                            <td>{info.nombre}</td>
                            <td>{info.documento}</td>
                            <td>{info.tipoCultivo}</td>
                            <td>{info.sistemaProductivo}</td>
                            <td>{info.area}</td>
                            </tr>
                            )
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        historial: state.historial.consultas
    }
}

export default Lista;
