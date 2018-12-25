import React from 'react'
import {Link} from 'react-router-dom';
export default class Home extends React.Component {
    render() {

        return (

           
<div>
   动态路由功能
   <br/>
   动态路由的值是 :{this.props.match.params.value}
</div>
        );
    }
}