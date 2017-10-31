import * as React from 'react';
import { Map } from 'react-arcgis';
import {Widgets} from "react-arcgis";

export default class Map1 extends React.Component<any, any>{
    constructor() {
        super();
    }
    handleMapLoad=(map, view) => {
        console.log("map",map);
        console.log("view", view);
        let www=  Widgets.BasemapGallery;
        console.log(www)
        // view.ui.add(compass, "top-right");
    }
    render() {
        return (
            <Map onLoad={this.handleMapLoad.bind(this)}/>
        )
    }
}