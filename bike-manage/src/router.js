import React from 'react'
import App from './App'
import Login from './pages/login'
import Admin from './pages/login'
import {HashRouter, Route, Switch} from 'react-router-dom';

export default class IRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Route path="/login" component={Login}> </Route>
                    <Route path="/admin" component={Admin}> </Route>

                </App>
            </HashRouter>
        );
    }
}