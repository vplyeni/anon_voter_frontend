import './App.css';
import React, { useEffect } from 'react';

import { Form } from 'antd';

import Navbar from './components/Navbar/Navbar';
import MiddleSection from './components/MiddleSection/MiddleSection';

import GiveVotingPowerModal from './components/GiveVotingPowerModal/GiveVotingPowerModal';
import ProposeModal from './components/ProposeModal/ProposeModal';

import { useVoter , useVoterNoSigner} from './hooks/useVoter';
import { useKeyholder } from './hooks/useKeyholder';

import { batch, useDispatch , useSelector } from 'react-redux';
import { setAccount, setProvider, setSigner, setAmIVoter, setHaveVotingPowerToGive,setTotalVoterCount, setVotingCount } from './store/slices/dataSlice';

import { ethers } from 'ethers';

function App() {

  const votingCount = useSelector(state=>state.data.votingCount);
  const provider = useSelector(state=>state.data.provider);
  const dispatch = useDispatch();

  const [openVotingPowerModal, setVotingPowerModal] = React.useState(false);
  const [openProposeModal, setProposeModal] = React.useState(false);
  
  const [form] = Form.useForm();
  const [propsalForm] = Form.useForm();

  const voterContract = useVoter();
  const voterContractNoSigner = useVoterNoSigner();
  const keyholderContract = useKeyholder();

  window.ethereum.on('accountsChanged',async (accounts) => {
    console.log(accounts);
    if(accounts.length>0){
      console.log("chang1");
      const amiVoter = await  voterContract?.amIVOTER();     
      const haveVotingPowerToGive =  await keyholderContract?.amiVoter();
      console.log("chang2");
      dispatch(setAmIVoter(amiVoter));
      dispatch(setHaveVotingPowerToGive(haveVotingPowerToGive));
      dispatch(setAccount(accounts[0]));
      console.log("change3");
    }else{
      console.log("chang5");
      batch(()=>{
        dispatch(setAmIVoter(false));
        dispatch(setHaveVotingPowerToGive(false));
        dispatch(setAccount(null));
      })
    }
  });

  useEffect(()=>{
    if(voterContractNoSigner&&votingCount===-1){
      voterContractNoSigner?.voteId().then((res)=>{
        console.log(res);
        dispatch(setVotingCount(res));
      }).catch((err)=>{
        console.log(err);
      });
    }
  },[voterContractNoSigner]);

  useEffect(()=>{
    console.log("useEffect1");
    if (typeof window.ethereum !== 'undefined') {
      const _provider = new ethers.providers.Web3Provider(window.ethereum);
      if(!provider){
        const signer = _provider.getSigner();
        console.log("signer",signer);
        batch(()=>{
          dispatch(setProvider(_provider));          
        })
        console.log("provider set",_provider);
      }
    }else{
      alert('MetaMask is not installed!');
    }
  },[]);

  function connect() {
    console.log("con",voterContractNoSigner);
    if (provider) {
      provider
        .send("eth_requestAccounts",[])
        .then(async (accounts) => {
          const signer = await provider.getSigner();
          const address = signer.getAddress();
          const amiVoter =  voterContract?.amIVOTER();     
          const haveVotingPowerToGive =  keyholderContract?.amiVoter();

          await Promise.all([amiVoter,address,haveVotingPowerToGive]).then((res)=>{
            batch(() => {
              dispatch(setAmIVoter(res[0]));
              dispatch(setSigner(signer));
              dispatch(setAccount(accounts[0]));
              dispatch(setHaveVotingPowerToGive(res[2]));
            });
          });
          console.log("Connected");

        }).catch((err)=>{
          console.log(err);
        })

    }else{
      console.log("There is no provider");
    }
  }

  return (
    <div className="App">
      <Navbar connect={connect} openVotingPowerModal={openVotingPowerModal} setVotingPowerModal={setVotingPowerModal} openProposeModal={openProposeModal} setProposeModal={setProposeModal}/>
      <MiddleSection voterContract={voterContract} />
      <GiveVotingPowerModal 
        onOk={()=>{
          form
          .validateFields()
          .then((values) => {
            keyholderContract?.giveVotingPower(values.address).then((res) => {
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
            voterContract?.openProposal(values.type,values.topic)
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
