import React from 'react';

import Mapa from '../componentes/adicionales/Mapa'

var Titulo = props => {
    return (
        <>
            <div className="cabezote texto">
                <div className="insideImg">
                    <div className="txt">
                        <h2>El museo en la ciudad</h2>
                        <p>El predio donde se construirá el MMC se encuentra en el cruce de la calle 26 con la Avenida de las Américas, en el centro urbanístico de Bogotá. Su emplazamiento arquitectónico y el espacio exterior que forma la Plaza de la Democracia en dicho predio está articulado para consolidar el Eje de la Paz y la Memoria en  Bogotá. Dicho eje es un proyecto de diseño urbano reglamentado por el decreto 632 de 2014, y consiste en transformaciones a los conjuntos monumentales de los  alrededores de la Avenida Jorge Eliécer Gaitán (calle 26) <i>para fortalecer un espacio urbano de reconocimiento y remembranza de  de los hechos y víctimas de la violencia (...) con el fin de contribuir a la reparación integral de las víctimas de hechos violentos ocurridos en las historia reciente del país.</i><span className="asterix">*</span></p>
                        <p className="nota"><span className="asterix">*</span>Centro Nacional de Memoria Histórica (2017), Museo Nacional de la Memoria: un lugar para el encuentro. Lineamientos conceptuales y guión museológico, CNMH, Bogotá. Pág. 60.</p>
                    </div>
                    <div className="imgMapa">
                        <Mapa />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Titulo;