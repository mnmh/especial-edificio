import React from 'react';

import Mapa from './adicionales/Mapa'

var Texto2 = props => {
    return (
        <>
            <div className="cabezote texto transparent">
                <div className="insideImg">
                    <div className="txt">
                        <h2>El concepto detrás del edificio</h2>
                        <div className="column">
                            <p>En el año 2015, el Centro Nacional de Memoria Histórica (CNMH) y la Sociedad Colombiana de Arquitectos realizó el concurso Arquitectónico Internacional del Diseño del Museo Nacional de la Memoria, cuya propuesta ganadora fue el presentado por las firmas MGP Arquitectura y Urbanismo (Colombia) y Estudio Entresitio (España), quienes, además, estuvieron encargados del desarrollo del proyecto. La propuesta ganadora se titula entre el Cielo y la Tierra y propone un recorrido integrado al paisaje de la capital. Según el equipo que lo diseñó:</p>
                            <p className="openQuote"><i><span className="subtitulo">Entre el suelo y el cielo</span></i></p>
                            <p><i>El edificio para el MNM de Bogotá se plantea como un recorrido ascendente,
                            secuencial y emotivo, entre el suelo y el cielo urbano. Este comienza y termina con
                            24 picos –en espejo vertical- que tocan levemente ese suelo y ese cielo como
                            principio y fin, y viceversa, pues son estos los lugares que nos unen como
                        colombianos.</i></p>
                            <p><i>Estos picos, que en su multiplicidad, representan las diferentes posiciones político-
                            filosóficas de los actores del conflicto colombiano, se deshacen en el suelo y en el
                            cielo, geografías que al fin y al cabo son de todos. El edificio es entonces una
                            pieza urbana que toca levemente los dos extremos fundamentales del espacio
                        urbano, suelo y cielo y en el medio alberga las salas de exposición.</i></p>
                            <p className="closeQuote"><i>El recorrido ascendente, desde el plano de la ciudad hasta la relación directa con
                            los Cerros y el cielo, transporta al espectador a través del conjunto de salas hasta
                            el “Jardín de la Nostalgia”, en la cubierta, más allá del “Lugar del Duelo”, para
                            desde allí alcanzar el horizonte. La nostalgia en su origen griego significa “dolor
                        por una antigua herida”, una herida que hay que sanar, sanar con luz.</i><span class="asterix">*</span></p>
                            <p class="nota"><span class="asterix">*</span> tomado del documento Textos en planchas, pag 1.</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Texto2;