import React, { Component } from "react";
import ThreeHelper from '../helpers/ThreeHelper';

class ThreeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            objReady: false
        }
    }

    componentDidMount() {
        this.helper = new ThreeHelper(this.props.modelo, document.getElementById('three_view'));
    }

    render() {
        return (
            <div id="three_view">

            </div>
        );
    }
}

export default ThreeView;