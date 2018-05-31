import React, { Component } from 'react';
import { Row, Col, Slider, Divider, InputNumber } from 'antd';



export class OptionTwo extends Component {

    constructor(props){
        super(props);

        this.state = {
            inputValueMax: 50,
            inputValueMin: 20,
        }
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
            </div>
        );
    }
}

export default OptionTwo;