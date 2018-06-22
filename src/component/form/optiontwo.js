import React, { Component } from 'react';
import { Row, Col, Slider, Divider, InputNumber, Select, Button } from 'antd';

const Option = Select.Option;



export class OptionTwo extends Component {

    constructor(props){
        super(props);

        this.state = {
            inputValueMax: 50,
            inputValueMin: 20,
        };

    }

    onChange = (value) => {
        //console.log(value);
        this.setState({
            inputValueMax: value[1],
            inputValueMin: value[0],
        })
    }

    updateMax = (value) => {
        //console.log(value);
        this.setState({
            inputValueMax: value
        })
    }

    updateMin = (value) => {
        //console.log(value);
        this.setState({
            inputValueMin: value
        })
    }

    render() {
        let children = this.state.freeDays;
        return (
            <div>
                <h1>Special Forms!</h1>
                <Row>
                    <Col>
                        <Divider/>
                        <h2>How much are you willing to pay for a meal? </h2>
                        <InputNumber
                            formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            parser={value => value.replace(/\$\s?|(,*)/g, '')}
                            min={0}
                            max={this.state.inputValueMax}
                            style={{ marginLeft: 16 }}
                            value={this.state.inputValueMin}
                            onChange={this.updateMin}
                            step={1}
                        /> to
                        <InputNumber
                            formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            parser={value => value.replace(/\$\s?|(,*)/g, '')}
                            min={this.state.inputValueMin}
                            max={100}
                            style={{ marginLeft: 16 }}
                            value={this.state.inputValueMax}
                            onChange={this.updateMax}
                            step={1}
                        />
                        <Slider
                            range
                            value={[this.state.inputValueMin, this.state.inputValueMax]}
                            onChange={this.onChange}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <Divider/>
                        <h2>Which days of the week are you free?</h2>
                    </Col>
                    <Col span={12}>
                        <Divider/>
                        <h2>Which meals would you prefer?</h2>
                    </Col>
                </Row>
                <Row gutter={48}>
                    <Col span={12}>
                        <Select
                            mode="tags"
                            style={{ width: 400 }}
                            placeholder="Please add a day you are free"
                            className="days"
                        >
                            <Option value="Choose Option..." disabled >Choose Option...</Option>
                            <Option value="Monday">Monday</Option>
                            <Option value="Tuesday">Tuesday</Option>
                            <Option value="Wednesday">Wednesday</Option>
                            <Option value="Thursday">Thursday</Option>
                            <Option value="Friday">Friday</Option>
                            <Option value="Saturday">Saturday</Option>
                            <Option value="Sunday">Sunday</Option>
                        </Select>
                    </Col>
                    <Col span={12}>
                        <Select
                            mode="tags"
                            style={{ width: 400 }}
                            placeholder="Please meals you would like..."
                            className="meals"
                        >
                            <Option value="Choose Option..." disabled >Choose Option...</Option>
                            <Option value="Breakfast">Breakfast</Option>
                            <Option value="Lunch">Lunch</Option>
                            <Option value="Dinner">Dinner</Option>
                        </Select>

                    </Col>
                </Row>
            </div>
        );
    }
}

export default OptionTwo;