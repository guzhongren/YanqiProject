/// <reference path="./@types/index.d.ts" />
/**
 * created at 2017-10-31
 * ./index.tsx
 */
import * as React from 'react'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Config from "./config";
import Tst from './components/reactStrapTest';
import BigScreen from "./components/bigScreen";
import CesiumExt from './components/baseComponets/cesiumExt';
// import Map1 from "./components/baseComponets/esriMap/index1";
const Index = () => (
  <Router basename="/">
    <div style={{ height: "100%" }}>
      {/* 预留菜单栏 */}
      <Switch>
        <Route exact path="/" component={Esri} ></Route>
        <Route path="/cesium" component={Cesium} ></Route>
        <Route component={NoMatch}></Route>
      </Switch>
    </div>
  </Router>
);

const Esri = ({ match }) => {
  return (
    <div style={{height: "100%"}}>
      <BigScreen></BigScreen> 
    </div>
  )
};
const NoMatch = ({ match }) => {
  return (
    <p>4000000000000000000000.............4...........<br />请选择正确的路由。。。</p>
  )
};
const MapContentHeight = { height: "100%" };

const Cesium = ({ match }) => {
  return (
    <div style={MapContentHeight}>
      <p>Gogogogoggo</p>
    <CesiumExt onViewCreated={(viewer=>{console.log('cesium ', viewer)})}></CesiumExt>
    </div>
  )
}


export default Index