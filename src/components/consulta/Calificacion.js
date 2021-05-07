import React, { useContext, useEffect, useState } from 'react'
import { SignContext } from '../contexts/SignContext';
import { motion, AnimatePresence } from 'framer-motion';
import { jsPDF } from "jspdf";

export default function Calificacion() { 

    const [isActive, setIsActive] = useState(false);

    const [scoreClass, setScoreClass] = useState('');

    const {entriesResponse, chart} = useContext(SignContext);
    
    const output_calificacion = entriesResponse.find(entry => entry.nombre == "output_calificacion");
    const output_calificacion_aptitud = entriesResponse.find(entry => entry.nombre == "output_calificacion_aptitud");
    const output_calificacion_amenazas = entriesResponse.find(entry => entry.nombre == "output_calificacion_amenazas");
    const output_calificacion_rendimiento = entriesResponse.find(entry => entry.nombre == "output_calificacion_rendimiento");
    const output_calificacion_costos = entriesResponse.find(entry => entry.nombre == "output_calificacion_costos");
    const pregunta_1 = entriesResponse.find(entry => entry.nombre == "pregunta_1");
    const pregunta_2 = entriesResponse.find(entry => entry.nombre == "pregunta_2");
    const pregunta_3 = entriesResponse.find(entry => entry.nombre == "pregunta_3");
    const pregunta_4 = entriesResponse.find(entry => entry.nombre == "pregunta_4");
    const pregunta_5 = entriesResponse.find(entry => entry.nombre == "pregunta_5");
    const pregunta_6 = entriesResponse.find(entry => entry.nombre == "pregunta_6");
    const pregunta_7 = entriesResponse.find(entry => entry.nombre == "pregunta_7");
    const pregunta_8 = entriesResponse.find(entry => entry.nombre == "pregunta_8");
    const pregunta_9 = entriesResponse.find(entry => entry.nombre == "pregunta_9");
    const pregunta_10 = entriesResponse.find(entry => entry.nombre == "pregunta_10");
    const output_calificacion_encuesta = entriesResponse.find(entry => entry.nombre == "output_calificacion_encuesta");
    const newDate = new Date();
    const monthIndex = Number(newDate.getMonth());
    const month = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const day = newDate.getDate();
    const year = newDate.getFullYear();
    const finalDate = month[monthIndex] + ' ' + day + ' de ' + year;

    const imgData = chart;

    useEffect(() => {
        if( entriesResponse && output_calificacion.valor[0] == 'A'){
            setScoreClass('score_green')
        } else if( entriesResponse && output_calificacion.valor[0] == 'B'){
            setScoreClass('score_orange')
        } else if( entriesResponse && output_calificacion.valor[0] == 'C'){
            setScoreClass('score_red')
        }
    }, [output_calificacion]);

    const Preview = ({isActive}) => {
        console.log(isActive)

        return(
            <motion.div 
               initial={{ opacity: 0, y: -200 }}
               animate={{ opacity: 1, y: 160 }} 
               transition={{ type: 'spring', stiffness: 90 }} 
               exit={{ opacity: 0, y: -10 }}
               className={isActive ? 'score_preview active' : 'score_preview'}
               >
                   <span className="close" onClick={() => setIsActive(false)}>Cerrar</span>

                    <p className="date"> 
                        {finalDate}
                    </p>
    
                    <p className="intro">En Seguros SURA queremos compartir el siguiente análisis sobre los principales factores de gestión de riesgo asociados a tu cultivo y la región donde se encuentra.</p>
    
                    <h3>Niveles de desarrollo por atributo</h3>
    
                    {imgData && (
                        <img className="chart" width="100%" src={`data:image/jpeg;base64,${imgData}`} />
                    )}
    
                    <h3>Aptitud</h3>
                    <p>{output_calificacion_aptitud.descriptor}</p>
    
                    <h3>Amenazas</h3>
                    <p>{output_calificacion_amenazas.descriptor}</p>
    
                    <h3>Rendimientos</h3>
                    <p>{output_calificacion_rendimiento.descriptor}</p>
    
                    <h3>Costos de producción</h3>
                    <p>{output_calificacion_costos.descriptor}</p>
    
                    <h3>Conocimiento del cultivo</h3>
                    {pregunta_1.descriptor && (
                        <div className="question">
                            <p>{pregunta_1.valor}</p>
                            <p>{pregunta_1.descriptor}</p>
                        </div>
                    )}
                    {pregunta_2.descriptor && (
                        <div className="question">
                            <p>{pregunta_2.valor}</p>
                            <p>{pregunta_2.descriptor}</p>
                        </div>
                    )}
                    {pregunta_3.descriptor && (
                        <div className="question">
                            <p>{pregunta_3.valor}</p>
                            <p>{pregunta_3.descriptor}</p>
                        </div>
                    )}
                    {pregunta_4.descriptor && (
                        <div className="question">
                            <p>{pregunta_4.valor}</p>
                            <p>{pregunta_4.descriptor}</p>
                        </div>
                    )}
                    {pregunta_5.descriptor && (
                        <div className="question">
                            <p>{pregunta_5.valor}</p>
                            <p>{pregunta_5.descriptor}</p>
                        </div>
                    )}
                    {pregunta_6.descriptor && (
                        <div className="question">
                            <p>{pregunta_6.valor}</p>
                            <p>{pregunta_6.descriptor}</p>
                        </div>
                    )}
                    {pregunta_7.descriptor && (
                        <div className="question">
                            <p>{pregunta_7.valor}</p>
                            <p>{pregunta_7.descriptor}</p>
                        </div>
                    )}
                    {pregunta_8.descriptor && (
                        <div className="question">
                            <p>{pregunta_8.valor}</p>
                            <p>{pregunta_8.descriptor}</p>
                        </div>
                    )}
                    {pregunta_9.descriptor && (
                        <div className="question">
                            <p>{pregunta_9.valor}</p>
                            <p>{pregunta_9.descriptor}</p>
                        </div>
                    )}
                    {pregunta_10.descriptor && (
                        <div className="question">
                            <p>{pregunta_10.valor}</p>
                            <p>{pregunta_10.descriptor}</p>
                        </div>
                    )}
                    
                    <p className="score_text">{output_calificacion_encuesta.descriptor}</p>
                        
                    <h3>Conclusiones</h3>
                    <p>{output_calificacion.descriptor}</p>
    
                    <div className="greetings">
                        <p>Cordialmente</p>
                        <p><strong>Equipo Seguros SURA</strong></p>
                    </div>
    
                    </motion.div>
        )
    }

    const generatePDF = () => {

        const doc = new jsPDF({
            orientation: 'p',
            unit: 'cm',
            format: 'letter',
            floatPrecision: 16 // or "smart", default is 16
        });

        const blue = [0, 104, 177];
      
        doc.setFont('Helvetica', 'Bold')
        doc.setFontSize(10);
        doc.text(finalDate, 2, 1);

        doc.setFont('Helvetica', '');
        doc.getFontList();
        doc.text('En Seguros SURA queremos compartir el siguiente análisis sobre los principales factores de gestión de riesgo asociados a tu cultivo y la región donde se encuentra.', 2, 2, {maxWidth: 16});

        doc.setTextColor(blue[0], blue[1], blue[2]);
        doc.text('Niveles de desarrollo por atributo', 2, 4);
        doc.addImage(imgData, 'JPEG', 2, 4.5, 15, 9);
        
        doc.setTextColor(blue[0], blue[1], blue[2]);
        doc.text('Aptitud', 2, 14.5);
        doc.setTextColor(0, 0, 0)
        doc.text(output_calificacion_aptitud.descriptor, 2, 15, {maxWidth: 16});

        doc.setTextColor(blue[0], blue[1], blue[2]);
        doc.text('Amenazas', 2, 17);
        doc.setTextColor(0, 0, 0);
        doc.text(output_calificacion_amenazas.descriptor, 2, 17.5, {maxWidth: 16});

        doc.setTextColor(blue[0], blue[1], blue[2]);
        doc.text('Rendimientos', 2, 19.5);
        doc.setTextColor(0, 0, 0);
        doc.text(output_calificacion_rendimiento.descriptor, 2, 20, {maxWidth: 16});

        doc.setTextColor(blue[0], blue[1], blue[2]);
        doc.text('Costos de producción', 2, 22);
        doc.setTextColor(0, 0, 0);
        doc.text(output_calificacion_costos.descriptor, 2, 22.5, {maxWidth: 16});

        doc.addPage('letter', 'p')
        
        doc.setTextColor(blue[0], blue[1], blue[2]);
        doc.text('Conocimiento del cultivo', 2, 2);

        
        doc.setTextColor(0, 0, 0);
        doc.text(pregunta_1.valor, 2, 3);
        doc.text(pregunta_1.descriptor, 2, 3.5);
        
        
        doc.setTextColor(0, 0, 0);
        doc.text(pregunta_2.valor, 2, 4.5);
        doc.text(pregunta_2.descriptor, 2, 5);
        
        
        doc.setTextColor(0, 0, 0);
        doc.text(pregunta_3.valor, 2, 6);
        doc.text(pregunta_3.descriptor, 2, 6.5);
        
        
        doc.setTextColor(0, 0, 0);
        doc.text(pregunta_4.valor, 2, 7.5);
        doc.text(pregunta_4.descriptor, 2, 8);
        
        doc.setTextColor(0, 0, 0);
        doc.text(pregunta_5.valor, 2, 9);
        doc.text(pregunta_5.descriptor, 2, 9.5);

        doc.setTextColor(0, 0, 0);
        doc.text(pregunta_6.valor, 2, 10.5);
        doc.text(pregunta_6.descriptor, 2, 11);
        
        doc.setTextColor(0, 0, 0);
        doc.text(pregunta_7.valor, 2, 12);
        doc.text(pregunta_7.descriptor, 2, 12.5);
        
        doc.setTextColor(0, 0, 0);
        doc.text(pregunta_8.valor, 2, 13.5);
        doc.text(pregunta_8.descriptor, 2, 14);
        
        doc.setTextColor(0, 0, 0);
        doc.text(pregunta_9.valor, 2, 15);
        doc.text(pregunta_9.descriptor, 2, 15.5);
        
        doc.setTextColor(0, 0, 0);
        doc.text(pregunta_10.valor, 2, 16.5);
        doc.text(pregunta_10.descriptor, 2, 17);

        doc.text(output_calificacion_encuesta.descriptor, 2, 18, {maxWidth: 16});

        doc.setTextColor(blue[0], blue[1], blue[2]);
        doc.text('Conclusiones', 2, 23);
        doc.setTextColor(0, 0, 0);
        doc.text(output_calificacion.descriptor, 2, 23.5, {maxWidth: 16});

        doc.text('Cordialmente', 2, 26.5);
        doc.setFont('Helvetica', 'Bold')
        doc.text('Equipo Seguros SURA', 2, 27);

        doc.save("Calificación-de-riesgo.pdf");

    }

    return (

        <>
        <div className="step">
            <div className="step-content score_wrapper">
                <p className="title">El cultivo presenta el siguiente perfil de riesgo</p>
                <div className="">
                    <div className="row">
                        <div className="col s6 score">
                            <div className={scoreClass ? scoreClass + ' score_content' : 'score_content'}>
                                <h2>Tu puntaje es</h2>
                                <img src="/images/imagen_puntaje.jpg" alt=""/>
                                { entriesResponse && (
                                    <p className={scoreClass ? scoreClass : ''}>{output_calificacion.valor}</p>
                                )}
                            </div>
                        </div>

                        {!imgData && (
                            <div className="col s6">
                                <img src="/images/img_loader.gif" alt=""/>
                            </div>
                        )}
                        
                        {imgData && (
                            <motion.div 
                                initial={{ opacity: 0, x: 200 }}
                                animate={{ opacity: 1, x: 0 }} 
                                transition={{ type: 'spring', stiffness: 90 }} 
                                className="col s6">
                                <h3>Factores de análisis de riesgo</h3>
                                <img width="100%" src={`data:image/jpeg;base64,${imgData}`} />
                            </motion.div>
                        )}

                    </div>
                </div>

                {imgData && (
                    <div className="links">
                        <button className="waves-effect waves-dark btn blue" onClick={generatePDF}>Descargar PDF</button>
                        <button className="waves-effect waves-dark btn blue" onClick={() => setIsActive(true)}>Ver Detalles</button>
                    </div>
                )}
            </div>
        </div>
        
            <AnimatePresence>
                {isActive && (
                    <Preview isActive={isActive} />
                )}
            </AnimatePresence>
        </>
    )
}

