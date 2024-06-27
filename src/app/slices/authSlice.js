import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    status: false,
    userData: null,
    complitionState:false
}
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload;
        },
        logout: (state) => {

            state.status = false;
            state.userData = null;
        },
        complition:(state)=>{
            state.complitionState=true;
        }
    }
})

export const { login, logout} = authSlice.actions;

export default authSlice.reducer;