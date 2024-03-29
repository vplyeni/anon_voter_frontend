import React from 'react';

import './votingCard.css'
import { useSelector } from 'react-redux';
import { Button, Card, Divider, Row, Col, ConfigProvider, Slider } from 'antd';

function VotingCard(props) {

    let sliderValue = 10;

    const account = useSelector(state=>state.data.account);
    
    return (
        <Card style={{width:'100%', minHeight:'360px', backgroundColor:'#FCEBB6', border:false }}>
                    <Divider>Voting Topic</Divider>
                    <div>
                        {props.voting?.topic}
                    </div>
                    
                    <Divider>Voted</Divider>
                    <div>
                        {props.voting?.voted}
                    </div>
                    <Divider>Result</Divider>
                    {props.voting?.votingType===1&&
                    <div>
                        <>
                        Evet: {(props.voting?.result-props.voting?.voted)/9} | Hayır: {props.voting?.voted-((props.voting?.result-props.voting?.voted)/9)}
                        </>
                        { account && props.amiVoter &&
                        <Row className='bottom' style={{marginTop:'15px'}} gutter={[10,10]} align={"middle"} justify={"center"}>
                            <Col>
                                <ConfigProvider
                                    theme={{
                                    token: {
                                        colorPrimary: '#00b96b',
                                    },
                                    }}
                                >
                                <Button type="primary" onClick={()=>{
                                    console.log("Voted id :",props.voting.id,"yes");
                                    props.voterContract?.useVotePowerYesNo(props.voting.id,1).catch((err) => {
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
                                    console.log("Voted id :",props.voting.id,"no");
                                    props.voterContract?.useVotePowerYesNo(props.voting.id,0).catch((err) => {
                                        console.log(err);
                                    });
                                }}>
                                    No
                                </Button>
                                </ConfigProvider>
                            </Col>
                        </Row>
                        }
                    </div>
                    }
                    
                    {props.voting?.votingType===2&&
                    <div>
                        Ortalama : {props.voting?.voted===0?0:(props.voting?.result/props.voting?.voted)}
                        {account&& props.amiVoter &&
                        <>
                        <Slider
                            style={{marginTop:'15px'}}
                            onChange={(value)=>{
                                sliderValue = value;
                            }}
                            defaultValue={sliderValue}
                            min={1}
                            max={10}
                            tooltip={{
                                placement: 'bottom', 
                            }}
                        />
                        <Row className='bottom' justify={"center"}>
                            <Col>
                                <Button 
                                    type='primary' 
                                    onClick={()=>{
                                        props.voterContract?.useVotePowerOne2Ten(props.voting.id,sliderValue).catch((err) => {
                                            console.log(err);
                                        });
                                    }}
                                >
                                Send
                                </Button>
                            </Col>
                        </Row>
                        </>
                        }
                    </div>
                    }
                    {
                        props.voting?.votingType===0&&
                        <>
                            Average: {props.voting?.voted!==0?props.voting?.result/props.voting?.voted:0} /10
                        </>
                    }
                    {   
                        props.voting?.votingType!==0&&props.amiVoter&&
                        <Button className='bottomRight' onClick={()=>{
                        props.voterContract?.closevoting(props.voting.id).catch((err) => {
                            console.log(err);
                        });
                        }}>Close Voting</Button>
                    }
                    
                </Card>
    );
}export default VotingCard;