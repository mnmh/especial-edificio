import React, { Component } from 'react';

import Mapa from '../componentes/adicionales/Mapa'

class Texto extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: ''
        }
    }

    componentDidMount() {
        var parent = this
        var botones = document.getElementsByClassName('btn_more')
        for (let i = 0; i < botones.length; i++) {
            botones[i].addEventListener('click', (e) => {
                let btn_active = document.getElementsByClassName('btn_active');
                if (btn_active.length > 0)
                    btn_active[0].classList.remove('btn_active');
                const bloque = e.path[1].getAttribute('id')
                e.path[1].classList.add('btn_active')
                // console.log(bloque)
                parent.setState({
                    active: bloque
                })
            })
        }

        // document.getElementById('Predio_Museo_de_Memorai_de_Colombia').click()
    }

    render() {
        var tooltip = <p>Predio del Museo de Memoria de Colombia</p>
        if (this.state.active == 'Bosque_de_la_Libertad') {
            tooltip = <p>Bosque de la Libertad</p>
        } else if (this.state.active == 'Cementerio_Británico') {
            tooltip = <p>Cementerio Británico</p>
        } else if (this.state.active == 'Plazoleta_de_los_Murales') {
            tooltip = <p>Plazoleta de los murales</p>
        } else if (this.state.active == 'Columbarios') {
            tooltip = <p>Columbarios <a target="_blank" href="http://museodememoria.gov.co/bga/auras">visita nuestro especial web</a></p>
        } else if (this.state.active == 'Busto_Jorge_Eliecer_Gaitán') {
            tooltip = <p>Busto de Jorge Eliecer Gaitán</p>
        } else if (this.state.active == 'Centro_de_Memoria_Paz_y_Reconciliación') {
            tooltip = <p>Centro de Memoria Paz y Reconciliación</p>
        } else if (this.state.active == 'Parque_El_renacimiento_monumento_alas_víctimas_del_9_de_abril_de_1948copia') {
            tooltip = <p>Parque el renacimiento</p>
        } else if (this.state.active == 'Cementerio_Alemán') {
            tooltip = <p>Cementerio Alemán</p>
        } else if (this.state.active == 'Cementerio_Central') {
            tooltip = <p>Cementerio Central</p>
        } else if (this.state.active == 'Cementerio_Hebreo') {
            tooltip = <p>Cementerio Hebreo</p>
        } else if (this.state.active == 'Monumento_a_la_Dignidadscultura_de_Luis_Carlos_Galán') {
            tooltip = <p>Escultura de Luis Carlos Galán</p>
        } else if (this.state.active == 'Plaza_de_la_Democrácia') {
            tooltip = <p>Plaza de la democracia</p>
        } else if (this.state.active == 'Predio_Museo_de_Memorai_de_Colombia') {
            tooltip = <p>Predio del Museo de Memoria de Colombia</p>
        }
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
                            <div id="tooltip_mapa">
                                <div>{tooltip}</div>
                            </div>
                            <Mapa />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Texto;