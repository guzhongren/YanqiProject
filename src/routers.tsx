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
import EchartsTest from './components/reactStrapTest/echartsTest'
// import Map1 from "./components/baseComponets/esriMap/index1";
const Index = () => (
  <Router basename="/">
    <div style={{ height: "100%" }}>
      {/* 预留菜单栏 */}
      <Switch>
        <Route exact path="/" component={Test} ></Route>
        <Route path="/test" component={MainCom} ></Route>
        <Route component={NoMatch}></Route>
      </Switch>
    </div>
  </Router>
);

const Test = ({ match }) => {
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

const MainCom = ({ match }) => {
  return (
    <div style={MapContentHeight}>
      <p>Gogogogoggo</p>

    </div>
  )
}


export default Index