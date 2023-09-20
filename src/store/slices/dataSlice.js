import { createSlice } from '@reduxjs/toolkit'

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    provider: null,
    signer: null,
    address: null,
    account: null,
    votings: [],
    proposals: []
  },
  reducers: {
    setProvider: (state, action) => {
      state.provider = action.payload
    },
    setSigner: (state, action) => {
        state.signer = action.payload
    },
    setAddress: (state, action) => {
        state.address = action.payload
    },
    setVotings: (state, action) => {
      state.votings = action.payload
    },
    setProposals: (state, action) => {
      state.proposals = action.payload
    },
    setAccount: (state, action) => {
      state.account = action.payload
    }
    
  }
})

export const { setProvider , setSigner , setAddress, setVotings, setProposals, setAccount } = dataSlice.actions

export default dataSlice.reducer