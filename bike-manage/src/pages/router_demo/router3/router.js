import React from 'react'
import {HashRouter as Router,Route,Switch} from 'react-router-dom';
import Main from './../router3/Main';
import Info from './../router3/info';
import Topic from './../router1/topic';
import About from './../router1/about';
import Home from './Home';

export default class IRoute extends React.Component {
    render() {

        return (

<Router>
    <Home>
      <Switch>
        <Route  path="/main" render={()=>
            <Main>
                <Route path="/main/:mainId" component={Info}></Route>
            </Main>
        } />
        <Route path="/about" component={About} />
        <Route path="/topic" component={Topic} />
        <Route  component={NoMatch} />
        </Switch>
    </Home>
</Router>
        );
    }
}