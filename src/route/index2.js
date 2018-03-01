import React from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';

import Index21 from '../components/index21';
import Index22 from '../components/index22';
const Index2 = ({match})=> (
        <div>
            <div>
                <NavLink to={`${match.url}/index21`} exact>首页2</NavLink>
                <NavLink to={`${match.url}/index22`}>首页2</NavLink>
            </div>
            <Route exact path={`${match.url}`} render={()=>(<Redirect to={`${match.url}/index21`}/>)}/>
            <Route path={`${match.url}/index21`} component={Index21}></Route>
            <Route path={`${match.url}/index22`} component= {Index22}></Route>
        </div>
    )
export default Index2;