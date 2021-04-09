
const initState = {
    consultas: [
        {
            nombre: 'Juan',
            tipoCultivo: 'Arroz',
            sistemaProductivo: 'Arroz Secano',
            calificacion: 'AAA',
            documento: 23456789,
            area: 23
        },
        {
            nombre: 'Pedro',
            tipoCultivo: 'Arroz',
            sistemaProductivo: 'Arroz Secano',
            calificacion: 'AAA',
            documento: 23456789,
            area: 23
        },
        {
            nombre: 'Luis',
            tipoCultivo: 'Arroz',
            sistemaProductivo: 'Arroz Secano',
            calificacion: 'AAA',
            documento: 23456789,
            area: 23
        }
    ]
}

const historiaReducer = (state = initState, action) => {
    return state
}

export default historiaReducer