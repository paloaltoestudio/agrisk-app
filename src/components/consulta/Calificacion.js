import React, { useContext, useEffect, useState, useRef } from 'react';
import M from 'materialize-css';
import { SignContext } from '../contexts/SignContext';
import { motion, AnimatePresence } from 'framer-motion';
import imageToBase64 from 'image-to-base64/browser';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

export default function Calificacion() { 

    useEffect(() => {
        M.AutoInit();
    }, [])

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
        return(
            <div className="score_preview">
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
    
            </div>
        )
    }

    const [header, setHeader] = useState();
    const [footer, setFooter] = useState();
    useEffect(() => {
        const headerImg = './images/suraHeader.png';
        const headerBase64 = async () => {
            try {
                const imgConvert = await imageToBase64(headerImg);
                setHeader(imgConvert);
    
            } catch (error){
                console.log(error)
            }
        }

        const footerImg = './images/suraFooter.png';
        const footerBase64 = async () => {
            try {
                const imgConvert = await imageToBase64(footerImg);
                setFooter(imgConvert);
            } catch (error){
                console.log(error)
            }
        }
        headerBase64();
        footerBase64();
    }, []);

    const dd = {
        pageSize: 'LETTER',
        pageMargins: [ 30, 180, 30, 40 ],
        header: {
            image: `data:image/jpeg;base64,${header}`,
            width: 600
        },
        content: [
           
            {
                text: finalDate,
                margin: [ 0, 0, 0, 10 ]
            },
            {
                text: 'En Seguros SURA queremos compartir el siguiente análisis sobre los principales factores de gestión de riesgo asociados a tu cultivo y la región donde se encuentra.',
                margin: [ 0, 0, 0, 20 ]
            },
            {
                text: 'Niveles de desarrollo por atributo',
                color: '#0068B1',
                margin: [ 0, 0, 0, 20 ]
            },
            {
                image: 'chartImg',
                width: 400,
                margin: [ 0, 0, 0, 20 ]
            },
            {
                text: 'Aptitud',
                color: '#0068B1',
                margin: [ 0, 0, 0, 0 ]
            },
            {
                text: output_calificacion_aptitud.descriptor,
                margin: [ 0, 0, 0, 20 ]
            },
            {
                text: 'Amenazas',
                color: '#0068B1',
                margin: [ 0, 0, 0, 0 ]
            },
            {
                text: output_calificacion_amenazas.descriptor,
                margin: [ 0, 0, 0, 20 ]
            },
            {
                text: 'Rendimientos',
                color: '#0068B1',
                margin: [ 0, 0, 0, 0 ]
            },
            {
                text: output_calificacion_rendimiento.descriptor,
                margin: [ 0, 0, 0, 20 ]
            },
            {
                text: 'Costos de producción',
                color: '#0068B1',
                margin: [ 0, 0, 0, 0 ]
            },
            {
                text: output_calificacion_costos.descriptor,
                margin: [ 0, 0, 0, 20 ]
            },
            {
                text: 'Conocimiento del cultivo',
                color: '#0068B1',
                margin: [ 0, 0, 0, 20 ]
            },
            {
                text: pregunta_1.valor,
                margin: [ 0, 0, 0, 0 ]
            },
            {
                text: pregunta_1.descriptor,
                margin: [ 0, 0, 0, 20 ]
            },
            {
                text: pregunta_2.valor,
                margin: [ 0, 0, 0, 0 ]
            },
            {
                text: pregunta_2.descriptor,
                margin: [ 0, 0, 0, 20 ]
            },
            {
                text: pregunta_3.valor,
                margin: [ 0, 0, 0, 0 ]
            },
            {
                text: pregunta_3.descriptor,
                margin: [ 0, 0, 0, 20 ]
            },
            {
                text: pregunta_4.valor,
                margin: [ 0, 0, 0, 0 ]
            },
            {
                text: pregunta_4.descriptor,
                margin: [ 0, 0, 0, 20 ]
            },
            {
                text: pregunta_5.valor,
                margin: [ 0, 0, 0, 0 ]
            },
            {
                text: pregunta_5.descriptor,
                margin: [ 0, 0, 0, 20 ]
            },
            {
                text: pregunta_6.valor,
                margin: [ 0, 0, 0, 0 ]
            },
            {
                text: pregunta_6.descriptor,
                margin: [ 0, 0, 0, 20 ]
            },
            {
                text: pregunta_7.valor,
                margin: [ 0, 0, 0, 0 ]
            },
            {
                text: pregunta_7.descriptor,
                margin: [ 0, 0, 0, 20 ]
            },
            {
                text: pregunta_8.valor,
                margin: [ 0, 0, 0, 0 ]
            },
            {
                text: pregunta_8.descriptor,
                margin: [ 0, 0, 0, 20 ]
            },
            {
                text: pregunta_9.valor,
                margin: [ 0, 0, 0, 0 ]
            },
            {
                text: pregunta_9.descriptor,
                margin: [ 0, 0, 0, 20 ]
            },
            {
                text: pregunta_10.valor,
                margin: [ 0, 0, 0, 0 ]
            },
            {
                text: pregunta_10.descriptor,
                margin: [ 0, 0, 0, 20 ]
            },
            {
                text: output_calificacion_encuesta.descriptor,
                margin: [ 0, 0, 0, 20 ],
                pageBreak: "before"
            },
            {
                text: 'Conclusiones',
                color: '#0068B1',
                margin: [ 0, 0, 0, 0 ]
            },
            {
                text: output_calificacion.descriptor,
                margin: [ 0, 0, 0, 20 ]
            },
            {
                text: 'Cordialmente',
                margin: [ 0, 0, 0, 0 ]
            },
            {
                text: 'Equipo Seguros SURA',
                margin: [ 0, 0, 0, 0 ]
            }
        ],
        footer: {
            image: `data:image/jpeg;base64,${footer}`,
            width: 600
        },
        images: {
            chartImg: `data:image/jpeg;base64,${imgData}`
        }
    }

    const createPDF = (e) => {
        e.preventDefault();
        pdfMake.createPdf(dd).download();
    }

    return (

        <>
        <motion.div 
             initial={{ opacity: 0, x: 200 }}
             animate={{ opacity: 1, x: 0 }} 
             transition={{ type: 'spring', stiffness: 90 }}
             className="card pasos z-depth-3">
              <div className="card-content">

                            
        <div className="step">
            <div className="step-content score_wrapper">
               {/*  <p className="title">El cultivo presenta el siguiente perfil de riesgo</p> */}
                <div className="">
                    <div className="row">
                        <div className="col s6 score">
                            <div className={scoreClass ? scoreClass + ' score_content' : 'score_content'}>
                                <h2>Tu puntaje es</h2>
                                <img src={`/images/puntaje_${output_calificacion.valor}.jpg`} alt=""/>
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
                        <a href="" className="waves-effect waves-dark btn blue" onClick={createPDF}>Descargar PDF</a>
                        <a class="btn blue modal-trigger" href="#previewPDF">Ver Detalles</a>
                    </div>
                )}
            </div>
        </div>
        </div>
        </motion.div>
        
            <AnimatePresence>
                {isActive && (
                    <Preview isActive={isActive} />
                )}
            </AnimatePresence>

            <div id="previewPDF" class="modal">
                <div class="modal-content">
                     <a href="#!" class="modal-close">Cerrar</a>
                    <Preview />
                </div>
            </div>
        </>
    )
}

