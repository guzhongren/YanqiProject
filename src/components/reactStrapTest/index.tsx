import * as React from  "react";
import {Button} from 'react-bootstrap';
export default class Tst extends React.Component<any, any>{
    constructor(){
        super();
    };

    render(){
        return(
            <div>
                <Button bsStyle="success">tst</Button>
                <i className="fa fa-camera-retro fa-lg"></i> 
            </div>
        )
    }
}