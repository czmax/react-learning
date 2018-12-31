import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom';
import App from './App'
import Login from './pages/login'
import Admin from './admin';
import Buttons from './pages/antd_ui/buttons';
import Modals from './pages/antd_ui/modals';
import Loadings from './pages/antd_ui/loadings';
import Notices from './pages/antd_ui/notices';
import Messages from './pages/antd_ui/messages';
import Tabs from './pages/antd_ui/tabs';
import Gallery from './pages/antd_ui/gallery';
import Carousels from './pages/antd_ui/carousels';
import FormLogin from './pages/antd_form/login';
import NoMatch from "./pages/nomatch";

export default class IRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Route path="/login" component={Login}/>
                    <Route path="/admin" render={()=>
                        <Admin>
                            <Switch>
                            <Route path="/admin/ui/buttons" component={Buttons}/>
                            <Route path="/admin/ui/modals" component={Modals}/>
                            <Route path="/admin/ui/loadings" component={Loadings}/>
                            <Route path="/admin/ui/notification" component={Notices}/>
                            <Route path="/admin/ui/messages" component={Messages}/>
                            <Route path="/admin/ui/tabs" component={Tabs}/>
                            <Route path="/admin/ui/gallery" component={Gallery}/>
                            <Route path="/admin/ui/carousel" component={Carousels}/>
                            <Route path="/admin/form/login" component={FormLogin}/>
                            <Route  component={NoMatch}/></Switch>

                        </Admin>
                    }/>
                    <Route path="/order/detail" component={Login}/>
                </App>
            </HashRouter>
        );
    }
}