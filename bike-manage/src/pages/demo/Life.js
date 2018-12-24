import React from 'react'
import Child from './Child'
import {
    Button
} from 'antd'

import './index.less'
import 'antd/dist/antd.css'

export default class Lift extends React.Component {
    state = {
        count: 0
    }

    handleAdd=()=>{
        //这里this是当前组件实例
        this.setState({count:this.state.count+1})
    }
    handleClick(){
        //这里this就不是当前组件实例,需要bind(this)传递后才会变成组件实例
        this.setState({count:this.state.count+1})
    }
    render(){
        let style={padding:50}
        return <div style={style}>
            <p>React生命周期介绍</p>
            <Button onClick={this.handleAdd}>Antd点击一下</Button>
            <button onClick={this.handleAdd}>点击一下</button>
            <button onClick={this.handleClick.bind(this)}>点击一下</button>
            <p>{this.state.count}</p>
            <Child name={this.state.count}></Child>
        </div>

    }
}