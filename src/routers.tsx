/// <reference path="./@types/index.d.ts" />
/**
 * created at 2017-10-31
 * ./index.tsx
 */
import * as React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Config from "./config";
import Tst from './components/reactStrapTest'
const Index = () => (
  <Router basename="/">
    <div style={{ height: "100%" }}>
      <Switch>
        <Route exact path="/" component={MainCom} ></Route>
        <Route path="/test" component={Test} ></Route>
      </Switch>
    </div>
  </Router>
);


const Test = ({match}) => {
  return(
    <Tst>></Tst>
  )
};
const NoMatch = ({ match }) => {
  <h1>请选择正确的路由。。。</h1>
};
const MapContentHeight = { height: "calc(100% - 56px)" };

const MainCom = ({ match }) => {
  return (
    <div style={MapContentHeight}>
     <h1>Gogogogoggo</h1>
    </div>
  )
}


export default Index