import React from 'react'
import {Carousel, Card, Icon, Radio, Spin} from 'antd';
import './ui.less'

export default class Carousels extends React.Component {
    render() {
        return (
            <div>
                <Card title="Carousels文字轮播图用法" className="card-wrap">
                    <Carousel autoplay effect="fade">
                        <div><h3>1</h3></div>
                        <div><h3>2</h3></div>
                        <div><h3>3</h3></div>
                        <div><h3>4</h3></div>
                    </Carousel>,

                </Card>

                <Card title="Carousels垂直图片轮播图用法" className="slide-wrap">
                    <Carousel autoplay effect="scrollx" vertical >
                        <div><img src="/carousel-img/carousel-1.jpg"/></div>
                        <div><img src="/carousel-img/carousel-2.jpg"/></div>
                        <div><img src="/carousel-img/carousel-3.jpg"/></div>

                    </Carousel>,

                </Card>
            </div>
        );
    }
}