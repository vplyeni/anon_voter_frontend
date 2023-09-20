export const KEYHOLDER_ABI = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "VOTERS",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "amiVoter",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "voter_address",
                "type": "address"
            }
        ],
        "name": "giveVotingPower",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "hile",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_contractAddress",
                "type": "address"
            }
        ],
        "name": "setVoterContractAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]

export const VOTER_ABI = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint16",
                "name": "proposalId",
                "type": "uint16"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "topic",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "uint32",
                "name": "voted",
                "type": "uint32"
            },
            {
                "indexed": false,
                "internalType": "uint32",
                "name": "result",
                "type": "uint32"
            }
        ],
        "name": "ProposalEnded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint16",
                "name": "proposalId",
                "type": "uint16"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "topic",
                "type": "string"
            }
        ],
        "name": "ProposalStarted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint16",
                "name": "voteId",
                "type": "uint16"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "topic",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "uint32",
                "name": "voted",
                "type": "uint32"
            },
            {
                "indexed": false,
                "internalType": "uint32",
                "name": "result",
                "type": "uint32"
            }
        ],
        "name": "VotingEnded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint16",
                "name": "voteId",
                "type": "uint16"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "topic",
                "type": "string"
            }
        ],
        "name": "VotingStarted",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "amIVOTER",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "id",
                "type": "uint16"
            }
        ],
        "name": "closeProposal",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "id",
                "type": "uint16"
            }
        ],
        "name": "closeVoting",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "skip",
                "type": "uint16"
            },
            {
                "internalType": "uint16",
                "name": "take",
                "type": "uint16"
            }
        ],
        "name": "getProposals",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint16",
                        "name": "id",
                        "type": "uint16"
                    },
                    {
                        "internalType": "string",
                        "name": "topic",
                        "type": "string"
                    },
                    {
                        "internalType": "uint32",
                        "name": "voted",
                        "type": "uint32"
                    },
                    {
                        "internalType": "uint32",
                        "name": "result",
                        "type": "uint32"
                    },
                    {
                        "internalType": "address",
                        "name": "proposer",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "blockNumberStarted",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "blockNumberWillNotEndBefore",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "blockNumberClosed",
                        "type": "uint256"
                    },
                    {
                        "internalType": "enum VoterContract.VotingType",
                        "name": "proposalType",
                        "type": "uint8"
                    }
                ],
                "internalType": "struct VoterContract.Proposal[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint8",
                "name": "skip",
                "type": "uint8"
            },
            {
                "internalType": "uint8",
                "name": "take",
                "type": "uint8"
            }
        ],
        "name": "getVotings",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint16",
                        "name": "id",
                        "type": "uint16"
                    },
                    {
                        "internalType": "string",
                        "name": "topic",
                        "type": "string"
                    },
                    {
                        "internalType": "uint32",
                        "name": "voted",
                        "type": "uint32"
                    },
                    {
                        "internalType": "uint32",
                        "name": "result",
                        "type": "uint32"
                    },
                    {
                        "internalType": "address",
                        "name": "proposer",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "blockNumberStarted",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "blockNumberWillNotEndBefore",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "blockNumberClosed",
                        "type": "uint256"
                    },
                    {
                        "internalType": "enum VoterContract.VotingType",
                        "name": "votingType",
                        "type": "uint8"
                    }
                ],
                "internalType": "struct VoterContract.Voting[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "voterAddress",
                "type": "address"
            }
        ],
        "name": "giveVotingPower",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "keyHolder",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "enum VoterContract.VotingType",
                "name": "_proposalType",
                "type": "uint8"
            },
            {
                "internalType": "string",
                "name": "_topic",
                "type": "string"
            }
        ],
        "name": "openProposal",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "proposalId",
        "outputs": [
            {
                "internalType": "uint16",
                "name": "",
                "type": "uint16"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "",
                "type": "uint16"
            }
        ],
        "name": "proposals",
        "outputs": [
            {
                "internalType": "uint16",
                "name": "id",
                "type": "uint16"
            },
            {
                "internalType": "string",
                "name": "topic",
                "type": "string"
            },
            {
                "internalType": "uint32",
                "name": "voted",
                "type": "uint32"
            },
            {
                "internalType": "uint32",
                "name": "result",
                "type": "uint32"
            },
            {
                "internalType": "address",
                "name": "proposer",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "blockNumberStarted",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "blockNumberWillNotEndBefore",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "blockNumberClosed",
                "type": "uint256"
            },
            {
                "internalType": "enum VoterContract.VotingType",
                "name": "proposalType",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "adr",
                "type": "address"
            }
        ],
        "name": "setKeyHolderAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalVoterCount",
        "outputs": [
            {
                "internalType": "uint16",
                "name": "",
                "type": "uint16"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "id",
                "type": "uint16"
            },
            {
                "internalType": "uint8",
                "name": "vote",
                "type": "uint8"
            }
        ],
        "name": "useVotePowerOne2Ten",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "id",
                "type": "uint16"
            },
            {
                "internalType": "uint8",
                "name": "vote",
                "type": "uint8"
            }
        ],
        "name": "useVotePowerProposalOne2Ten",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "id",
                "type": "uint16"
            },
            {
                "internalType": "enum VoterContract.NoYes",
                "name": "vote",
                "type": "uint8"
            }
        ],
        "name": "useVotePowerProposalYesNo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "id",
                "type": "uint16"
            },
            {
                "internalType": "enum VoterContract.NoYes",
                "name": "vote",
                "type": "uint8"
            }
        ],
        "name": "useVotePowerYesNo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "voteId",
        "outputs": [
            {
                "internalType": "uint16",
                "name": "",
                "type": "uint16"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "",
                "type": "uint16"
            }
        ],
        "name": "votings",
        "outputs": [
            {
                "internalType": "uint16",
                "name": "id",
                "type": "uint16"
            },
            {
                "internalType": "string",
                "name": "topic",
                "type": "string"
            },
            {
                "internalType": "uint32",
                "name": "voted",
                "type": "uint32"
            },
            {
                "internalType": "uint32",
                "name": "result",
                "type": "uint32"
            },
            {
                "internalType": "address",
                "name": "proposer",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "blockNumberStarted",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "blockNumberWillNotEndBefore",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "blockNumberClosed",
                "type": "uint256"
            },
            {
                "internalType": "enum VoterContract.VotingType",
                "name": "votingType",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "whatDidIVote",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]