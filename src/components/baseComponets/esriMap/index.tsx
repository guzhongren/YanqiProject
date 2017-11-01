import * as React from 'react';
import './style/index.less';
import { dojoRequire } from 'esri-loader';
import EsriLoader from 'esri-loader-react';
interface States{
  loaded?: boolean
}
export default class EsriMapExt extends React.Component<any, States> {
  mapContainer;
  constructor(){
    super();
    this.state= {
      loaded: false
    }
  }
  ready(){
    this.setState({
      loaded: true
    });
  }
  createMap = () => {
    dojoRequire(['esri/Map', 'esri/views/MapView'], (Map, MapView) => {
      new MapView({
        container: this.mapContainer,
        map: new Map({ basemap: 'oceans' })
      })
    });
  }
  componentDidMount(){
    this.createMap();
  };
  render() {
    // you can omit options and it defaults to the latest version
    const options = {
      url: 'https://js.arcgis.com/4.4/'
    };
    return (
      <div>
        <EsriLoader options={options} ready={this.ready.bind(this)} /> 
        <div ref={node => this.mapContainer = node}></div>
      </div>
    );
  }
}