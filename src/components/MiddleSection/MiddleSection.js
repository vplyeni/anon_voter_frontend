import React, { useEffect } from 'react';
import './MiddleSection.css';

import { Button, Card, Divider, Row, Col, ConfigProvider } from 'antd';
import VotingCard from './components/VotingCard';

function MiddleSection(props) {
    return (
        <div className='middleContainer'>
            <Row>
            { 
                props.currentVoting?.filter((item)=>item.topic!="").map((item, index) => {
                    return (
                        <Col span={6}>
                            <VotingCard key={index} voting={item} voterContract={props.voterContract}></VotingCard>
                        </Col>)
                })
            }
            </Row>

        </div>
    );  
};
export default MiddleSection;