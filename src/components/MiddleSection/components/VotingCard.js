import React from 'react';

import { Button, Card, Divider, Row, Col, ConfigProvider } from 'antd';

function VotingCard(props) {
    return (
        <Card style={{width:'300px'}}>
                    <Divider>Topic</Divider>
                    <div>
                        {props.voting?.topic}
                    </div>
                    
                    <Divider>Voted</Divider>
                    <div>
                        {props.voting?.voted}
                    </div>
                    <Divider>Result</Divider>
                    {props.voting?.votingType===1?
                    <div>
                        <>
                        Evet: {(props.voting?.result-props.voting?.voted)/9} | Hayır: {props.voting?.voted-((props.voting?.result-props.voting?.voted)/9)}
                        </>
                        <Row gutter={[10,10]} align={"middle"} justify={"center"}>
                            <Col>
                                <ConfigProvider
                                    theme={{
                                    token: {
                                        colorPrimary: '#00b96b',
                                    },
                                    }}
                                >
                                <Button type="primary" onClick={()=>{
                                    props.voterContract?.useVotePowerYesNo(1).then((res) => {
                                        console.log(res);
                                    }).catch((err) => {
                                        console.log(err);
                                    });
                                }}>
                                    Yes
                                </Button>
                                </ConfigProvider>
                            </Col>
                            <Col>
                                <ConfigProvider
                                    theme={{
                                    token: {
                                        colorPrimary: '#ff1111',
                                    },
                                    }}
                                >
                                <Button type="primary" onClick={()=>{
                                    props.voterContract?.useVotePowerYesNo(0).then((res) => {
                                        console.log(res);
                                    }).catch((err) => {
                                        console.log(err);
                                    });
                                }}>
                                    No
                                </Button>
                                </ConfigProvider>
                            </Col>
                        </Row>
                    </div>
                    
                    :
                    <div>
                        Ortalama : {props.voting?.voted===0?-1:(props.voting?.result/props.voting?.voted)}
                    </div>}
                </Card>
    );
}export default VotingCard;