import React, { Component } from "react";
import * as THREE from 'three';
var OBJLoader = require('three-obj-loader');
var OrbitControls = require('three-orbitcontrols');
OBJLoader(THREE);

class ThreeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            objReady: false
        }

        this.obj = new FileReader();
    }

    componentDidMount() {
        this.obj.readAsDataURL(this.props.obj);
    }

    render() {
        return (
            <div id="three_view">

            </div>
        );
    }
}

export default ThreeView;