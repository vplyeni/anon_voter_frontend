import React from 'react';
import { Row, Col, Button } from 'antd';
import './Navbar.css';
import { ethers } from 'ethers';


function Navbar(props) {
  return (
    <div style={{height:'100px'}}>
      <Row className='rowContainer' align="middle" justify="start">
        <Col span={1}></Col>
        <Col className='colContainer' span={4}>
          <div className='center'>
            METU ANONYMOUS VOTER
          </div>
        </Col>
        <Col span={1}></Col>
        {props.account ?
          <Col className='colContainer' span={2}>
          <Button onClick={()=>{
            props.setVotingPowerModal(!props.openVotingPowerModal);
          }} type='text' style={{bottom:3,width:'100%',height:'50px'}}>
            Give Voting Power
          </Button>
        </Col>:<div></div>
        }
        <Col span={1}></Col>
        {props.account ?
          <Col className='colContainer' span={2}>
          <Button onClick={()=>{
            props.setProposeModal(!props.openProposeModal);
          }} type='text' style={{bottom:3,width:'100%',height:'50px'}}>
            Propose
          </Button>
        </Col>:<div></div>
        }
        
        <Col span={12}>
          <Row align="middle" justify="end">
            <Col className='colContainer' span={props.account?12:4}>
              <div className='center'>
                {
                  props.account ? 
                  props.account
                  :
                  <Button onClick={props.connect} type='text' style={{bottom:3,width:'100%',height:'50px'}}>
                  Connect Wallet
                  </Button>
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