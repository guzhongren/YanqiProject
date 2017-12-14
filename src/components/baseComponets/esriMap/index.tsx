import * as React from 'react';
import './style/index.less';
import { dojoRequire } from 'esri-loader';
import EsriLoader from 'esri-loader-react';
// import * as ArcGIS from 'arcgis-js-api';
export interface Props {
  viewParams?: {};
  onViewCreated?: (view) => void;
}

interface State {
  loaded?: boolean
}
export default class EsriMapExt extends React.Component<Props, State> {
  container;
  view;
  constructor(props: Props) {
    super(props);
    this.state = {
      loaded: false
    }
  }
  ready() {
    this.setState({
      loaded: true
    });
  }
  createMap = () => {
    let _self = this;
    dojoRequire(['esri/Map', 'esri/views/SceneView'], (Map, SceneView) => {
      _self.view = new SceneView(Object.assign({
        container: _self.container,
        map: new Map({ basemap: 'streets-night-vector' })
      }, _self.props.viewParams));
      _self.view.then(() => {
        _self.props.onViewCreated(_self.view);
      });
    });
  }
  componentDidMount() {
    this.createMap();
  };
  render() {
    // you can omit options and it defaults to the latest version
    const options = {
      // url: 'https://js.arcgis.com/4.4/'
      url: '/arcgis_js_api/init.js'
    };
    const style = { height: '100%' }
    return (
      <div style={style}>
        <EsriLoader options={options} ready={this.ready.bind(this)} />
        <div style={style} ref={node => this.container = node}></div>
      </div>
    );
  }
}