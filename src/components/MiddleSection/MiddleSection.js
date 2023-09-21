import React, { useEffect } from 'react';
import './MiddleSection.css';

import { useVoter, useVoterNoSigner } from '../../hooks/useVoter';
import { batch, useDispatch , useSelector } from 'react-redux';
import { setAccount, setAddress, setProposals, setProvider, setSigner, setAmIVoter, setVotings } from '../../store/slices/dataSlice';

import { Button, Card, Divider, Row, Col, ConfigProvider, Pagination } from 'antd';
import VotingCard from './components/VotingCard';
import ProposalCard from './components/ProposalCard';

function MiddleSection(props) {

    const [take, setTake] = React.useState(0);
    const [page, setPage] = React.useState(4);

    const voterContract = useVoter();
    const voterContractNoSigner = useVoterNoSigner();
    
    const votingCount = useSelector(state=>state.data.votingCount);
    const proposalCount = useSelector(state=>state.data.proposalCount);
    const amiVoter = useSelector(state=>state.data.amiVoter)
    const proposals = useSelector(state=>state.data.proposals);
    const votings = useSelector(state=>state.data.votings);
    const account = useSelector(state=>state.data.account);
    const dispatch = useDispatch();

    async function update(){
        if(!account){
            console.log("update2");
            const proposals = voterContractNoSigner?.getProposals(0,4);
            const votings = voterContractNoSigner?.getVotings(0,4);

            await Promise.all([proposals,votings,votingCount[0],proposalCount[0]]).then((res)=>{
            console.log("res",res);
            
            batch(()=>{
                dispatch(setProposals(res[0].filter((e)=>e.topic!=='')));
                dispatch(setVotings(res[1].filter((e)=>e.topic!=='')));
            });
        })
        console.log("effect finish");
        }else{
            console.log("update4");
            const proposals = voterContract?.getProposals(0,4);
            const votings = voterContract?.getVotings(0,4);

            await Promise.all([proposals,votings]).then((res)=>{
            console.log("update5");
            batch(()=>{
                dispatch(setProposals(res[0].filter((e)=>e.topic!=='')));
                dispatch(setVotings(res[1].filter((e)=>e.topic!=='')));
            });
        })
        }
    }

    
    if(voterContract&&!proposals&&!votings){
        update();
    }

    console.log("middle section render total",votingCount,typeof votingCount);

    return (
        <Card className='middleContainer' loading={voterContract&&!proposals&&!votings}>
            <Divider>Votings</Divider>
            <Row gutter={[10,10]}>
                {votings&&votings.map((e,i)=>{
                    return(
                        <Col key={i} xs={12} s={12} md={12} lg={6} xl={6} xxl={6}>
                            <VotingCard voting={e} amiVoter={amiVoter} voterContract={voterContract}/>
                        </Col>
                    );
                })}
            </Row>
            {
                votingCount!==-1&&
                <Pagination pageSize={take} total={votingCount} ></Pagination>
            }
            
            <Divider>Proposals</Divider>
            <Row gutter={[10,10]}>
                {proposals&&proposals.map((e,i)=>{
                    return(
                        <Col key={i} span={6} xs={12} s={12} md={12} lg={6} xl={6} xxl={6}>
                            <ProposalCard proposal={e} amiVoter={amiVoter} voterContract={voterContract}></ProposalCard>
                        </Col>
                    );
                })}
            </Row>
        </Card>
    );  
};
export default MiddleSection;