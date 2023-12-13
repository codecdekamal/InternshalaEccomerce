import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    token:localStorage.getItem("token") || "",
    isAuthenticated:localStorage.getItem("token")?true:false || false,
    userID:localStorage.getItem("userID") || null,
    role:localStorage.getItem("role")
}
const AuthSlice = createSlice({
   name:"auth",
   initialState,
   reducers:{
    login:(state,action)=>{
        state.isAuthenticated = true;
        state.user = action.payload
    },
    logOut:(state) => {
        state.token = ""
        state.role = ""
        state.isAuthenticated =""
        state.userID = ""
    }
   }
})
export const {login,logOut} = AuthSlice.actions
export default AuthSlice.reducer