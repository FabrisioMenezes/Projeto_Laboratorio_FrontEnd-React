import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom
import Login from './pages/Login'

const Routes = () =>{
    return  (
        <Switch>
            <Route component={Login} exact path="/" />
            <Route path="*" >
                <Redirect to="/" />
            </Route>
        </Switch>
    )
}

export default Routes