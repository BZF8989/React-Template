import React, { Component } from 'react';
import { Form, Icon, Input, Button, Upload, Col, Row, DatePicker, Alert } from 'antd';

const FormItem = Form.Item;

export class OptionOne extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: '',
            password: '',
            confirm: '',
            formError: false,
            userError: false,
            success: false
        }
    }

    updateUser = (e) => {
        this.setState({
            user: e.target.value,
        });
    }

    updatePass = (e) => {
        this.setState({
            password: e.target.value,
        });
    }

    updateConfirmPass = (e) => {
        this.setState({
            confirm: e.target.value,
        });
    }


    submit() {
        if (!(this.state.password === this.state.confirm && this.state.password.length > 7)) {
            this.setState({
                formError: true,
            });
        }
        if (this.state.user.length < 5) {
            this.setState({
                userError: true,
            });

        }
        if (this.state.password === this.state.confirm && this.state.password.length > 7 && this.state.user.length >= 5) {
            this.setState({
                formError: false,
                userError: false,
                success: true,
                user: '',
                password: '',
                confirm: '',
            });
        }
    }

    resetFormError() {
        this.setState({
            formError: false,
        });
    }

    resetUserError() {
        this.setState({
            userError: false,
        });
    }



    render() {
        return (
            <div className="content">

                <Row type="flex" justify="center">
                    <Col span={10}>
                        <h2>Registration</h2>
                        {this.state.success ?
                            <Alert
                                message="Registation Successful!"
                                description="You can now login!"
                                type="success"
                                closable
                                showIcon
                                onClose={() => this.resetFormError()}
                            /> : null
                        }

                        {this.state.formError ?
                            <Alert
                                message="Error"
                                description="Passwords do not match or password is not 8 characters long!"
                                type="error"
                                closable
                                showIcon
                                onClose={() => this.resetFormError()}
                            /> : null
                        }
                        {this.state.userError ?
                            <Alert
                                message="Error Text"
                                description="Username requires to be at least 5 characters"
                                type="error"
                                closable
                                showIcon
                                onClose={() => this.resetUserError()}
                            /> : null
                        }
                        <Form layout="vertical">
                            <FormItem
                                label="Username"
                            >
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Username"
                                    onChange={(e) => this.updateUser(e)}
                                />
                            </FormItem>
                            <FormItem
                                label="Password"
                            >
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Password"
                                    onChange={(e) => this.updatePass(e)}
                                />
                            </FormItem>

                            <FormItem
                                label="Confirm Password"
                            >
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Confirm Password"
                                    onChange={(e) => this.updateConfirmPass(e)}
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
                                <Button type="primary" onClick={() => this.submit()}>Submit</Button>
                            </FormItem>
                        </Form>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default OptionOne;