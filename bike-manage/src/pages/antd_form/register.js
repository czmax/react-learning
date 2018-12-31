import React from 'react'
import {Form, Card, Input, Radio, InputNumber, Switch, TimePicker, DatePicker, Icon, Upload, Select, Checkbox, Button, message} from 'antd';
import moment from 'moment';
import './form.less'

const FormItem = Form.Item;
const Option = Select.Option;
const TextArea = Input.TextArea;

class FromRegister extends React.Component {

    state = {
        loading: false,
    };
    getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }
    handleChange = (info) => {
        if (info.file.status === 'uploading') {
            this.setState({loading: true});
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            this.getBase64(info.file.originFileObj, imageUrl => this.setState({
                imageUrl,
                loading: false,
            }));
        }
    }
    handleSubmit = () => {
        let userInfo= this.props.form.getFieldsValue();
        console.log(JSON.stringify(userInfo));
        message.success(`${userInfo.userName} 注册成功，密码为：${userInfo.password}`)
    }

    render() {
        /*默认写法*/
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {xs: 24, sm: 4},
            wrapperCol: {xs: 24, sm: 12}
        }
        const offsetLayout = {
            wrapperCol: {xs: 24, sm: {span: 12, offset: 4}}
        }
        const rowObject = {
            minRows: 2,
            maxRows: 6
        }
        return (
            <div>
                <Card title="注册表单">
                    <Form layout="horizontal">
                        {/*{...formItemLayout}是es6的解构方式*/}
                        <FormItem label="用户名" {...formItemLayout}>
                            {getFieldDecorator('userName', {
                                rules: [
                                    {required: true, message: '用户名不能为空!'},
                                    {min: 5, max: 10, message: '长度不在范围内!'},
                                    {pattern: new RegExp('^\\w+$', 'g'), message: '用户名必须为字母或者数字'}
                                ]
                            })(
                                <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="请输入用户名"/>
                            )}
                        </FormItem>
                        <FormItem label="密码" {...formItemLayout}>
                            {getFieldDecorator('password', {
                                rules: [
                                    {required: true, message: '请输入密码!'}

                                ],
                                // initialValue: 'abc'
                            })(
                                <Input type="password" prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="请输入密码"/>
                            )}
                        </FormItem>
                        <FormItem label="性别" {...formItemLayout}>
                            {getFieldDecorator('sex', {
                                initialValue: '1'
                            })(
                                <Radio.Group>
                                    <Radio value="1">男</Radio>
                                    <Radio value="2">女</Radio>
                                </Radio.Group>
                            )}
                        </FormItem>
                        <FormItem label="年龄" {...formItemLayout}>
                            {getFieldDecorator('age', {
                                initialValue: '18'
                            })(
                                <InputNumber></InputNumber>
                            )}
                        </FormItem>
                        <FormItem label="当前状态" {...formItemLayout}>
                            {
                                getFieldDecorator('state', {
                                    initialValue: '5'
                                })(
                                    <Select>
                                        <Option value="1">咸鱼一条</Option>
                                        <Option value="2">风华浪子</Option>
                                        <Option value="3">北大才子一枚</Option>
                                        <Option value="4">百度FE</Option>
                                        <Option value="5">创业者</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="爱好" {...formItemLayout}>
                            {
                                getFieldDecorator('interest', {
                                    initialValue: ['2', '5', '4']
                                })(
                                    <Select mode="multiple">
                                        <Option value="1">游泳</Option>
                                        <Option value="2">打篮球</Option>
                                        <Option value="3">踢足球</Option>
                                        <Option value="4">跑步</Option>
                                        <Option value="5">爬山</Option>
                                        <Option value="6">骑行</Option>
                                        <Option value="7">桌球</Option>
                                        <Option value="8">麦霸</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="是否已婚" {...formItemLayout}>
                            {
                                getFieldDecorator('isMarried', {
                                    valuePropName: 'checked',
                                    initialValue: true
                                })(
                                    <Switch/>
                                )
                            }
                        </FormItem>
                        <FormItem label="生日" {...formItemLayout}>
                            {
                                getFieldDecorator('birthday', {
                                    initialValue: moment('2018-08-08')
                                })(
                                    <DatePicker
                                        showTime
                                        format="YYYY-MM-DD HH:mm:ss"
                                    />
                                )
                            }
                        </FormItem>
                        <FormItem label="联系地址" {...formItemLayout}>
                            {
                                getFieldDecorator('address', {
                                    initialValue: '北京市海淀区奥林匹克公园'
                                })(
                                    <TextArea
                                        autosize={rowObject}
                                    />
                                )
                            }
                        </FormItem>
                        <FormItem label="早起时间" {...formItemLayout}>
                            {
                                getFieldDecorator('time')(
                                    <TimePicker
                                        placeholder="Select Time"
                                    />
                                )
                            }
                        </FormItem>
                        <FormItem label="头像" {...formItemLayout}>
                            {
                                getFieldDecorator('userImg')(
                                    <Upload
                                        name="avatar"
                                        listType="picture-card"
                                        className="avatar-uploader"
                                        action="//jsonplaceholder.typicode.com/posts/"
                                        showUploadList={false}
                                        onChange={this.handleChange}
                                    >
                                        {this.state.imageUrl ? <img src={this.state.imageUrl}/> : <Icon type="plus"/>}
                                    </Upload>
                                )
                            }
                        </FormItem>
                        <FormItem  {...offsetLayout} >
                            {getFieldDecorator('xieyi')(
                                <Checkbox>我已经阅读过<a href="#">用户协议</a></Checkbox>
                            )}
                        </FormItem>
                        <FormItem  {...offsetLayout} >
                            <Button type="primary" onClick={this.handleSubmit}>注册</Button>
                        </FormItem>
                    </Form>

                </Card>
            </div>
        )
    }

}

export default Form.create()(FromRegister);