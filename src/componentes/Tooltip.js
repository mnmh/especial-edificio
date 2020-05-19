import React, { Component } from 'react'

class Tooltip extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <div className="tooltip">
                    <div className="title">{this.props.titulo}</div>
                    <div className="content">{this.props.contenido}</div>
                    <div className="leyenda">
                        {this.props.marcadores.map((obj, i) => {
                            return (
                                <>
                                    <div key={i} className="item" style={{ backgroundColor: obj.color }}>
                                        <div className="nombre">{obj.nombre}</div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </>
        )
    }
}

export default Tooltip