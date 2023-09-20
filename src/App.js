import './App.css';
import React, { useEffect } from 'react';

import { Form } from 'antd';

import Navbar from './components/Navbar/Navbar';
import MiddleSection from './components/MiddleSection/MiddleSection';

import GiveVotingPowerModal from './components/GiveVotingPowerModal/GiveVotingPowerModal';
import ProposeModal from './components/ProposeModal/ProposeModal';

import { useVoter } from './hooks/useVoter';
import { useKeyholder } from './hooks/useKeyholder';

import { batch, useDispatch , useSelector } from 'react-redux';
import { setAccount, setAddress, setProposals, setProvider, setSigner } from './store/slices/dataSlice';

import { ethers } from 'ethers';

function App() {

  const provider = useSelector(state=>state.data.provider);;
  const dispatch = useDispatch();

  const [openVotingPowerModal, setVotingPowerModal] = React.useState(false);
  const [openProposeModal, setProposeModal] = React.useState(false);
  
  const [form] = Form.useForm();
  const [propsalForm] = Form.useForm();

  const voterContract = useVoter();
  const keyholderContract = useKeyholder();

  useEffect(()=>{
    if (typeof window.ethereum !== 'undefined') {
      const _provider = new ethers.providers.Web3Provider(window.ethereum);
      dispatch(setProvider(_provider));

    }else{
      alert('MetaMask is not installed!');
    }
  },[]);

  function connect() {
    if (provider) {
      provider
        .send("eth_requestAccounts",[])
        .then((accounts) => {
          const signer = provider.getSigner();
          signer.getAddress().then((address)=>{
            batch(()=>{
              dispatch(setAddress(address));
              dispatch(setSigner(signer));
              dispatch(setAccount(accounts[0]))
            });
          }).catch((err)=>{
            console.log(err);
          })
        }).catch((err)=>{
          console.log(err);
        })

    }else{
      console.log("There is no provider");
    }
  }

  return (
    <div className="App">
      <Navbar openVotingPowerModal={openVotingPowerModal} setVotingPowerModal={setVotingPowerModal} openProposeModal={openProposeModal} setProposeModal={setProposeModal}/>
      <MiddleSection voterContract={voterContract} />
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
          propsalForm
          .validateFields()
          .then((values) => {
            console.log(values);
            voterContract?.openProposal(values.type,values.topic)
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });

            setProposeModal(false);
            propsalForm.resetFields();
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
