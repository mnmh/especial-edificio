import React, {Component} from 'react';

class Cabezote_01 extends Component {
    render() {
        return (
            <header className="cabezote">
                <div className="img" style={{backgroundImage: `url(${this.props.img})`}}></div>
            </header>
        )
    }
}

export default Cabezote_01;