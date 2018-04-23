import React, { Component } from 'react';
import { Modal, Button, notification, Row, Col, Divider, Radio, Form, Input } from 'antd';


const FormItem = Form.Item;

const openSuccessNotification = () => {
    notification.open({
        message: 'Form Data Saved!',
        description: 'Your form data has been successfully saved!',
    });
};

const openCancelNotification = () => {
    notification.open({
        message: 'Form Data Lost!',
        description: 'No Data was Saved!',
    });
};

const CollectionCreateForm = Form.create()(
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



export class ModalForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
        }
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleCancel = () => {
        const form = this.formRef.props.form;
        openCancelNotification();
        form.resetFields();
        this.setState({
            visible: false,
        });
    }

    handleCreate = () => {
        const form = this.formRef.props.form;
        form.validateFields((err, values) => {
          if (err) {
            openCancelNotification();
            return;
          }
          openSuccessNotification();
          this.setState({ visible: false });
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
                    </Col>
                </Row>
                <CollectionCreateForm
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                />

            </div>
        );
    }
}

export default ModalForm;