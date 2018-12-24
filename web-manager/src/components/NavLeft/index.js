import React from 'react'
import { Layout,Menu, Icon } from 'antd';
import MenuConfig from '../../config/menuConfig'
import './index.less'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Sider } = Layout;

export default class NavLeft extends React.Component {
    state = {
        mode: 'inline',
        theme: 'light',
      }
  
    componentWillMount(){
        
        const menuTreeNode = this.renderMenu(MenuConfig);

        this.setState({
            menuTreeNode
        })
    }

       // 菜单渲染
       renderMenu =(data)=>{
       
        return data.map((item)=>{
            if(item.children){
                return (
                    <SubMenu title={<span><Icon type="mail" /><span>{item.title}</span></span>} key={item.key}>
                        <MenuItemGroup key="g1" title={item.title}>
                            { this.renderMenu(item.children)}
                        </MenuItemGroup>
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>
                {item.title}
            </Menu.Item>
        })
    }

    render() {
        return (
            <Sider style={{overflow: 'auto', height: '100vh', position: 'fixed',left: 0}}>
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt=""/>
                    <h1>TODO MS</h1>
                </div>
                <Menu  
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}

                    mode={this.state.mode}
                    theme={this.state.theme}>
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