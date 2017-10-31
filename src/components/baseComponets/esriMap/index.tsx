import * as React from 'react';
import EsriLoader from 'esri-loader-react';
import { dojoRequire } from 'esri-loader'
import './style/index.less';

import EsriMap = require("esri/Map");
import MapView = require("esri/views/MapView");



export interface EsriMapExtProps {
    style?: React.CSSProperties;
    onMapCreated?: (view: MapView) => void;
}
export interface EsriMapExtState {
    style?: React.CSSProperties,
    loaded?: boolean
}
/**
 * EsriMapExt
 */
export default class EsriMapExt extends React.Component<any, any> {
    mapContainer: any;
    constructor(props) {
        super(props);
        // let style = Object.assign({ height: "calc(100% - 56px)" }, this.props.style);
        this.state = {
            loaded: false
        };
    };

    componentDidMount() {

    }
    componentWillReceiveProps(nextProps: EsriMapExtProps) {
        if (this.props !== nextProps) {

        }
    }
    onEsriApiLoaded = (error) => {
        if (!error) {
            this.setState({ loaded: true });
        }
    }
    createMap = () => {
        console.log(dojoRequire);
        dojoRequire(['esri/Map', 'esri/views/MapView'], ([Map, MapView]) => {
            console.log("dtsdf");
            new MapView({
                container: this.mapContainer,
                map: new Map({ basemap: 'oceans' })
            })
        });
    }
    refs: {
        [string: string]: any;
    }

    render() {
        const options = {
            url: '/arcgis_js_api/library/4.5/init.js' // 
        };

        return (
            <div className="App">
                <EsriLoader options={options} ready={this.createMap} />
                <div className="App-header">
                    <h2>Welcome to React</h2>
                </div>

                <div ref={node => this.mapContainer = node} className='map-view'></div>
            </div>
        );
    }
}