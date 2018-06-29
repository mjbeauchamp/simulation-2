import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './component/Dashboard/Dashboard'
import Wizard from './component/Wizard/Wizard'
import OneHouse from './component/OneHouse/OneHouse'

function MySwitch(){
    return (
        <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route path='/wizard' component={Wizard}/>
            <Route path='/house/:id' component={OneHouse} />
        </Switch>
    )
}

export default MySwitch;