import React from 'react';

import './votingCard.css'
import { useSelector } from 'react-redux';
import { Button, Card, Divider, Row, Col, ConfigProvider, Slider } from 'antd';

function ProposalCard(props) {

    let sliderValue = 10;

    const account = useSelector(state=>state.data.account);
    
    return (
        <Card style={{width:'100%', minHeight:'360px', backgroundColor:'#FCEBB6', border:false }}>
                    <Divider>Proposal Topic</Divider>
                    <div>
                        {props.proposal?.topic}
                    </div>
                    
                    <Divider>Voted</Divider>
                    <div>
                        {props.proposal?.voted}
                    </div>
                    <Divider>Result</Divider>
                    {props.proposal?.proposalType===1&&
                    <div>
                        <>
                        Evet: {(props.proposal?.result-props.proposal?.voted)/9} | Hayır: {props.proposal?.voted-((props.proposal?.result-props.proposal?.voted)/9)}
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
                                    console.log("Voted id :",props.proposal.id,"yes");
                                    props.voterContract?.useVotePowerProposalYesNo(props.proposal.id,1).catch((err) => {
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
                                    console.log("Voted id :",props.proposal.id,"no");
                                    props.voterContract?.useVotePowerProposalYesNo(props.proposal.id,0).catch((err) => {
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
                    
                    {props.proposal?.proposalType===2&&
                    <div>
                        Ortalama : {props.proposal?.voted===0?0:(props.proposal?.result/props.proposal?.voted)}
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
                                        props.voterContract?.useVotePowerProposalOne2Ten(props.proposal.id,sliderValue).catch((err) => {
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
                        props.proposal?.proposalType===0&&
                        <>
                            Average: {props.proposal?.voted!==0?props.proposal?.result/props.proposal?.voted:0} /10
                        </>
                    }
                    {   
                        props.proposal?.proposalType!==0&&props.amiVoter&&
                        <Button className='bottomRight' onClick={()=>{
                        props.voterContract?.closeProposal(props.proposal.id).catch((err) => {
                            console.log(err);
                        });
                        }}>Close Voting</Button>
                    }
                    
                </Card>
    );
}export default ProposalCard;