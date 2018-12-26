import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom';
import App from './App'
import Login from './pages/login'
import Admin from './admin'


export default class IRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Route path="/login" component={Login}/>
                    <Route path="/admin" render={()=>
                        <Admin>
                            <Route path="/admin/ui/buttons" component={Login}/>

                        </Admin>
                    }/>
                    <Route path="/order/detail" component={Admin}/>
                </App>
            </HashRouter>
        );
    }
}