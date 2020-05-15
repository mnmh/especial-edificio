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
                </div>
            </>
        )
    }
}

export default Tooltip