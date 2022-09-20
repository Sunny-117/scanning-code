
import { Button, Radio, Checkbox, Form, Input, message } from 'antd';
import QRCode from 'qrcode'
import { useState } from 'react';
type LayoutType = Parameters<typeof Form>[0]['layout'];

const FormCollect = () => {
    const [formLayout, setFormLayout] = useState<LayoutType>('horizontal');
    const [qr_code_src, setQr_code_src] = useState('')
    const onFinish = (values) => {
        // 用字符串来存储
        let code_str = '';
        for (const key in values) {
            code_str += `${key}=${values[key]}`
        }
        QRCode.toDataURL(code_str, function (err, url) {
            setQr_code_src(url)
            console.log(url)
        })
    };

    const onFinishFailed = (errorInfo) => {
        message.error(`信息填写不全！！`)
    };

    const QrCodeComp = () => {
        return <>
            {qr_code_src && <img src={qr_code_src} alt="" />}
        </>
    }
    return (
        <div style={{
            marginTop: '100px'
        }}>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 8,
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
            {qr_code_src && <div className="qr-code" style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                {<QrCodeComp />}
            </div>}
        </div>

    );
};
export default FormCollect