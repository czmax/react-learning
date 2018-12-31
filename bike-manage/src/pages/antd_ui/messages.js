import React from 'react'
import {Card, Button, message} from 'antd';
import './ui.less'

export default class Messages extends React.Component {
    showMessages = (type, content) => {
        message[type](content,3);
    }


    render() {
        return (
            <div>
                <Card title="全局提示框" className="card-wrap">
                    <Button onClick={() => this.showMessages('success','Success')}>Success</Button>
                    <Button onClick={() => this.showMessages('info','Info')}>Info</Button>
                    <Button onClick={() => this.showMessages('warning','Warning')}>Warning</Button>
                    <Button onClick={() => this.showMessages('error','Error')}>Error</Button>
                    <Button onClick={() => this.showMessages('loading','Loading')}>Loading</Button>

                </Card>

            </div>
        );
    }
}