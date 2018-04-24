import React, { Component } from 'react';
import { Divider } from 'antd';
import { Card, Col, Row, Carousel, Collapse } from 'antd';
import Animal from '../images/animals1.jpg';
import Car2 from '../images/car5.jpg';
import Nature1 from '../images/nature2.jpg';
import Nature2 from '../images/nature5.jpg';

const Panel = Collapse.Panel;

export class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Row gutter={32}>
                    <Col span={8}>
                        <Card title="Sample Column Of Data" hoverable={true}>
                            <p>Some context</p>
                        </Card>
                    </Col>
                    <Col span={16}>
                        <Card title="Sample of a Wider Column Of Data" hoverable={true}>
                            <p>More Data!</p>
                        </Card>

                    </Col>
                </Row>
                <Divider>Presenter</Divider>
                <Collapse accordion>
                    <Panel header="Carousel" key="demo1">
                        <Carousel autoplay className="carousel">
                            <div><img width="100%" src={Animal} alt="Bird" /></div>
                            <div><img width="100%" src={Nature1} alt="Nature" /></div>
                            <div><img width="100%" src={Car2} alt="Car" /></div>
                            <div><img width="100%" src={Nature2} alt="Nature" /></div>
                        </Carousel>
                    </Panel>
                </Collapse>
            </div>
        );
    }
}

export default Home;