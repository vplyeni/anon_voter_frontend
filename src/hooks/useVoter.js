import {useState,useEffect} from 'react';
import { ethers } from 'ethers';
import { VOTER_ABI } from '../constants/metadata';
import { VOTER_ADDRESS } from '../constants/addresses';

export const useVoter = () => {
    const [voterContract, setVoterContract] = useState(null);

    useEffect(() => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const _contract = new ethers.Contract(VOTER_ADDRESS, VOTER_ABI, provider.getSigner());
        setVoterContract(_contract);
    },[]);

    return voterContract;
}