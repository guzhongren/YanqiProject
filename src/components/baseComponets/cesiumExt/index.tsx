import React, { Component } from 'react';
import 'cesium/Widgets/widgets.css';
import Cesium from "cesium/Cesium";

class App extends Component {
  viewer;
  cesiumContainer;
  componentDidMount() {

    this.viewer = new Cesium.Viewer(this.cesiumContainer);
  }

  render() {
    return (
        <div id="cesiumContainer" ref={element => this.cesiumContainer = element} />
    );
  }
}

export default App;