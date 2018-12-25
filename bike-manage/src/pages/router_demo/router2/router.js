import React from 'react'
import {HashRouter as Router,Route} from 'react-router-dom';
import Main from './../router2/Main';
import About from './../router1/about';
import Topic from './../router1/topic';
import Home from './Home';

export default class IRoute extends React.Component {
    render() {

        return (

<Router>
    <Home>
      
        <Route exact={true} path="/" component={Main} />
        <Route path="/about" component={About} />
        <Route path="/topic" component={Topic} />
    </Home>
</Router>
        );
    }
}