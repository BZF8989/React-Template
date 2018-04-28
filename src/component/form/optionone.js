import React, { Component } from 'react';
import { Form, Icon, Input, Button, Upload, Col, Row, DatePicker } from 'antd';

const FormItem = Form.Item;

export class OptionOne extends Component {

    constructor(props) {
        super(props);

        this.state = {
            password: '',
            confirm: '',
            agree: false,

        }
    }

    updatePass = (e) => {
        //console.log(e);
        this.setState({
            password: e.target.value,
        });
    }

    updateConfirmPass = (e) => {
        //console.log(e.target.value);
        this.setState({
            confirm: e.target.value,
        });
    }


    submit(){
        if(this.state.password == this.state.confirm && this.state.password.length > 0){
            
        }else{

        }
    }

    render() {
        return (
            <div className="content">
                
                <Row type="flex" justify="center">
                    <Col span={10}>
                        <h2>Registration</h2>
                        <Form layout="vertical">
                            <FormItem
                                label="Username"
                            >
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                            </FormItem>
                            <FormItem
                                label="Password"
                            >
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                                    type="password" 
                                    placeholder="Password" 
                                    //value={this.state.password}
                                    onChange={(e)=>this.updatePass(e)}
                                />
                            </FormItem>

                            <FormItem
                                label="Confirm Password"
                            >
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                                    type="password" 
                                    placeholder="Confirm Password" 
                                    onChange={(e)=>this.updateConfirmPass(e)}
                                />
                            </FormItem>
                            <FormItem label="Date Of Birth">
                                <DatePicker />
                            </FormItem>
                            <FormItem
                                label="Profile Picture"
                            >
                                <Upload.Dragger name="files" action="/">
                                    <p className="ant-upload-drag-icon">
                                        <Icon type="inbox" />
                                    </p>
                                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                    <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                                </Upload.Dragger>
                            </FormItem>
                            <FormItem
                                wrapperCol={{ span: 12, offset: 6 }}
                            >
                                <Button type="primary" onClick={()=>this.submit()}>Submit</Button>
                            </FormItem>
                        </Form>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default OptionOne;