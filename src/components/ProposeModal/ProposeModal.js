import React from 'react';
import { Modal, Form, Input } from 'antd';


function ProposeModal(props) {
    return (
        <Modal
        open={props.open}
        onCancel={props.onCancel}
        onOk={props.onOk}
        >
       <Form
        
        style={{marginRight:'20px',marginLeft:'20px'}}
        form={props.form}
        title="Give Your Proposal for Community"
        oktext="Your Proposal for Community"

        labelCol={{
        span: 6,
        }}
        wrapperCol={{
        span: 18,
        }}
        onFinish={props.onFinish}
        autoComplete="off"
       >
            <Form.Item
                label="Propose"
                name="propose"
                rules={[
                    {
                    required: true,
                    message: 'Please enter a proposal to VOTE!',
                    },
                ]}
                >
                <Input hint={"Please enter a proposal to VOTE!"} />
            </Form.Item>
       </Form> 
    </Modal>
    );
}export default ProposeModal;