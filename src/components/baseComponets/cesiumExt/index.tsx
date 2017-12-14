import * as  React from 'react';
import 'cesium/Widgets/widgets.css';

import Cesium from 'cesium/Cesium';

export interface Props {
  onViewCreated?: (viewer) => void;
}
interface State {

}
class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {}
  };
  viewer;
  cesiumContainer;
  componentDidMount() {

    this.viewer = new Cesium.Viewer(this.cesiumContainer);
    this.props.onViewCreated(this.viewer);
  };

  render() {
    let _self = this;
    return (
        <div ref={element => { _self.cesiumContainer = element }} ></div>
    );
  }
}

export default App;