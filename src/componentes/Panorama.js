import React, { Component } from 'react'
import ReactBodymovin from 'react-bodymovin'
import icon from '../img/panorama.json'

class Panorama extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <>
                <div className="panorama">
                    <ReactBodymovin options={
                        {
                            loop: true,
                            autoplay: true,
                            prerender: true,
                            animationData: icon
                        }
                    } />
                    <h3>Visita el predio del Museo en 360</h3>
                </div>
            </>
        )
    }
}

export default Panorama