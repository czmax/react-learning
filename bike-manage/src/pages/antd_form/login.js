import React from 'react'
import {Form, Card, Input, Button, Icon, message, Checkbox} from 'antd';
import './form.less'

const FormItem = Form.Item;

class FormLogin extends React.Component {
    handleSubmit = () => {
        let userInfo = this.props.form.getFieldsValue();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                message.success(`${userInfo.userName} 登陆成功，当前密码为：${userInfo.password}`)
            }
        })
    }

    render() {
        /*默认写法*/
        const {getFieldDecorator} = this.props.form;

        return (
            <div>
                <Card title="登录行内表单">
                    <Form layout="inline">
                        <FormItem>
                            <Input placeholder="请输入用户名"/>

                        </FormItem>
                        <FormItem>
                            <Input placeholder="请输入密码"/>

                        </FormItem>
                        <FormItem>
                            <Button type="primary">登录</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card title="登录垂直表单" style={{marginTop: 10}}>
                    <Form className="login-form" style={{width: 300}}>
                        <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [
                                    {required: true, message: '用户名不能为空!'},
                                    {min: 5, max: 10, message: '长度不在范围内!'},
                                    {pattern: new RegExp('^\\w+$', 'g'), message: '用户名必须为字母或者数字'}
                                ],
                                // initialValue: 'abc'
                            })(
                                <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="请输入用户名"/>
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [],
                            })(
                                <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password" placeholder="请输入密码"/>
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>记住密码</Checkbox>
                            )}
                            <a href="" style={{float: 'right'}}>忘记密码</a>
                        </FormItem>
                        <FormItem> <Button type="primary" onClick={this.handleSubmit}>登录</Button></FormItem>
                    </Form>
                </Card>
            </div>
        );
    }
}

export default Form.create()(FormLogin);