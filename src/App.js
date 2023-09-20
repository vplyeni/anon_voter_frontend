import './App.css';
import React from 'react';
import { ethers } from 'ethers';
import { Form } from 'antd';
import { useVoter } from './hooks/useVoter';
import Navbar from './components/Navbar/Navbar';
import MiddleSection from './components/MiddleSection/MiddleSection';
import GiveVotingPowerModal from './components/GiveVotingPowerModal/GiveVotingPowerModal';
import { useKeyholder } from './hooks/useKeyholder';
import ProposeModal from './components/ProposeModal/ProposeModal';

function App() {
  const [currentVotings, setCurrentVotings] = React.useState(null);
  const [totalVoterCount, setTotalVoterCount] = React.useState(0);
  
  const [account, setAccount] = React.useState(0);
  const [provider, setProvider] = React.useState(null);

  const [openVotingPowerModal, setVotingPowerModal] = React.useState(false);
  const [openProposeModal, setProposeModal] = React.useState(false);
  
  const [form] = Form.useForm();
  const [propsalForm] = Form.useForm();
  const voterContract = useVoter();
  const keyholderContract = useKeyholder();

  async function getCurrentVoting() {
    voterContract?.getLastVotings(4).then((res) => {
      setCurrentVotings(res);
      voterContract?.totalVoterCount().then((res) => {
        setTotalVoterCount(res);
      });
    });    
  }
  function connect() {
    if (typeof window.ethereum !== 'undefined') {
      const _provider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(_provider);
      _provider.send("eth_requestAccounts",[]).then(async (accounts) => {
        setAccount(accounts[0]);
        await getCurrentVoting();
      }).catch((err) => {
        console.log(err);
      });
    }else{
      console.log('MetaMask is not installed!');
    }
  }
  return (
    <div className="App">
      <Navbar account={account} connect={connect} openVotingPowerModal={openVotingPowerModal} setVotingPowerModal={setVotingPowerModal} setProposeModal={setProposeModal}/>
      <MiddleSection account={account} currentVoting={currentVotings} totalVoterCount={totalVoterCount} provider={provider} voterContract={voterContract} />
      <GiveVotingPowerModal 
        onOk={()=>{
          form
          .validateFields()
          .then((values) => {
            console.log(values);
            keyholderContract?.giveVotingPower(values.address).then((res) => {
              console.log(res);
            }).catch((err) => {
              console.log(err);
            });

            setVotingPowerModal(false);
            form.resetFields();

          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
        }}
        onCancel={()=>{
          setVotingPowerModal(false);
        }}
        open={openVotingPowerModal}
        form={form}
      />
      <ProposeModal 
        onOk={()=>{
          form
          .validateFields()
          .then((values) => {
            console.log(values);
            keyholderContract?.giveVotingPower(values.address).then((res) => {
              console.log(res);
            }).catch((err) => {
              console.log(err);
            });

            setProposeModal(false);
            form.resetFields();

          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
        }}
        onCancel={()=>{
          setProposeModal(false);
        }}
        open={openProposeModal}
        form={propsalForm}
      />
    </div>
  );
}

export default App;
