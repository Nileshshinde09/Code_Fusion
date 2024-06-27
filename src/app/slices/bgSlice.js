import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bg:'nbg'
}

const bgSlice = createSlice({
  name: "background",
  initialState,
  reducers: {
    setBG:(state,actions)=>{
        state.bg='nbg'
    },
    setWinnerBG:(state,actions)=>{
        state.bg='wbg'
    },
    setfinalRoundBG:(state,actions)=>{
        state.bg='fbg'
    }
  }
})

export const { setBG,setWinnerBG,setfinalRoundBG } = bgSlice.actions;

export default bgSlice.reducer;