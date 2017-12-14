import React, { Component } from 'react';
import 'cesium/Widgets/widgets.css';

import Cesium from 'cesium/Cesium';
// const Cesium = cesium.Cesium;

export interface Props {
  onViewCreated?: (viewer) => void;
}
interface State{

}
class App extends Component<Props, State> {
  constructor(props:Props){
    super(props);
    this.state = {}
  }
  viewer;
  cesiumContainer;
  componentDidMount() {

    this.viewer = new Cesium.Viewer(this.cesiumContainer);
    this.props.onViewCreated(this.viewer);
  }
  render() {
    return (
      <div id="cesiumContainer" ref={element => this.cesiumContainer = element} />
    );
  }
}

export default App;