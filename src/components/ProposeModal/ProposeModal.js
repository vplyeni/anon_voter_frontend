import React from 'react';
import { Modal, Form, Input, Radio } from 'antd';


function ProposeModal(props) {

    const [value, setValue] = React.useState(1);

    const options = [
        { label: 'Yes No', value: 1 },
        { label: 'One to Ten', value: 2 },
      ];

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
                label="Propose Topic"
                name="topic"
                rules={[
                    {
                    required: true,
                    message: 'Please enter a proposal to VOTE!',
                    },
                ]}
                >
                <Input hint={"Please enter a proposal to VOTE!"} />
            </Form.Item>

            <Form.Item
                label="Type"
                name="type"
                rules={[
                    {
                    required: true,
                    message: 'Please choose a voting type!',
                    },
                ]}
                >
               <Radio.Group options={options} onChange={(res)=>{
                    console.log(res);
               }} value={value} />
            </Form.Item>
       </Form> 
    </Modal>
    );
}export default ProposeModal;