import React from 'react'
import {Card, Button, Icon, Radio} from 'antd';
import './ui.less'

export default class Buttons extends React.Component {
    state = {
        loading: true,
        size: 'default'
    }

    handleCloseLoading() {
        this.setState({
            loading: false
        });
    }

    handleChange = (e) =>{
        this.setState({
            size: e.target.value
        });
    }

    render() {
        return (
            <div>
                <Card title="基础按钮" className="card-wrap">
                    <Button type="primary">IMooc</Button>
                    <Button>IMooc</Button>
                    <Button type="dashed">IMooc</Button>
                    <Button type="danger">IMooc</Button>
                    <Button disable>IMooc</Button>
                </Card>
                <Card title="图形按钮" className="card-wrap">
                    <Button icon="plus">创建</Button>
                    <Button icon="edit">编辑</Button>
                    <Button icon="delete" type="danger">删除</Button>
                    <Button shape="circle" icon="search"></Button>
                    <Button icon="search" type="primary">搜索</Button>
                    <Button icon="download" type="primary">下载</Button>
                </Card>
                <Card title="Loading按钮" className="card-wrap">
                    <Button type="primary" loading={this.state.loading}>确定</Button>
                    <Button type="primary" loading={this.state.loading} shape="circle"></Button>
                    <Button loading={this.state.loading}>点击加载</Button>
                    <Button shape="circle" loading={this.state.loading}></Button>
                    <Button type="primary" onClick={this.handleCloseLoading.bind(this)}>关闭</Button>
                </Card>
                <Card title="按钮组">
                    <Button.Group>
                        <Button type="primary"><Icon type="left"/>前进</Button>
                        <Button type="primary">返回<Icon type="right"/></Button>

                    </Button.Group>
                </Card>
                <Card title="按钮尺寸" className="card-wrap">
                    <Radio.Group value={this.state.size} onChange={this.handleChange}>
                        <Radio value="small">小</Radio>
                        <Radio value="default">中</Radio>
                        <Radio value="large">大</Radio>
                    </Radio.Group>
                    <Buttons type="primary" size={this.state.size}>IMooc</Buttons>
                    <Buttons type="dashed" size={this.state.size}>IMooc</Buttons>
                    <Buttons type="danger" size={this.state.size}>IMooc</Buttons>
                    <Buttons size={this.state.size}></Buttons>
                </Card>
            </div>
        );
    }
}