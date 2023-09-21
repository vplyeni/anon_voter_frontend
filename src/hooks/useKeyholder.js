import {useState,useEffect} from 'react';
import { ethers } from 'ethers';
import { KEYHOLDER_ABI } from '../constants/metadata';
import { KEYHOLDER_ADDRESS } from '../constants/addresses';

export const useKeyholder = () => {
    const [keyholderContract, setKeyholderContract] = useState(null);

    useEffect(() => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const _contract = new ethers.Contract(KEYHOLDER_ADDRESS, KEYHOLDER_ABI, provider.getSigner());
        setKeyholderContract(_contract);
    },[]);

    return keyholderContract;
}

export const useKeyholderNoSigner = () => {
    const [keyholderContract, setKeyholderContract] = useState(null);

    useEffect(() => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const _contract = new ethers.Contract(KEYHOLDER_ADDRESS, KEYHOLDER_ABI, provider);
        setKeyholderContract(_contract);
    },[]);

    return keyholderContract;
}