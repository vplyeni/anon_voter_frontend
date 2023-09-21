import React from 'react';
import { Row, Col, Button, Spin } from 'antd';
import './Navbar.css';
import { useDispatch , useSelector } from 'react-redux';
//import { setAccount, setAddress, setProposals, setProvider, setSigner } from './store/slices/dataSlice';
//import { ethers } from 'ethers';


function Navbar(props) {

  const [loading, setLoading] = React.useState([false]);

  const account = useSelector(state=>state.data.account);
  const haveVotingPowerToGive = useSelector(state=>state.data.haveVotingPowerToGive);
  const amiVoter = useSelector(state=>state.data.amiVoter);
  const dispatch = useDispatch();

  if(account){
    loading[0] = false;
  }

  return (
    <div style={{height:'120px'}}>
      <Row className='rowContainer' align="middle" justify="start">
        <Col span={1}></Col>
        <Col className='colContainer' span={4}>
          <div className='center'>
            METU ANONYMOUS VOTER
          </div>
        </Col>
        <Col span={1}></Col>
        {account&&haveVotingPowerToGive?
          <Col className='colContainer' span={2}>
          <Button onClick={()=>{
            props.setVotingPowerModal(!props.openVotingPowerModal);
          }} type='text' style={{bottom:3,width:'100%',height:'50px'}}>
            Give Voting Power
          </Button>
        </Col>:<Col span={2}></Col>
        }
        <Col span={1}></Col>
        {account&&amiVoter ?
          <Col className='colContainer' span={2}>
          <Button onClick={()=>{
            props.setProposeModal(!props.openProposeModal);
          }} type='text' style={{bottom:3,width:'100%',height:'50px'}}>
            Propose
          </Button>
        </Col>:<Col span={2}></Col>
        }
        
        <Col span={12}>
          <Row align="middle" justify="end">
            <Col className='colContainer' xs={account?23:12} sm={account?23:12} md={account?23:12} lg={account?12:4} xl={account?12:4} xll={account?12:4}>
              <div className='center'>
                {
                  !account && !loading[0] ? 
                  <Button onClick={()=>{
                    setLoading([true]);
                    props.connect();
                  }} type='text' style={{bottom:3,width:'100%',height:'50px'}}>
                  Connect Wallet
                  </Button>
                  :
                  (account?account
                  :<Spin/>)
                }
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
    
  );  
};
export default Navbar;