import React from 'react'
import {Card, Button, Tabs, message, Icon} from 'antd';
import './ui.less'

const TabPane = Tabs.TabPane;

export default class uiTabs extends React.Component {
    newTabIndex = 0;
    handleCallback = (key) => {
        message.info("选择了页签:" + key)
    }

    componentWillMount() {
        const tabs = [
            {title: 'Tab 1', content: 'Content of Tab 1', key: '1'},
            {title: 'Tab 2', content: 'Content of Tab 2', key: '2'},
            {title: 'Tab 3', content: 'Content of Tab 3', key: '3', closable: false,},
        ]
        this.setState({
            activeKey: tabs[0].key,
            panes: tabs
        });
    }

    onChange = (activeKey) => {
        this.setState({
            activeKey
        });
    }

    onEdit = (targetKey, action) => {
        this[action](targetKey);
    }
    add = () => {
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({title: activeKey, content: 'Content of new Tab', key: activeKey});
        this.setState({panes, activeKey});
    }

    remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        //filter过滤行数，过滤掉关闭后剩下的panes
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (lastIndex >= 0 && activeKey === targetKey) {
            activeKey = panes[lastIndex].key;
        }
        this.setState({panes, activeKey});
    }

    render() {
        return (
            <div>
                <Card title="Tab页签" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <TabPane tab="Tab 11111" key="1">Content of Tab Pane 1</TabPane>
                        <TabPane tab="Tab 2" key="2" disabled>Content of Tab Pane 2</TabPane>
                        <TabPane tab="Tab 333" key="3">Content of Tab Pane 3</TabPane>
                    </Tabs>,
                </Card>
                <Card title="Tab带图标的页签" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        {/*大括号里，必须是根对象包裹起来的的{<span></span>}*/}
                        <TabPane tab={<span><Icon type="apple"/>Tab 1</span>} key="1">
                            Tab 1
                        </TabPane>
                        <TabPane tab={<span><Icon type="android"/>Tab 2</span>} key="2">
                            Tab 2
                        </TabPane>
                    </Tabs>,
                </Card>
                <Card title="Tab动态增加" className="card-wrap">
                    <Tabs
                        type="editable-card"
                        onChange={this.onChange}
                        activeKey={this.state.activeKey}
                        onEdit={this.onEdit}
                    >
                        {
                            this.state.panes.map((panel) => {
                                return <TabPane
                                    tab={panel.title}
                                    key={panel.key}
                                >{panel.content}</TabPane>
                            })
                        }

                    </Tabs>,
                </Card>
            </div>
        );
    }
}