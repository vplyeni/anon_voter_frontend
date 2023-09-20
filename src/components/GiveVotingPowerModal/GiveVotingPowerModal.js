import { Modal } from 'antd';
import React from 'react';
import { Form, Input, Button } from 'antd';

function GiveVotingPowerModal(props) {
    
    return (
        <Modal
            open={props.open}
            onCancel={props.onCancel}
            onOk={props.onOk}
            >
           <Form
            
            style={{marginRight:'20px',marginLeft:'20px'}}
            form={props.form}
            title="Give Voting Power to Address"
            oktext="Give Voting Power"

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
                    label="Address"
                    name="address"
                    rules={[
                        {
                        required: true,
                        message: 'Please enter the address you want to give your VOTING POWER!',
                        },
                    ]}
                    >
                    <Input hint={"Give Voting Power to Address"} />
                </Form.Item>
           </Form> 
        </Modal>
    );
}
export default GiveVotingPowerModal;