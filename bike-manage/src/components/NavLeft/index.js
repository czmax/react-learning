import React from 'react'
import {Layout, Menu, Icon} from 'antd';
import {NavLink} from 'react-router-dom';
import MenuConfig from '../../config/menuConfig'
import './index.less'

const SubMenu = Menu.SubMenu;
const {Sider} = Layout;

export default class NavLeft extends React.Component {
    state = {
        mode: 'inline',
        theme: 'dark',
        openKeys: ['sub1']
    }
    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

    onOpenChange = (openKeys) => {
        //TODO key没有获取到
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({openKeys});
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    }

    componentWillMount() {
        const menuTreeNode = this.renderMenu(MenuConfig);
        this.setState({
            menuTreeNode
        })
    }

    // 菜单渲染
    renderMenu = (data) => {

        return data.map((item) => {
            if (item.children) {
                return (
                    <SubMenu title={<span><Icon type="ant-design" /><span>{item.title}</span></span>} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>
                <NavLink to={item.key}>{item.title}</NavLink>
            </Menu.Item>
        })
    }

    render() {
        return (
            <Sider>
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt=""/>
                    <h1>TODO MS</h1>
                </div>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    openKeys={this.state.openKeys}
                    onOpenChange={this.onOpenChange}
                    mode={this.state.mode}
                    theme={this.state.theme}
                >

                    {this.state.menuTreeNode}
                    {/* <Menu.Item title="123123" key="123123">
                    123123
                        </Menu.Item> */}
                </Menu>
                {/* 参考人家做的 https://github.com/yezihaohao/react-admin/blob/cfc45efc6ed8e58bb1403381a50c5dc1e22d3961/src/components/SiderCustom.jsx */}
            </Sider>
        );
    }
}