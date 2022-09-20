
import { Button, Checkbox, Form, Input } from 'antd';
import { Radio } from 'antd';
import { useState } from 'react';
type LayoutType = Parameters<typeof Form>[0]['layout'];

const FormCollect = () => {
    const [formLayout, setFormLayout] = useState<LayoutType>('horizontal');

    const onFinish = (values) => {
        console.log('Success:', values);
        // 生成二维码

    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="姓名"
                name="username"
                rules={[
                    {
                        required: true,
                        message: '请输入姓名！',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="证件类型"
                name="document-type"
                rules={[
                    {
                        required: true,
                        message: '请选择证件类型',
                    },
                ]}
            >
                <Radio.Group value={formLayout}>
                    <Radio.Button value="horizontal">Horizontal</Radio.Button>
                    <Radio.Button value="vertical">Vertical</Radio.Button>
                    <Radio.Button value="inline">Inline</Radio.Button>
                </Radio.Group>
            </Form.Item>
            <Form.Item
                label="证件号码"
                name="identification"
                rules={[
                    {
                        required: true,
                        message: '请输入证件号码！',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="手机号码"
                name="phone"
                rules={[
                    {
                        required: true,
                        message: '请输入手机号码！',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="联系地址"
                name="address"
                rules={[
                    {
                        required: true,
                        message: '请输入联系地址！',
                    },
                ]}
            >
                <Input />
            </Form.Item>



            <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};
export default FormCollect