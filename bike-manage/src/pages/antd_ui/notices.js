import React from 'react'
import {Card, Button, notification} from 'antd';
import './ui.less'

export default class Notices extends React.Component {
    openNotificationWithIcon = (type, direction) => {
        if (direction) {
            notification.config({
                placement: direction
            });
        }

        notification[type]({
            message: '发工资了',
            description: '上个月的工资，今天发了。'
        })
    }

    render() {
        return (
            <div>
                <Card title="通知提醒框" className="card-wrap">
                    <Button onClick={() => this.openNotificationWithIcon('success')}>Success</Button>
                    <Button onClick={() => this.openNotificationWithIcon('info')}>Info</Button>
                    <Button onClick={() => this.openNotificationWithIcon('warning')}>Warning</Button>
                    <Button onClick={() => this.openNotificationWithIcon('error')}>Error</Button>

                </Card>
                <Card title="通知提醒框的位置" className="card-wrap">
                    <Button onClick={() => this.openNotificationWithIcon('success', 'bottomRight')}>Success</Button>
                    <Button onClick={() => this.openNotificationWithIcon('info', 'topLeft')}>Info</Button>
                    <Button onClick={() => this.openNotificationWithIcon('warning', 'topRight')}>Warning</Button>
                    <Button onClick={() => this.openNotificationWithIcon('error', 'bottomLeft')}>Error</Button>

                </Card>
            </div>
        );
    }
}