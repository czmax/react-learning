import React from 'react'
import {Card, Button, Modal} from 'antd';
import './ui.less'

export default class Modals extends React.Component {
    state = {
        showModal1: false,
        showModal2: false,
        showModal3: false,
        showModal4: false,
        showModal5: false,
        confirmLoading: false
    }
    handleOpen = (type) => {
        /*[type]会当成一个变量*/
        this.setState({
            [type]: true
        });
    }

    handleOk = () => {
        this.setState({
            ModalText: 'The modal will be closed after two seconds',
            confirmLoading: true,
        });
        setTimeout(() => {
            this.setState({
                showModal5: false,
                confirmLoading: false,
            });
        }, 2000);
    }
    handleConfirm = (type) => {
        //  Modal['confirm']和Modal.confirm()是一样的
        Modal[type]({
            title: '确认？',
            content: '这是一个确认窗口的内容',
            onOk() {
                console.log("Ok")
            },
            onCancel() {
                console.log("Cancel")
            }

        })
    }

    render() {
        return (
            <div>
                <Card title="基础模态框" className="card-wrap">
                    {/*传参需要用箭头函数在前，这样点击时才调用*/}
                    <Button type="primary" onClick={() => this.handleOpen('showModal1')}>Open</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModal2')}>自定义页脚</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModal3')}>顶部20px弹窗</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModal4')}>水平垂直居中</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModal5')}>异步关闭</Button>
                </Card>
                <Card title="信息确认框" className="card-wrap">
                    {/*传参需要用箭头函数在前，这样点击时才调用*/}
                    <Button type="primary" onClick={() => this.handleConfirm('confirm')}>Confirm</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('info')}>Info</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('success')}>Success</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('warning')}>Warning</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('error')}>Error</Button>
                </Card>
                <Modal
                    title="React"
                    visible={this.state.showModal1}
                    onCancel={() => {
                        this.setState({
                            showModal1: false
                        });
                    }}
                >
                    <p>这里是弹出modal里的内容</p>

                </Modal>
                <Modal
                    title="自定义页脚"
                    visible={this.state.showModal2}
                    okText="好的"
                    cancelText="算了"
                    onCancel={() => {
                        this.setState({
                            showModal2: false
                        });
                    }}
                >
                    <p>这里是弹出modal里的内容，自定义页脚</p>

                </Modal>
                <Modal
                    title="20px to Top"
                    visible={this.state.showModal3}
                    style={{top: 20}}
                    onCancel={() => {
                        this.setState({
                            showModal3: false
                        });
                    }}
                >
                    <p>这里是弹出modal里的内容，距离顶部20px</p>

                </Modal>
                <Modal
                    title="Vertically centered modal dialog"
                    visible={this.state.showModal4}

                    centered
                    onCancel={() => {
                        this.setState({
                            showModal4: false
                        });
                    }}
                >
                    <p>这里是弹出modal里的内容，中间弹窗</p>

                </Modal>
                <Modal
                    title="The modal will be closed after two seconds"
                    visible={this.state.showModal5}
                    wrapClassName="vertical-center-modal" //自定义样式
                    onOk={this.handleOk}
                    confirmLoading={this.state.confirmLoading}
                    onCancel={() => {
                        this.setState({
                            showModal5: false
                        });
                    }}
                >
                    <p>{this.state.ModalText}</p>

                </Modal>


            </div>
        );
    }
}