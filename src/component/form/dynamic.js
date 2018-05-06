import React, { Component } from 'react';
import { Form, Input, Icon, Button, Card } from 'antd';
const FormItem = Form.Item;

let uuid = 0;

class DynamicFieldSet extends React.Component {
    remove = (k) => {
        const { form } = this.props;
        const keys = form.getFieldValue('keys');
        if (keys.length === 0) {
            return;
        }

        form.setFieldsValue({
            keys: keys.filter(key => key !== k),
        });
    }

    add = () => {
        const { form } = this.props;
        const keys = form.getFieldValue('keys');
        const nextKeys = keys.concat(uuid);
        uuid++;
        form.setFieldsValue({
            keys: nextKeys,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {
        const { getFieldDecorator, getFieldValue } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 20 },
            },
        };
        const formItemLayoutWithOutLabel = {
            wrapperCol: {
                xs: { span: 24, offset: 0 },
                sm: { span: 20, offset: 4 },
            },
        };
        getFieldDecorator('keys', { initialValue: [] });
        const keys = getFieldValue('keys');
        const formItems = keys.map((k, index) => {
            return (
                <FormItem
                    {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                    label={index === 0 ? 'To Do List' : ''}
                    required={false}
                    key={k}
                >
                    {getFieldDecorator(`names[${k}]`, {
                        validateTrigger: ['onChange', 'onBlur'],
                        rules: [{
                            required: true,
                            whitespace: true,
                            message: "Please input a To Do Item or delete this field.",
                        }],
                    })(
                        <Input placeholder="To Do" style={{ width: '60%', marginRight: 8 }} />
                    )}
                    {keys.length > 0 ? (
                        <Icon
                            className="dynamic-delete-button"
                            type="minus-circle-o"
                            disabled={keys.length === 1}
                            onClick={() => this.remove(k)}
                        />
                    ) : null}
                </FormItem>
            );
        });
        return (
            <Card title="To Do List">
                <Form onSubmit={this.handleSubmit}>
                    {formItems}
                    <FormItem {...formItemLayoutWithOutLabel}>
                        <Button type="dashed" onClick={this.add} style={{ width: '60%' }}>
                            <Icon type="plus" /> Add To Do Item
            </Button>
                    </FormItem>
                    <FormItem {...formItemLayoutWithOutLabel}>
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </FormItem>
                </Form>
            </Card>
        );
    }
}

const DynamicForm = Form.create()(DynamicFieldSet);

export default DynamicForm;