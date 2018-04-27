import React, { Component } from 'react';
import { Modal, Button, notification, Row, Col, Divider, Radio, Form, Input, DatePicker, Icon, Rate, InputNumber } from 'antd';

const { RangePicker } = DatePicker;
const FormItem = Form.Item;

const openSuccessNotification = () => {
    notification.open({
        message: 'Form Data Saved!',
        description: 'Your form data has been successfully saved!',
        icon: <Icon type="check-circle" />
    });
};

const openCancelNotification = () => {
    notification.open({
        message: 'Form Data Lost!',
        description: 'No Data was Saved!',
        icon: <Icon type="close-circle" />
    });
};

const openValidationNotification = () => {
    notification.open({
        message: 'Form Data Incomplete!',
        description: 'No Data was Saved!',
        icon: <Icon type="warning" />
    });
};


const RepositoryCreateForm = Form.create()(
    class extends React.Component {
        render() {
            const { visible, onCancel, onCreate, form } = this.props;
            const { getFieldDecorator } = form;
            return (
                <Modal
                    visible={visible}
                    title="Create Your Git Repository!"
                    okText="Create"
                    onCancel={onCancel}
                    onOk={onCreate}
                >
                    <Form layout="vertical">
                        <FormItem label="Repository">
                            {getFieldDecorator('Repository Name', {
                                rules: [{ required: true, message: 'Please input a name for your repository' }],
                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem label="Description">
                            {getFieldDecorator('description')(<Input type="textarea" />)}
                        </FormItem>
                        <FormItem label="Project Date Range">
                            {getFieldDecorator('Date Range',
                                { rules: [{ required: true, message: 'Please select start and end date' }], })
                                (<RangePicker />)
                            }
                        </FormItem>
                        <FormItem className="collection-create-form_last-form-item">
                            {getFieldDecorator('modifier', {
                                initialValue: 'public',
                            })(
                                <Radio.Group>
                                    <Radio value="public">Public</Radio>
                                    <Radio value="private">Private</Radio>
                                </Radio.Group>
                            )}
                        </FormItem>
                    </Form>
                </Modal>
            );
        }
    }
);

const OtherModalForm = Form.create()(
    class extends React.Component {

        render() {
            const { visible, onCancel, onCreate, form, checkValue } = this.props;
            const { getFieldDecorator } = form;
            return (
                <Modal
                    visible={visible}
                    title="Another Creative Modal Form"
                    okText="Submit"
                    onCancel={onCancel}
                    onOk={onCreate}
                >
                    <Form layout="vertical">
                        <FormItem label="Rate Me!">
                            <Rate character={<Icon type="check" />} allowHalf onChange={(e) => this.props.updateCheck(e)} />
                            <InputNumber
                                min={0}
                                max={5}
                                style={{ marginLeft: 16 }}
                                value={this.props.checkValue}
                            />
                        </FormItem>
                    </Form>
                </Modal>
            );
        }
    }
);




export class ModalForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            showOtherModal: false,
            checkValue: 2.5,
        }
    }

    updateCheck = (value) => {

        this.setState({
            checkValue: value,
        });
    }

    showModal = () => {
        this.setState({
            showModal: true,
        });
    }

    showOtherModal = () => {
        this.setState({
            showOtherModal: true,
        });
    }

    handleCancel = () => {
        const form = this.formRef.props.form;
        openCancelNotification();
        form.resetFields();
        this.setState({
            showModal: false,
            showOtherModal: false,
        });
    }

    handleCreate = () => {
        const form = this.formRef.props.form;
        form.validateFields((err, values) => {
            if (err) {
                openValidationNotification();
                return;
            }
            openSuccessNotification();
            this.setState({
                showModal: false,
                showOtherModal: false,
            });
        });
    }

    saveFormRef = (formRef) => {
        this.formRef = formRef;
    }

    render() {
        return (
            <div>
                <Divider>Try Some Modal Forms!</Divider>
                <Row type="flex" justify="center">
                    <Col span={8}>
                        <Button type="primary" onClick={this.showModal}>Create Git Repository</Button>
                        <Button type="primary" onClick={this.showOtherModal}>Another Modal</Button>
                    </Col>
                </Row>
                <RepositoryCreateForm
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.showModal}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                />

                <OtherModalForm
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.showOtherModal}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                    checkValue={this.state.checkValue}
                    updateCheck={this.updateCheck}
                />

            </div>
        );
    }
}

export default ModalForm;