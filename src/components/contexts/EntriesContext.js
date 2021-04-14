import React, { createContext, useState } from 'react';

export const EntriesContext = createContext();

const EntriesContextProvider = props => {

    const fields = ['tipoCultivo', 'in_id_vereda', 'in_id_sistema_productivo', 'in_rendimiento_cultivo', 'in_costos_produccion_cultivo', 'in_area_cultivo', 'respuesta_1', 'respuesta_2', 'respuesta_3', 'respuesta_4', 'respuesta_5', 'respuesta_6','respuesta_7', 'respuesta_8', 'respuesta_9', 'respuesta_10'];

    const [ entries, setEntries ] = useState(
        fields.map(field => {
            return (
                {
                    nombre: field,
                    valor: '',
                    posicionvalor: 6
                }
            )
        })
    );

    const handleEntries = (e) => {

        const entryItem = entries.filter(entry => entry.nombre == e.target.name);

        entryItem.valor = e.target.value;

        setEntries(entries.map(entry => entry.nombre == e.target.name ? {...entry, valor: e.target.value } : {...entry}));
        console.log(entries)
    }

    return (
        <EntriesContext.Provider value={{entries, handleEntries}}>
            { props.children }
        </EntriesContext.Provider>
    )   
}

export default EntriesContextProvider;