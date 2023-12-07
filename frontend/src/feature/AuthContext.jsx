import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    token:localStorage.getItem("token") || "",
    isAuthenticated:localStorage.getItem("token")?true:false || false,
    userID:localStorage.getItem("userID") || null
}
const AuthSlice = createSlice({
   name:"auth",
   initialState,
   reducers:{
    login:(state,action)=>{
        state.isAuthenticated = true;
        state.user = action.payload
    }
   }
})
export const {login} = AuthSlice.actions
export default AuthSlice.reducer