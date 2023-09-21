import { createSlice } from '@reduxjs/toolkit'

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    amiVoter: false,
    provider: null,
    signer: null,
    account: null,
    votings: null,
    proposals: null,
    haveVotingPowerToGive: false,
    votingCount:-1,
    proposalCount:-1,
  },
  reducers: {
    setProvider: (state, action) => {
      state.provider = action.payload
    },
    setSigner: (state, action) => {
        state.signer = action.payload
    },
    setVotings: (state, action) => {
      state.votings = action.payload
    },
    setProposals: (state, action) => {
      state.proposals = action.payload
    },
    setAccount: (state, action) => {
      state.account = action.payload
    },
    setAmIVoter: (state, action) => {
      state.amiVoter = action.payload
    },
    setTotalVoterCount: (state, action) => {
      state.totalVoterCount = action.payload
    },
    setVotingCount: (state, action) => {
      state.votingCount = action.payload
    },
    setProposalCount: (state, action) => {
      state.proposalCount = action.payload
    },
    setHaveVotingPowerToGive: (state, action) => {
      state.haveVotingPowerToGive = action.payload
    }
  }
})

export const { setProvider , setSigner , setAddress, setVotings, setProposals, setAccount, setAmIVoter, setTotalVoterCount, setHaveVotingPowerToGive, setVotingCount, setProposalCount } = dataSlice.actions

export default dataSlice.reducer