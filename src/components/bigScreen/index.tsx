import * as React from 'react';
import EsriMapExt from '../baseComponets/esriMap';
import EchartsTest from '../reactStrapTest/echartsTest';
export interface Props {

}
interface State {
    view?: any; // gis视图
}
export default class BigScreen extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = {
            view: null
        };
    };
    componentDidMount() {

    };
    onViewCreated(sceneView) {
        let _self = this;
        _self.setState({
            view: sceneView
        }, () => {
            _self.state.view.ui.empty('top-left');
            _self.state.view.ui.remove("attribution");
        });
    };
    render() {
        let params = {
            center: [86.4049942460, 42.0246267579],
            zoom: 11,
            heading: 0,
            tilt: 20
        };
        return (
            <div style={{ height: "100%" }}>
                <EsriMapExt viewParams={params} onViewCreated={this.onViewCreated.bind(this)}>
                </EsriMapExt>
                <EchartsTest style={{ top: "10px", position: "absolute", height: "200px" }} />
            </div>
        )
    }
}
