import React from 'react'
import {Layout} from 'antd';
import NavLeft from './components/NavLeft';
import Header from './components/Header';
//import Home from './pages/home';
import './style/common.less';

const {Footer, Content} = Layout;
export default class Admin extends React.Component {

    render() {
        return (
            <Layout>
                <NavLeft/>
                <Layout style={{marginLeft: 200,overflow:'auto'}}>
                    <Header/>
                    <Content style={{margin: '24px 16px 0', overflow: 'initial'}}>
                        {/*<Home></Home>*/}
                        {this.props.children}
                    </Content>
                    <Footer style={{textAlign: 'center'}}>
                        Ant Design ©2018 Created by Ant UED（推荐使用谷歌浏览器，可以获得更佳操作页面体验）
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}