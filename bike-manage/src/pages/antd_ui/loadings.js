import React from 'react'
import {Card, Spin, Icon, Alert} from 'antd';
import './ui.less'

export default class loadings extends React.Component {
    render() {
        const icon = <Icon type="plus"></Icon>
        const iconLoading = <Icon type="loading"></Icon>
        return (

            <div>
                <Card title="Spin用法" className="card-wrap">
                    <Spin size="small"/>
                    <Spin sytle={{margin: '0 10px'}}/>
                    <Spin size="large"/>
                    <Spin indicator={icon} style={{marginLeft: 30}}/>
                    <Spin indicator={iconLoading} style={{marginLeft: 30}} spinning={true}/>
                    {/*//indicator 加载指示符,spinning 是否为加载中状态*/}

                </Card>
                <Card title="内容遮罩" className="card-wrap">
                    <Alert message="Success Tips" type="success" showIcon description="这是一个alert信息框"/>
                    <Alert message="Informational Notes" type="info" showIcon description="这是一个alert信息框"/>
                    <Alert message="Warning" type="warning" showIcon description="这是一个alert信息框"/>
                    <Alert message="Error" type="error" showIcon description="这是一个alert信息框"/>
                    <Spin>
                        <Alert message="Informational Notes" type="info" showIcon description="这是一个alert信息框"/>
                    </Spin>
                    <Spin tip="加载中......">
                        <Alert message="Informational Notes" type="info" showIcon description="这是一个alert信息框"/>
                    </Spin>
                    <Spin indicator={iconLoading}>
                        <Alert message="Informational Notes" type="info" showIcon description="这是一个alert信息框"/>
                    </Spin>
                </Card>
            </div>
        );
    }
}